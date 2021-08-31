import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import AddToList from '../Store/Action/AddToList';

const Forms = () => {
  let nameRef = useRef();
  let emailRef = useRef();
  let contactRef = useRef();

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    contact: ''
  });

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const { email, name, contact } = formData;
    if (email && name && contact) {
      dispatch(AddToList(formData));
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  return (
    <div>
      <div>
        <label>Email</label>
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Name</label>
      </div>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          ref={nameRef}
        />
      </div>
      <div>
        <label>Contact</label>
      </div>
      <div>
        <input
          type="number"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Forms;
