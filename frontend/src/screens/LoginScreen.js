import React, { useState, useEffect } from 'react'
import { Form, Button,  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormControl from '../components/FormControl'
import { login } from '../actions/userActions'
import { useDispatch, useSelector} from 'react-redux'

const LoginScreen = ({ location, history }) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const userState = useSelector(state => state.userLogin)
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
        dispatch(login(email, password))
    }
    return (
        <>
          <FormControl>
          <h1>Login</h1>  
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control type='text' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control type='text' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                  <Button type='submit' variant='primary'>Login</Button>
            </Form>
          </FormControl>
        </>
    )
}

export default LoginScreen
