import React from 'react'
import { useMutation } from '@apollo/client'
import { UPLOAD_IMAGE } from '../../Graphql/Mutation'

const UploadLogo = () => {

    const [singleUpload] =useMutation(UPLOAD_IMAGE, {
        onCompleted: data => console.log(data)
    })

    const uploadLogoFile = e => {
        const file = e.target.files[0]
        if(!file) return
        
        singleUpload({
            variables: {file }
        })
    }
    return(
        <input
            onChange={uploadLogoFile}
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg" />
    )
}

export default UploadLogo