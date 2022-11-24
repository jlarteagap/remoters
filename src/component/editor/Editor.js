import React, { useEffect, useRef, useState } from 'react'

function Editor({ getEditor }) {
  const editorRef = useRef()
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setLoaded(true)
  }, [])

  if (loaded) {
    return (
      <CKEditor
        editor={ClassicEditor}
        data="<p>desde el editor CKEditor</p>"
        onChange={(event, editor) => {
          // do something when editor's content changed
          const data = editor.getData()
          getEditor(data)
        }}
      />
    )
  } else {
    return <h2>Cargando</h2>
  }
}

export default Editor
