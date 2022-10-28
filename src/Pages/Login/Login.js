import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const [errorMsg, setErrorMsg] = useState('fill the form properly!!!')
    //change title with own hooks 
    useTitle('Login')
    const { Login, setLoader } = useContext(AuthContext)
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        Login(email, password)
            .then(res => {
                const user = res.user
                console.log(user)
                form.reset()             
                setErrorMsg('')
                if(user.emailVerified){
                    navigate(from, {replace: true})
                }else{
                    toast.error('Your email is not verified. Please verify your email address before login!!')
                }
                
            })
            .catch(error => {
                console.error(error)
                setErrorMsg(error.message)
            })
            .finally(() =>{
                setLoader(false)
            })
    }
    return (
       <>
       {/* <Helmet>
            <title>honest news login page</title>
       </Helmet> */}
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Text className="text-danger">
                    {errorMsg}
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
       </>
    );
}

export default Login;