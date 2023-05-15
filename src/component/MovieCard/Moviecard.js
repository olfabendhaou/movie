import React from 'react'
import { Card,Button } from 'react-bootstrap'
import ReactStars from 'react-stars'
function Moviecard  ({movie}) {
  return (
    <div>
    <Card style={{ width: '18rem'}}>
    <Card.Img  variant="top"  src={movie.posterUrl} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>{movie.description}</Card.Text>
      <ReactStars count={5} value={movie.rate} color2={'#ffd700'} edit={false} />
      <Button href= {movie.trailer} target="blank">Trailer</Button>
    </Card.Body>
  </Card>
    </div>
  )
}

export default Moviecard
