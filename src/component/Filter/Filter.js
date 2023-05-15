import React from 'react'
import {  Form} from 'react-bootstrap'
function Filter({imputSearch,setImputSearch}) {
  return (
    <div>
    <Form.Group className="mb-3">
    <Form.Control placeholder="Enter your movie" onChange={(e)=>setImputSearch(e.target.value)} value={imputSearch}/>
  </Form.Group>
    </div>
  )
}

export default Filter
