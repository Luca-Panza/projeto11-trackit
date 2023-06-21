import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner';

import { URL } from '/src/assets/constants';
import RegisterContainerSC from "./RegisterSC";
import trackitLogo from '/src/assets/images/trackit.png';
  
export default function RegisterPage () {
  
  const navigate = useNavigate();
  const [loading, setLoading] = useState( false );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function confirmRegister (e) {
		e.preventDefault();
    setLoading( true );
      
axios.post(`${URL}auth/sign-up`, {email, name, image, password})

        .then(() => navigate("/")) 
        .catch(error => alert(error.response.data.message));
    }

  
  return (
          <RegisterContainerSC onSubmit={confirmRegister}>
    
          <img src={trackitLogo} alt="Trackit"></img>
          
          <input type="email" placeholder="E-mail" value={email} required disabled={loading} onChange={e => setEmail(e.target.value)}></input>
          <input type="password" placeholder="Password" value={password} disabled={loading} required onChange={e => setPassword(e.target.value)}></input>
          <input type="text" placeholder="Name" value={name} required disabled={loading} onChange={e => setName(e.target.value)}></input>
          <input type="text" placeholder="Image" value={image} required disabled={loading} onChange={e => setImage(e.target.value)}></input>
          <button type="submit" disabled={loading}>{!loading ? "Register" : <ThreeDots width="50" height="50" color="#ffffff" />}</button>
    
          <Link to="/">
            <p>Already have an account? Log in!</p>
          </Link>
    
          </RegisterContainerSC>
  );
}