import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => ( 
  <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar />
          <Routes>
            <Route exact path='/' element={<Landing />} />
          </Routes>
          <section className='container'>
            <Alert />
            <Routes>
              <Route exact path='/Register' element={<Register />} />
              <Route exact path='/Login' element={<Login />} />
            </Routes>
          </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
