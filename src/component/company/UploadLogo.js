import React, { useRef, useState } from 'react'
import './companies.css'

import storage from '../../firebase'
const storageRef = storage.ref()

  const UploadLogo = ({logoUrl}) => {
  const [file, setFile] = useState()
  const [previewUrl, setPreviewUrl] = useState()
  const filePickerRef = useRef()
  const [url, setUrl] = useState('')
  const [progess, setProgress] = useState(0)

    const uploadLogo = (e) => {
        let pickedFile

        if(e.target.files && e.target.files.length === 1) {
            pickedFile = e.target.files[0]
            setFile(pickedFile)

            const uploadTask = storage.ref(`/companies/${pickedFile.name}`).put(pickedFile)
            uploadTask.on(
              "state_change",
              snapshot => {
                const progress = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress(progress)
              },
              error => {
                console.log(error)
              },
              () => {
                storage
                .ref("companies")
                .child(pickedFile.name)
                .getDownloadURL()
                .then(url => {
                  setUrl(url)
                  logoUrl(url)
                })
              }
            )
        }

    }

    const deleteImage = (e) => {
      const desertRef = storageRef.child(`/companies/${file.name}`)
      desertRef.delete().then(() =>{
        console.log(previewUrl)
        setPreviewUrl("")
      }).catch((error)=>{
        console.log(error)
      })
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
                onChange={uploadLogo}
            />
            <div>
                {url && <img src={url} alt="Logo previo" />}
                {!url && (
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

            {url && (
                <div>
                    <button
                        className="btn" 
                        type="button"
                        onClick={deleteImage}>Eliminar imagen
                    </button>
                </div>
            )}
        </div>
    )
}

export default UploadLogo