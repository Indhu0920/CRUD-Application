
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Popup(data) {
  console.log(data,"LLL")
  console.log(data.fielddata,"datapop")
  const updateData=()=>{
    
fetch(`https://67d7ed039d5e3a10152c9a65.mockapi.io/user/details/${data.fielddata.id}`, {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify(data.fielddata)
})
.then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
    data.setRef(!data.refer)
  
}).catch(error => {
  // handle error
  console.log(error);
  
})
data.popClose()
  }
  const createUser=() =>{ 
    fetch('https://67d7ed039d5e3a10152c9a65.mockapi.io/user/details', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(data.fielddata)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      // do something with the new task
      alert("Added Successfully")
        data.setRef(!data.ref)
    }).catch(error => {
      // handle error
    })

    data.popClose();

  }
  return (
    <>
    <Modal show={data.popShow} onHide={data.pop}>
      <Modal.Header closeButton>
        <Modal.Title>{data.fielddata.id ? <h1>Edit Your Data🖊️</h1> : <h1>Create Your data📃</h1>}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              autoFocus
              defaultValue={data.fielddata.Name}
              onChange={(e)=>data.setFieldData({...data.fielddata,Name:e.target.value})}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              autoFocus
              defaultValue={data.fielddata.Email}
              onChange={(e)=>data.setFieldData({...data.fielddata,Email:e.target.value})}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone No</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter Your  Phone Number"
              autoFocus
              defaultValue={data.fielddata.PhoneNo}
              onChange={(e)=>data.setFieldData({...data.fielddata,PhoneNo:e.target.value})}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Address"
              autoFocus
              defaultValue={data.fielddata.Address}
              onChange={(e)=>data.setFieldData({...data.fielddata,Address:e.target.value})}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Qualification</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Qualification"
              autoFocus
              defaultValue={data.fielddata.Qualification}
              onChange={(e)=>data.setFieldData({...data.fielddata,Qualification:e.target.value})}
            />
          </Form.Group>
         
           
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={data.popClose}>
          Close
        </Button>
       {data.fielddata.id?<Button variant="success" onClick={updateData}>
          Save Changes
        </Button>:
        <Button variant="primary" onClick={createUser}>
       Add Data
        </Button>}
      </Modal.Footer>
    </Modal>
  </>
    
  )
}

