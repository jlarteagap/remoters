import React, { useRef, useState } from 'react'
import storage from '@service/firebase'
export const LogoUpload = () => {
  const [progress, setProgress] = useState(false)
  const fileRef = useRef()

  const clickImage = () => fileRef.current.click()

  const webpImageTransform = data => {
    console.log(data)
    return new Promise(resolve => {
      const reader = new FileReader()
      reader.readAsDataURL(data)
      reader.onload = e => {
        const image = new Image()
        image.src = e.target.result
        image.onload = () => {
          const canvas = document.createElement('canvas')
          canvas.width = image.width
          canvas.height = image.height
          canvas.getContext('2d').drawImage(image, 0, 0)
          canvas.toBlob(blob => {
            const imageWebp = new File([blob], `imagetest.wepb`)
            resolve(imageWebp)
          })
        }
      }
    })
  }
  const progressBar = (
    <progress className="progress is-small is-primary" max="100">
      15%
    </progress>
  )
  const uploadImageToFirebase = async ({ target: { files } }) => {
    const imagetoUpload = files[0]
    const imageConvertedInWebp = await webpImageTransform(imagetoUpload)

    const uploadTaskImage = storage
      .ref(`/companies/${imageConvertedInWebp.name}`)
      .put(imageConvertedInWebp)

    uploadTaskImage.on(
      'state_change',
      snapshot => {
        setProgress(true)
      },
      error => console.log(error),
      () => {
        storage
          .ref('companies')
          .child(imageConvertedInWebp.name)
          .getDownloadURL()
          .then(url => {
            setProgress(false)
            console.log(url)
          })
      }
    )
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%'
      }}
      className="mb-5"
    >
      <input
        style={{ display: 'none' }}
        type="file"
        ref={fileRef}
        accept=".jpg, .png, jpeg"
        onChange={uploadImageToFirebase}
      ></input>
      <div
        style={{
          alignItems: 'center',
          background: '#ddfff6',
          borderRadius: '5px',
          border: '1px dotted',
          display: 'flex',
          flexDirection: 'column',
          height: '150px',
          justifyContent: 'center',
          width: '150px',
          cursor: 'pointer'
        }}
        onClick={clickImage}
      >
        {progress ? (
          progressBar
        ) : (
          <>
            <button className="button is-success" type="button">
              +
            </button>
            Agregar logo
          </>
        )}
      </div>
    </div>
  )
}
