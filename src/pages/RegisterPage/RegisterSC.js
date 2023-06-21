import styled from "styled-components";

const RegisterContainerSC = styled.form`
  width: 100%;
  gap: 15px;

  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 180px;
    height: 178px;
    margin-top: 70px;
    margin-bottom: 5%;
  }
  input[type="text"],
  [type="email"],
  [type="password"] {
    width: 303px;
    height: 45px;
    border-radius: 5;

    background: #ffffff;
    border: 1px solid #d5d5d5;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: #dbdbdb;
  }
  button {
    width: 303px;
    height: 45px;
    border-radius: 5;

    background: #52b6ff;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: #dbdbdb;
  }
  p {
    padding-top: 15px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    color: #52b6ff;
  }
`;

export default RegisterContainerSC;
