import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { RotatingLines } from 'react-loader-spinner';
import dayjs from "dayjs";

import styled from "styled-components";

/*import TodayContainerSC from "./TodaySC";*/
import { URL } from '/src/assets/constants';
import { AppContext } from '/src/context/AppContext';
import check from "/src/assets/images/check.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TodayPage () {

  const { user } = useContext(AppContext);
  const [items, setItems] = useState([]);
  const [habitscompleted, setHabitscompleted] = useState(0);
  const [reload, setReload] = useState(0);
  const day = dayjs().locale('en').format('dddd, DD/MM').replace(/^\w/, (c) => c.toUpperCase());

  function toggleHabit (habit){

    const config = {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    }
    
      const action = habit.done ? 'uncheck' : 'check'
  
      axios.post(`${URL}habits/${habit.id}/${action}`, '', config)
      .then(answer => console.log(answer))
      .catch(error => console.log(error));
  
      setTimeout(() => setReload(reload + 1), 500)
    
  }

	useEffect(() => {

    const config = {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    }

    setHabitscompleted(items.filter((item)=>item.done).length / items.length * 100)

		axios.get(`${URL}habits/today`, config)

		.then(answer => {setItems(answer.data);})
    .catch(error => console.log(error));
        
	}, [reload]);

{/* 
  if(items.length === 0) {
    return (
      <>
        <Header />
        <RotatingLines type="spin" color="grey" width={5} height={64} delay={0}/>
        <Footer />
      </>
    )
  }
*/}

  return (
    <>
    <Header />

      <TodayContainerSC>
        <h2>{day}</h2>

        {items.length === 0 ? <p>No habits completed yet!</p> : <p>{habitscompleted}% of habits completed</p>}
      </TodayContainerSC>

      <HabitSC>

        {items.map((habit)=>{
          return (
            <li key={habit.id}>
              <div>
                <p>{habit.name}</p>
                <p>Current sequence: {habit.currentSequence} days</p>
                <p>Your record: {habit.highestSequence} days</p>
              </div>
              <span status={habit.done} onClick={()=> toggleHabit(habit)}><img src={check} alt="Check"></img></span>
            </li>
          );
        })}

      </HabitSC>

    <Footer />
    </>
  );
}

const TodayContainerSC = styled.div`
  width:100%;
  height:100%;

  padding-top:60px;
  h2{
    margin-top:30px;
    margin-left:5%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;

    color: #126BA5;
  }
  p{
    margin: 10px 5% 0% 5%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
  }
`;

const HabitSC = styled.ul`
  width:100%;
  height:100%;

  gap:10px;
  padding-top:30px;
  padding-bottom:100px;

  display:flex;
  flex-direction:column;
  align-items:center;
  li{
    width: 85%;
    padding:13px 12px 13px 12px;

    display:flex;
    justify-content:space-between;

    background:#4B4B4B;
    border-radius: 5px;
    div{
      & > p:first-child{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #FFFFFF;
        padding-bottom:7px;
      }
      & > p:nth-child(n+2) {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #FFFFFF;
      }
    }
    span{
      width: 69px;
      height: 69px;

      display:flex;
      justify-content:center;
      align-items:center;

      background:  ${props => props.checked ? '#8FC549' : '#9A9A9A'};
      border: 1px solid #E7E7E7;
      border-radius: 5px;
    }
  }
`;