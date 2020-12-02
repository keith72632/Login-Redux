import React from 'react'
import { Route, BrowserRouter as Router} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import LoginScreen from './screens/LoginScreen'

function App() {
  return (
    <Router>
      <Container>
        <Route path='/' component={LoginScreen}/>
      </Container>
    </Router>
  );
}

export default App;
