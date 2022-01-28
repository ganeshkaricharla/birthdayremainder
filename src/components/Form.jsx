import './Style.css';
import Input from './Input';
import Dropdown from './Dropdown';
import Textarea from './Textarea';
import Button from './Button';
import axios from 'axios';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Form() {
  var data = {
    fullname: '',
    relation: '',
    gender: 'Male',
    dob: '',
    description: '',
    showYear: 'Yes',
  };
  const [birthdata, setbirthdata] = useState(data);
  const [saved, setSaved] = useState(false);

  function NameChange(event) {
    setbirthdata({ ...birthdata, [event.target.name]: event.target.value });
  }

  function submitData(event) {
    event.preventDefault();
    axios.defaults.headers.post['Content-Type'] =
      'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] =
      'http://localhost:3001/add';
    axios
      .post('http://localhost:3001/add', birthdata)
      .then(function (response) {
        if (response.status === 200) setSaved(true);
      });
  }

  if (saved) {
    return <h1>Succesfullly saved your data.</h1>;
  }
  return (
    <div className='Form'>
      <form action='/add' method='POST'>
        <Input
          type='text'
          placeholder='Full Name'
          label='Full Name'
          name='fullname'
          handleChange={NameChange}
        />
        <Input
          type='text'
          placeholder='Friend?,Collegue?, Cousin?...'
          label='Relation'
          name='relation'
          handleChange={NameChange}
        />
        <Dropdown
          placeholder='Gender'
          label='Gender'
          options={['Male', 'Female', 'Other']}
          name='gender'
          handleChange={NameChange}
        />
        <Input
          type='date'
          placeholder='Date of Birth'
          label='Date of Birth'
          name='dob'
          handleChange={NameChange}
        />
        <Dropdown
          placeholder='Yes or No'
          label='Show Year?'
          options={['Yes', 'No']}
          name='showYear'
          handleChange={NameChange}
        />

        <Textarea
          label='Anything to say?'
          name='description'
          handleChange={NameChange}
        />

        <Button type='submit' text='Submit' handleSubmit={submitData} />
      </form>
    </div>
  );
}

export default Form;
