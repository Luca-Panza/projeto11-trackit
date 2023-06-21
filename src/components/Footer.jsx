import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer () {

  return (
    <FooterContainerSC>
      <Link to="/habits">
      <p>Habits</p>
      </Link>
      <Link to="/today">
        <Progress>
      <CircularProgressbar 
              text={"Today"}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgb(82, 182, 255)",
                textColor: "#FFFFFF",
                pathColor: "rgb(18, 107, 165)",
                trailColor: "transparent",
                textSize: "18px",
                textAlign: "center",
                text: {
                  fill: "#fff",
                  dominantBaseline: "middle",
                  textAnchor: "middle",
                  alignmentBaseline: "middle",
                },
              })}/>
        </Progress>
      </Link>
      <Link to="/history">
      <p>History</p>
      </Link>
    </FooterContainerSC>
  );
}

const FooterContainerSC = styled.footer`
  width: 100%;
  height: 70px;

  display:flex;
  justify-content:space-around;
  align-items:center;

  z-index:1;
  position:fixed;
  bottom:0px;
  left:0px;

  background: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: #52B6FF;
  }
  a{
    text-decoration: none;
  }
  `;


const Progress = styled.div`
  width: 91px;
  padding-bottom:30px;
`;