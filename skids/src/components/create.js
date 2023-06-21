import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import user from "./user";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';



function Create() {
  const [Name, setname] = useState("");
  const [Email, setEmail] = useState("");
  const [phone, setPhone] = useState();

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = Name, b = Email, c = phone;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Validate phone number format
    const phoneRegex = /^\d{10}$/; // Assumes 10-digit phone numbers
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number');
      return;
    }
    user.push({ id: uniqueId, name: a, email: b, phone: c });

    
    alert("User added");
    history("/");

  }
  return (
    <div>
      <Form className='d-grid gap-2' style={{ margin: "10rem" }}>

        <h1>Add User</h1>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Control type="text" placeholder='Enter your name' required onChange={(e) => setname(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formemail'>
          <Form.Control type="text" placeholder='Enter email address' required onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formphone'>
          <Form.Control type="number" placeholder='Enter you phone no.' required onChange={(e) => setPhone(e.target.value)}></Form.Control>
        </Form.Group>

        <Button onClick={(e) => handleSubmit(e)} type="submit" >
          Submit
        </Button>
      </Form>


    </div>

  )
}

export default Create;