import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import { addCustomItem } from '../apis/api'

const CustomItem = () => {
  const user = useSelector(state => state.user)

  const [file, setFile] = useState({ })
  const [word, setWord] = useState('')
  const [filename, setFilename] = useState('Choose File')
  const [uploadedFile, setUploadedFile] = useState({ })
  const [message, setMessage] = useState('')
  // const [uploadPercentage, setUploadPercentage] = useState(0)

  const onFileChange = e => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
  }

  const onWordChange = e => {
    setWord(e.target.value)
  }

  const onSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    formData.append('word', word)

    return addCustomItem(formData, user.token)
      .then(response => {
        console.log('response', response)
        console.log('response.data', response.data)
        const { fileName, filePath } = response.data

        setUploadedFile({ fileName, filePath })
        setMessage('File Uploaded')
        return null
      })
      .catch((err) => {
        if (err.response.status === 500) {
          setMessage('There was a problem with the server')
        } else {
          setMessage(err.response.data.msg)
        }
      })
    // try {
    //   const res = await axios.post('/upload', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     },
    //     onUploadProgress: progressEvent => {
    //       setUploadPercentage(
    //         parseInt(
    //           Math.round((progressEvent.loaded * 100) / progressEvent.total)
    //         )
    //       );
    //     }
    //   });

    //   // Clear percentage
    //   setTimeout(() => setUploadPercentage(0), 10000);

    //   const { fileName, filePath } = res.data;

    //   setUploadedFile({ fileName, filePath });

    //   setMessage('File Uploaded');
    // } catch (err) {
    //   if (err.response.status === 500) {
    //     setMessage('There was a problem with the server');
    //   } else {
    //     setMessage(err.response.data.msg);
    //   }
    //   setUploadPercentage(0)
    // }
  }

  return (
    <Fragment>
      {/* {message ? <Message msg={message} /> : null} */}
      {message && <p>{message}</p>}
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onFileChange}
          />
          <input
            type='text'
            className='custom-file-input'
            id='customFile'
            onChange={onWordChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}
    </Fragment>
  )
}

export default CustomItem
