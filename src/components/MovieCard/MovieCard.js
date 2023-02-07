import React from "react";
import { Card, Button } from "react-bootstrap";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, handleDelete }) => {
    return (
        <div>
            <Card style={{ width: '19rem', justifyContent:"flex", alignItems:"flex-end" }} className="mx-4 my-3">
                <Card.Img variant="top" src={movie.posterUrl} style={{ height: "500px", display:"flex"}} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.description}
                    </Card.Text>
                    <Card.Text>
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            isHalf={true}
                            value={movie.rate}
                        />
                    </Card.Text>
                    <div className="d-flex justify-content-around">
                        <Button variant="primary" onClick={() => handleDelete(movie.id)}>Delete</Button>
                        <Link to={`/details/${movie.id}`}><Button variant="primary">See Details</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard