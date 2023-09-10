import { useState } from 'react';
import './AuthPage.css';
import LoginForm from '../../LoginForm/LoginForm';
import SignUpForm from '../../SignUpForm/SignUpForm';
import Spacing from "../../Spacing";


export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">


      <div>
      <Spacing lg="90" md="45" />
                    <Spacing lg="90" md="45" />
                    <Spacing lg="90" md="45" />
                    <Spacing lg="90" md="45" />
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP NOW' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );
}