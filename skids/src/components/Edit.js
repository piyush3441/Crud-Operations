import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import user from "./user";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';


function Edit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [id, setId] = useState("");

  let history = useNavigate();

  var index = user.map(function (e) {
    return e.id
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Validate phone number format
    const phoneRegex = /^\d{10}$/; // Assumes 10-digit phone numbers
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number');
      return;
    }

    let a = user[index];
    a.name = name;
    a.email = email;
    a.phone = phone;
    a.id = id;
    history("/");

    alert("User data Updated");
  }

  useEffect(() => {
    setName(localStorage.getItem('Name'))
    setEmail(localStorage.getItem('Email'))
    setPhone(localStorage.getItem('Phone'))
    setId(localStorage.getItem('Id'))
  }, [])


  return (
    <div>
      <Form className='d-grid gap-2' style={{ margin: "10rem" }}>

        <h1>Update User</h1>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Control type="text" placeholder='Name' value={name} required onChange={(e) => setName(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formemail'>
          <Form.Control type="text" placeholder='Enter email address' value={email} required onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formphone'>
          <Form.Control type="number" placeholder='Enter you phone no.' value={phone} required onChange={(e) => setPhone(e.target.value)}></Form.Control>
        </Form.Group>

        <Button onClick={(e) => handleSubmit(e)} type="submit" >
          Update
        </Button>
      </Form>
    </div>
  )
}

export default Edit;