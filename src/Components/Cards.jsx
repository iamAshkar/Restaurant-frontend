import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import './Cards.css'

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Cards({ rest }) {
    console.log({ rest });
    return (
        <div>
            {<div className="row bg-dark">
                {
                    rest.map(rest => (
                        <div className="col m-3 my-4">
                            <Link to={`/view/${rest.id}`}style={{textDecoration:'none'}}>



                                <MDBCard style={{ width: '18rem', height: '400px' }}>

                                    <MDBCardImage src={rest.photograph} height={`230px`} alt={rest.name} />
                                    <a>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                    </a>

                                    <MDBCardBody>
                                        <MDBCardTitle>{rest.name}</MDBCardTitle>


                                    </MDBCardBody>
                                    <MDBListGroup flush>
                                        <MDBListGroupItem><b>cuisine_type:</b>{rest.cuisine_type}</MDBListGroupItem>

                                        <MDBListGroupItem><b>Address:</b>{rest.address}</MDBListGroupItem>
                                        {/* <MDBListGroupItem><b>price:</b>{product.rating}</MDBListGroupItem>
    <MDBListGroupItem><b>stock:</b>{product.stock}</MDBListGroupItem>
    <MDBListGroupItem><b>category:</b>{product.category}</MDBListGroupItem> */}


                                    </MDBListGroup>
                                    {/* <MDBBtn className='btn no-hover' color='success'>
        Add to cart                                    </MDBBtn>

    <MDBBtn className='btn no-hover' color='warning'>
        Buy Now
    </MDBBtn> */}

                                </MDBCard>
                            </Link>
                        </div>
                    ))
                }
            </div>}
        </div>
    )
}

export default Cards
