import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <i class="fa-sharp fa-solid fa-bell-concierge fa-beat-fade m-3 fs-2"></i>
                        Restro Cafe
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
