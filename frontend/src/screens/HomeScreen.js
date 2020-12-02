import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { logout } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'

const HomeScreen = ({history}) => {

    const dispatch = useDispatch()

    const register = useSelector(state => state.userRegister)
    const { success } = register

    const submitHandler = () =>{
        dispatch(logout())
    }
    return (
        <Container style={{'textAlign': 'center', 'position': 'absolute', 'top': '40%'}}>
            {success ? (<Message variant='info'>You have successfully registered a new user to the MongoDB database</Message>
            ) : (
                <Message variant='info'>You have successfully logged in!</Message>
            )}
            <Button onClick={submitHandler} style={{'margin': '10px', 'fontSize': '28px'}} href='/'>Log Out</Button>
        </Container>
    )
}

export default HomeScreen
