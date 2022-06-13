import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/Button'
import TextField from '../../components/TextField'

const EditUser = () => {
  const params = useParams();
  const users = useSelector(store => store.users)
  const navigate = useNavigate()

 const remainingUser = users.filter(user => user.id === params.id);
  const { name, email } = remainingUser


  const [values, setValues] = useState({
    name, email
  });
  console.log(values)

  const handleEditUser = () => {
    setValues({ name: '', email: '' })
    // console.log(values)
    navigate('/')
  }

  return (
    <div className='mt-10 max-w-xl mx-auto'>
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'John Doe' }}
      />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'example@email.com' }}
      />
      <Button onClick={handleEditUser}>Edit User</Button>
    </div>
  )
}

export default EditUser