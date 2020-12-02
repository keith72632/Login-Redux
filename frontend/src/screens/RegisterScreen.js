import React, { useState, useEffect } from 'react'
import { Form, Button,  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormControl from '../components/FormControl'
import { register } from '../actions/userActions'
import { useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'

const RegisterScreen = ({ location, history }) => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmedPassword, setConfirmedPassword ] = useState('')


    const userState = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userState

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/home'

    useEffect(() => {
        if(userInfo) {
            history.push(redirect)
        }
    },[ history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(register(name, email, password))
    }
    return (
        <>
          <FormControl>
          <h1>Register</h1>
          {error && (<Message variant='danger'>{error}</Message>)}
          {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control type='text' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control type='text' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Submit Registration</Button>
             </Form>
             <Link to='/'>Already a member? Login</Link>  
          </FormControl>
        </>
    )
}

export default RegisterScreen
