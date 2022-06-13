import React, { useState } from 'react'
import Button from '../../components/Button'
import TextField from '../../components/TextField'

const AddUser = () => {
  const [values, setValues] = useState({
    name: '', email: ''
  });

  const handleAddUser = (e) => {
  
    console.log(values)
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
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser