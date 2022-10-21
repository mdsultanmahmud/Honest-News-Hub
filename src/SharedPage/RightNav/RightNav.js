import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap'
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import logo1 from '../../image/brand-1.png'
import logo2 from '../../image/brand2.jpg'
import logo3 from '../../image/brand-3.jpg'
const RightNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-danger"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Also search...</h5>
                <ListGroup>
                    <ListGroup.Item className={'mt-2'}><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className={'mt-2'}><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className={'mt-2'}><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className={'mt-2'}><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    <ListGroup.Item className={'mt-2'}><FaLinkedin></FaLinkedin> Linkedin</ListGroup.Item>
                </ListGroup>
            </div>

            <div>
                <h4 className='my-4'>Brand Add</h4>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            style={{ height: '200px' }}
                            className="d-block w-100"
                            src={logo1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: '200px' }}
                            className="d-block w-100"
                            src={logo2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: '200px' }}
                            className="d-block w-100"
                            src={logo3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );

};

export default RightNav;


