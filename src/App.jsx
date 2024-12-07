import LandingPage from "./components/landing";
import MainPage from "./components/main";
import './App.css'
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage  />}    />   
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
