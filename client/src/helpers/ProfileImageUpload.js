import axios from 'axios'



const ProfileImageUpload = ({ imageFormData, setFormData, handleSubmit }) => {

  const handleChange = async (event) => {
    try {
      // Create a new form data object
      const formData = new FormData()
      // Add file field on new object
      console.log('1')
      formData.append('file', event.target.files[0])
      // Add upload preset
      console.log('2')
      formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
      // Send data as Axios reqest to cloudinary API
      console.log('3')
      const { data } = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, formData)
      // Add profile image to form data
      console.log('4')
      setFormData({ ...imageFormData, profile_image: data.secure_url })
    } catch (err) {
      console.log('Logo upload error->', err)
    }

  }

  return (
    <div id="profile-image-upload" className='field'>
      <input
        className="input"
        name="profile_image"
        type='file'
        placeholder='Upload Profile Image'
        onChange={handleChange}
      />
    </div>
  )
}

export default ProfileImageUpload