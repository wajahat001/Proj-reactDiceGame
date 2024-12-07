import styled from "styled-components";
import LandingPage from "./components/landing";
import './App.css'

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
`;

function App() {
  return (
    <>
     <LandingPage></LandingPage>
    </>
  );
}

export default App;
