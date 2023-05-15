import React from 'react'
import {useState} from 'react'
import {Modal,Button, Form} from 'react-bootstrap'
function AddMovie({add}) {
    //initialisation
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [rate,setRate]=useState("")
    const [posteUrl,setPosteUrl]=useState("")
    const [show,setShow]=useState(false)
    //update
    const handleTitle=(e) => {setTitle(e.target.value)}
    const handleDescription=(e) => {setDescription(e.target.value)}
    const handleRate=(e) => {setRate(e.target.value)}
    const handlePosteUrl=(e) => {setPosteUrl(e.target.value)}
    

    // add event
    const handleAdd=(e) => {
      let newMovie ={title,description,rate,posteUrl}
      return add(newMovie)}
    // show event
    const handleShow=(e) => setShow(true)
    const handleClose=(e) => setShow(false)


  return (
    <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
  <Button variant="primary" onClick={handleShow}>
  Add Movie
</Button>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Add Movie</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Movie title</Form.Label>
        <Form.Control
          type="text"
          placeholder="title"
          autoFocus
          onChange={(e)=>handleTitle(e)} value={title}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label >Movie description</Form.Label>
        <Form.Control
          type="text"
          placeholder="description"
          autoFocus
          onChange={(e)=>handleDescription(e)} value={description}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Movie Rate</Form.Label>
        <Form.Control
          type="number"
          placeholder="Rate"
          autoFocus
          onChange={(e)=>handleRate(e)} value={rate}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Movie URL</Form.Label>
        <Form.Control
          type="url"
          placeholder="Movie URL"
          autoFocus
          onChange={(e)=>handlePosteUrl(e)} value={posteUrl}
        />
      </Form.Group>
  
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary"  onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={handleAdd }>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>

  </div>
  )
}

export default AddMovie
