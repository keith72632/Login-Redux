import React from 'react'
import { Route, BrowserRouter as Router} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <Router>
      <Container>
        <Route path='/' component={LoginScreen} exact/>
        <Route path='/home' component={HomeScreen}/>
      </Container>
    </Router>
  );
}

export default App;
