import React, { useRef, useState } from 'react'
import storage from '@service/firebase'
import { FaRegImage } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { UpdateCompanyDocument } from '@service/graphql/graphql'

export const LogoUpload = ({ company, id }) => {
  const [progress, setProgress] = useState(false)
  const fileRef = useRef()
  const [createCompany] = useMutation(UpdateCompanyDocument)

  const nameImage = company
    .replaceAll(' ', '-')
    .replaceAll('.', '-')
    .toLowerCase()
  const clickImage = () => fileRef.current.click()

  const webpImageTransform = data => {
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
            const imageWebp = new File([blob], `${nameImage}.wepb`)
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
            createCompany({
              variables: {
                input: { id, logo: url }
              }
            })
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
    >
      <input
        style={{ display: 'none' }}
        type="file"
        ref={fileRef}
        accept=".jpg, .png, jpeg"
        onChange={uploadImageToFirebase}
      ></input>

      <div
        onClick={clickImage}
        className="is-flex is-justify-content-center is-align-items-center"
      >
        {progress ? (
          progressBar
        ) : (
          <>
            <FaRegImage className="mr-1" />
            Agregar logo
          </>
        )}
      </div>
    </div>
  )
}
