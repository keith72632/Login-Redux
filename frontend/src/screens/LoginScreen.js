import React from 'react'
import { Form, Button,  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormControl from '../components/FormControl'

const LoginScreen = () => {
    return (
        <>
          <FormControl>
          <h1>Login</h1>  
            <Form>
                <Form.Group>
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control type='text'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control type='text'></Form.Control>
                </Form.Group>
            </Form>
          <Button type='submit'>Login</Button>
          </FormControl>
        </>
    )
}

export default LoginScreen
