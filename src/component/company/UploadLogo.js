/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'

import PropTypes from 'prop-types'
import storage from '../../firebase'

const storageRef = storage.ref()

const UploadLogo = ({ logoUpdate, logo }) => {
  const [file, setFile] = useState()
  const filePickerRef = useRef()
  const [progess, setProgress] = useState(0)

  // const uploadLogo = e => {
  //   let pickedFile

  //   if (e.target.files && e.target.files.length === 1) {
  //     pickedFile = e.target.files[0]
  //     setFile(pickedFile)

  //     const uploadTask = storage
  //       .ref(`/companies/${pickedFile.name}`)
  //       .put(pickedFile)
  //     uploadTask.on(
  //       'state_change',
  //       snapshot => {
  //         const progress = Math.round(
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //         )
  //         setProgress(progress)
  //       },
  //       error => {
  //         console.log(error)
  //       },
  //       () => {
  //         storage
  //           .ref('companies')
  //           .child(pickedFile.name)
  //           .getDownloadURL()
  //           .then(url => {
  //             logoUpdate(url)
  //           })
  //       }
  //     )
  //   }
  // }

  // const deleteImage = () => {
  //   const desertRef = storageRef.child(`/companies/${file.name}`)

  //   desertRef
  //     .delete()
  //     .then(logoUpdate(''))
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  const pickedImage = () => {
    filePickerRef.current.click()
  }

  const transformImageToWebp = ({ target: { files } }) => {
    const getImage = files[0]

    const reader = new FileReader()
    reader.readAsDataURL(getImage)
    reader.onload = e => {
      const image = new Image()
      image.src = e.target.result
      image.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = 200
        canvas.height = 'auto'
        canvas.getContext('2d').drawImage(image, 0, 0)
        canvas.toBlob(blob => {
          const dataImage = new File([blob], `imagetest.wepb`)
          console.log(dataImage)
        })
      }
    }
  }
  return (
    <div className="center__logo">
      <input
        style={{ display: 'none' }}
        type="file"
        ref={filePickerRef}
        id="upload-logo"
        accept=".jpg, .png, .jpeg"
        onChange={transformImageToWebp}
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
          <button
            className="btn"
            type="button"
            //  onClick={deleteImage}
          >
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
