import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ThreeDots } from 'react-loader-spinner';

import styled from "styled-components";

/*import HabitsContainerSC from "./HabitsSC";*/
import { URL, daysConstants } from "/src/assets/constants";
import { AppContext } from "/src/context/AppContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function HabitsPage() {

  const { user } = useContext(AppContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState( false );
  const [render, setRender] = useState(false);
  const [days, setDays] = useState([]);
  const [name, setName] = useState("");
  const [reload, setReload] = useState(0);


  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .get(`${URL}habits`, config)

      .then((answer) => {
        setItems(answer.data);
      })
      .catch((error) => console.log(error));
  }, [reload]);

  function toggleDay() {
    
  }

  function addHabit() {
    setRender(true);
  }

  function clearHabit (){
    setName("");
    setDays([]);
    setLoading( false );
    setRender( false );
  }

  function saveHabit (){

    const config = {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    }

      setLoading(true);

      axios.post(`${URL}habit`, {name, days}, config)

      .then(answer => {
        console.log(answer)
        clearHabit (); 
      })
      .catch(error => console.log(error));

  }

  return (
    <>
      <Header />

      <HabitsContainerSC>
        <div>
          <h2>My habits</h2>
          <button onClick={() => addHabit()}>+</button>
        </div>

      {render && (
        <CreatehabitSC>

      <input
        type="text"
        placeholder="Habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <div>
        {daysConstants.map((day, i) => (
          <button onClick={() => toggleDay()} key={i}>{day}</button>
        ))}
      </div>

      <span>
        <button onClick={()=> clearHabit()} disabled={loading}>Cancel</button>
        <button onClick={()=> saveHabit()} disabled={loading}>{!loading ? "Save" : <ThreeDots width="50" height="50" color="#ffffff" />}</button>
      </span>

        </CreatehabitSC>
      )}

        {items.length === 0 && (
          <p>
            You don't have any habits registered yet. Add a habit to start
            tracking!
          </p>
        )}

        <ul>
          <li></li>
        </ul>

      </HabitsContainerSC>

      <Footer />
    </>
  );
}

const HabitsContainerSC = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 60px;
  padding-bottom: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    width: 90%;
    margin-top: 30px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #666666;
  }
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      margin-top: 30px;
      margin-left: 5%;
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 23px;
      line-height: 29px;

      color: #126ba5;
    }
    > button{
      width: 40px;
      height: 35px;
      border-radius: 5px;
      border: none;
      margin-top: 30px;
      margin-right: 5%;

      display: flex;
      justify-content: center;
      align-items: center;

      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 27px;
      line-height: 34px;
      text-align: center;

      background-color: #126ba5;
      color: #ffffff;
      &:hover {
        cursor: pointer;
        opacity: 80%;
      }
    }
  }
`;

const CreatehabitSC = styled.div`
  width: 90% !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 15px;
  border-radius: 5px;

  background-color: #126ba5;

  input[type="text"] {
    width: 90%;
    height: 45px;
    border-radius: 5px;
    margin-top: 18px;

    background: #ffffff;
    border: 1px solid #d5d5d5;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: #dbdbdb;
  }
  div {
    margin-top: 30px;
    width: 90%;
    display: flex;
    justify-content: flex-start;

    @media (max-width: 530px) {
      justify-content: space-between;
    }

    button {
      width: 30px;
      height: 30px;
      border-radius: 5px;
      border: none;
      margin-right:5%;

      display: flex;
      justify-content: center;
      align-items: center;

      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;

      background-color: #cfcfcf;
      color: #ffffff;
      
      &:hover {
        cursor: pointer;
        opacity: 80%;
      }

      @media (max-width: 530px) {
        margin-right: 0;
      }
    }
  }

  span {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    >button{
      border-radius: 5px;
      border: none;
      margin-top: 30px;
      margin-right: 5%;

      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 27px;
      line-height: 34px;

      background-color: #dbdbdb;
      color: #ffffff;
      &:hover {
        cursor: pointer;
        opacity: 80%;
      }
    }

    & > button:first-child {
      width: 110px;
      height: 35px;
      margin-right: 5%;
    }
    & > button:nth-child(2) {
      width: 90px;
      height: 35px;
      margin-right: 5%;
    }
  }
`;
