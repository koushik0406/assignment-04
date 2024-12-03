import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

function AddUser() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { addUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    addUser(data);
    alert('User added successfully!');
    navigate('/users');
  };

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input {...register('name', { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label>Email:</label>
          <input {...register('email', { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
