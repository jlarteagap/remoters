import React, { useEffect, useRef, useState } from 'react'
import './companies.css'

import storage from '../../firebase'

const UploadLogo = (props) => {
    const [imageLogo, setImageLogo] = useState('')
    const [file, setFile] = useState()
    const [previewUrl, setPreviewUrl] = useState()
    const filePickerRef = useRef()

    useEffect(() => {
        if(!file){
            return
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    },[file])

    const pickedHandler = (e) => {
        let pickedFile

        if(e.target.files && e.target.files.length === 1) {
            pickedFile = e.target.files[0]
            setFile(pickedFile)

            storage.ref(`/companies/logos-${pickedFile.name}`).put(pickedFile)
            .on("state_changed", alert("success"), alert)
        }

    }

    const pickedImage = () => {
        filePickerRef.current.click()
    }
    return(
        <div className="center__logo">
            <input
                style={{display: "none"}}
                ref={filePickerRef}
                type="file"
                accept=".jpg, .png, .jpeg"
                onChange={pickedHandler}
            />
            <div>
                {previewUrl && <img src={previewUrl} alt="Logo previo" />}
                {!previewUrl && (
                    <div className="upload__logo">
                        <button
                            className="btn btn-green"
                            type="button"
                            onClick={pickedImage}>+
                        </button>
                        Agregar logo
                    </div>
                )}
            </div>

            {previewUrl && (
                <div>
                    <button
                        className="btn" 
                        type="button"
                        onClick={pickedImage}>Cambiar imagen
                    </button>
                </div>
            )}
        </div>
    )
}

export default UploadLogo