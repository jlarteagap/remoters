import React, { useEffect, useRef, useState } from 'react'

const UploadLogo = (props) => {
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

            props.setDataImage((prev) => {
                return{ ...prev, image: pickedFile}
            })
        }
    }

    const pickedImage = () => {
        filePickerRef.current.click()
    }
    return(
        <div>
            <input
                ref={filePickerRef}
                type="file"
                accept=".jpg, .png, .jpeg"
                onChange={pickedHandler}
            />
            <div>
                {previewUrl && <img src={previewUrl} alt="Logo previo" />}
                {!previewUrl && (
                    <div>
                        <button 
                            type="button"
                            onClick={pickedImage}>+
                        </button>
                    </div>
                )}
            </div>

            {previewUrl && (
                <div>
                    <button 
                        type="button"
                        onClick={pickedImage}>Edit
                    </button>
                </div>
            )}
        </div>
    )
}

export default UploadLogo