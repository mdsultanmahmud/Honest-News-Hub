import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/UserContext/UserContext';
const Register = () => {
    const [acceptedTerms, setAcceptedTerms] = useState(false)
    const { createUser, GetName,verifyEmail } = useContext(AuthContext)
    const [errorMsg, setErrorMsg] = useState('fill the form properly')

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const conpass = form.conpass.value
        const photo = form.photourl.value
        console.log(photo)
        const profile = {
            displayName : name,
            photoURL: photo
        }
        if (password !== conpass) {
            setErrorMsg('Password is not matched!!')
            return
        }

        createUser(email, password)
            .then(res => {
                const user = res.user
                console.log(user)
                form.reset()
                setErrorMsg('')
                
                GetName(profile)
                .then(() =>{})
                .catch(error => console.error(error))
                verifyEmail()
                .then(() =>{})
                .catch(e => console.error(e))
                toast.success('We sent a verification code in your email. Please verify your email.')
            })
            .catch(error => {
                console.error(error)
                setErrorMsg(error.message)
            })

    }


    const handleTermsAndCondition = event =>{
        if(event.target.checked){
            setAcceptedTerms(true)
        }else{
            setAcceptedTerms(false)
        }
    }

    return (
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Your PhotoURL</Form.Label>
                <Form.Control name='photourl' type="text" placeholder="Your PhotoURL" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId='email'>
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control name='conpass' type="password" placeholder="conform Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={handleTermsAndCondition} type="checkbox" label="Terms and Condition" />
            </Form.Group>
            <Form.Text className="text-danger">
                {errorMsg}
            </Form.Text>
            <br />
            <Button className='mt-3' variant="primary" type="submit" disabled = {!acceptedTerms}>
                Register
            </Button>
        </Form>
    );
}

export default Register;