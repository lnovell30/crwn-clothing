import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from './firebase/firebase.utils';


import Header from './components/header/header.component';


import './App.css';



const HatsPage = () => (
    <div>
      <h1> HATS PAGE </h1>
    </div>
)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
       this.setState({ currentUser: user});

       console.log(user);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/shop' component={ShopPage} />
        <Route exact={true} path='/signin' component={SignInAndSignUpPage} />
      </switch>
    </div>
    );
  };
}

export default App;
