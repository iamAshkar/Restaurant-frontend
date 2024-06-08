import React from 'react';
// import './Footer.css';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';

function Footer() {
    return (
        <MDBFooter className='bg-light text-dark text-center text-md-start'>
            <MDBContainer className='p-4'>
                <MDBRow>
                    <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Address</h5>
                        <p>MUlavoor PO</p>
                        <p>Muvattupuzha , Ernamkulam</p>

                        <p>686673</p>


                    </MDBCol>

                    <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>services</h5>

                        <p>
                            Our service is dedicated to providing the best experience for our customers. Whether you're dining in or ordering takeout, our team is committed to ensuring your satisfaction.
                        </p>
                    </MDBCol>

                    <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-0'>Location</h5>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8092615877717!2d76.58020384389941!3d10.032593064560373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e79562792ea9%3A0x43d4d95e23b31f47!2sGRAND%20BAKERS!5e0!3m2!1sen!2sin!4v1710339360512!5m2!1sen!2sin"
                            width="300"
                            height="250"
                            style={{ border: '0' }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:
                <a className='text-dark' href='https://mdbootstrap.com/'>
                    MDBootstrap.com
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;
