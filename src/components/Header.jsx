import styled from "styled-components";
import { AppContext } from '/src/context/AppContext';
import { useContext } from "react";


export default function Header () {

  const { user } = useContext(AppContext);

  return (
    <HeaderContainerSC>
      <h1>TrackIt</h1>
      <img src={user.image} alt="Profile picture"></img>
    </HeaderContainerSC>
  );
}

const HeaderContainerSC = styled.header`
  width: 100%;
  height: 70px;

  display:flex;
  justify-content:space-between;
  align-items:center;

  z-index:1;
  position:fixed;
  left: 0px;
  top: 0px;

  background: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  h1{
    margin-left: 5%;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;

    color: #FFFFFF;
  }
  img{
    margin-right:5%;
    width: 51px;
    height: 51px;
    border-radius: 50%;
    object-fit:cover;
  }
  `;

