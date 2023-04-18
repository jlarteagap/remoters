/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import storage from '../../../service/firebase'
import PropTypes from 'prop-types'

const storageRef = storage.ref()

const UploadLogo = ({ logo }) => {
  // const [file, setFile] = useState()
  // const filePickerRef = useRef()
  // const [progess, setProgress] = useState(0)

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

  // const pickedImage = () => {
  //   filePickerRef.current.click()
  // }

  // const transformImageToWebp = async ({ target: { files } }) => {
  //   const getImage = files[0]
  //   const imagenConverted = await webpImage(getImage)
  //   console.log(imagenConverted)
  // }
  return (
    <div
    // style={{
    //   display: 'flex',
    //   alignItems: 'center',
    //   flexDirection: 'column',
    //   width: '100%'
    // }}
    >
      {/* <input
        style={{ display: 'none' }}
        type="file"
        ref={filePickerRef}
        id="upload-logo"
        accept=".jpg, .png, .jpeg"
        onChange={transformImageToWebp}
      />
      <div>
        {logo && (
          <img
            src={logo}
            alt="Logo previo"
            // style={{
            //   borderRadius: '5px',
            //   height: '150px',
            //   objectFit: 'cover',
            //   width: '150px'
            // }}
          />
        )}
        {!logo && (
          <div
          // style={{
          //   alignItems: 'center',
          //   background: '#ddfff6',
          //   borderRadius: '5px',
          //   border: '1px dotted',
          //   display: 'flex',
          //   flexDirection: 'column',
          //   height: '150px',
          //   justifyContent: 'center',
          //   width: '150px'
          // }}
          >
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
      )} */}
    </div>
  )
}

UploadLogo.propTypes = {
  logo: PropTypes.string
}
