import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ThreeDots } from 'react-loader-spinner';

import { URL } from '/src/assets/constants';
import { AppContext } from '/src/context/AppContext';
import LoginContainerSC from "./LoginSC";
import trackitLogo from "/src/assets/images/trackit.png";

export default function LoginPage () {

  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState( false );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function confirmLogin (e) {
		e.preventDefault();
    setLoading( true );

axios.post(`${URL}auth/login`, {email, password})

        .then((answer) => {
          navigate("/habits/")
          setUser(answer.data)
          }) 
        .catch(error => alert(error.response.data.message));

    }


  return (
      <LoginContainerSC onSubmit={confirmLogin}>

      <img src={trackitLogo} alt="Trackit"></img>
      
      <input type="email" placeholder="E-mail" value={email} required disabled={loading} onChange={e => setEmail(e.target.value)}></input>
      <input type="password" placeholder="Password" value={password} required disabled={loading} onChange={e => setPassword(e.target.value)}></input>
      <button type="submit" disabled={loading} > {!loading ? "Login" : <ThreeDots width="50" height="50" color="#ffffff" />} </button>

      <Link to="/register">
        <p>Don't have an account? Register!</p>
      </Link>

      </LoginContainerSC>
  );
}