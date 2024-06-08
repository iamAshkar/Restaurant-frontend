import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';

function ViewRest() {
    const { id } = useParams();
    const base_url = 'https://restaurant-backend-zfmu.onrender.com/restaurants';

    const [viewRestData, setViewRestData] = useState({}); // Initialize to empty object

    const viewRestaurant = async () => {
        try {
            const response = await axios.get(`${base_url}/${id}`);
            setViewRestData(response.data); // Set viewRestData to response.data
        } catch (error) {
            console.error('Error fetching restaurant data:', error);
        }
    };

    useEffect(() => {
        viewRestaurant();
    }, [id]); // Add id to dependency array

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="card mt-5">
                    <div className="card-body">
                        <Row>
                            <Col md={6}>
                                {/* image */}
                                <img src={viewRestData.photograph} className="img-fluid" alt='' />
                            </Col>

                            <Col md={6} className='text-center'>
                                {/* content */}
                                <h1>{viewRestData.name}</h1>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <b>neighborhood:</b> {viewRestData.neighborhood}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <b>address:</b> {viewRestData.address}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <b>cuisine_type:</b> {viewRestData.cuisine_type}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <RestOp op={viewRestData.operating_hours} />
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <RestReview rr={viewRestData.reviews} />
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewRest;
