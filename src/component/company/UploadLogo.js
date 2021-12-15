/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import './companies.css'
import PropTypes from 'prop-types'
import storage from '../../firebase'
const storageRef = storage.ref()

const UploadLogo = ({ logoUpdate, logo }) => {
  const [file, setFile] = useState()
  const filePickerRef = useRef()
  const [progess, setProgress] = useState(0)

  const uploadLogo = e => {
    let pickedFile

    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0]
      setFile(pickedFile)

      const uploadTask = storage
        .ref(`/companies/${pickedFile.name}`)
        .put(pickedFile)
      uploadTask.on(
        'state_change',
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
            .ref('companies')
            .child(pickedFile.name)
            .getDownloadURL()
            .then(url => {
              logoUpdate(url)
            })
        }
      )
    }
  }

  const deleteImage = () => {
    const desertRef = storageRef.child(`/companies/${file.name}`)
    desertRef.delete().catch(error => {
      console.log(error)
    })
  }

  const pickedImage = () => {
    filePickerRef.current.click()
  }
  return (
    <div className="center__logo">
      <input
        style={{ display: 'none' }}
        type="file"
        ref={filePickerRef}
        accept=".jpg, .png, .jpeg"
        onChange={uploadLogo}
      />
      <div>
        {logo && <img src={logo} alt="Logo previo" />}
        {!logo && (
          <div className="upload__logo">
            <button
              className="button is-success"
              type="button"
              onClick={pickedImage}
            >
              +
            </button>
            Agregar logo
          </div>
        )}
      </div>

      {logo && (
        <div>
          <button className="btn" type="button" onClick={deleteImage}>
            Eliminar imagen
          </button>
        </div>
      )}
    </div>
  )
}

UploadLogo.propTypes = {
  logoUpdate: PropTypes.func,
  logo: PropTypes.string
}

export default UploadLogo
