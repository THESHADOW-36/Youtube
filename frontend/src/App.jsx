// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import VideoPage from "./Components/VideoPage/YtVideoPage";
import YouPg from "./Components/You/YouPg";
import HistoryPg from "./Components/History/History";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/video-page/:id" element={<VideoPage />} />
        <Route exact path="/you" element={<YouPg />} />
        <Route exact path="/history" element={<HistoryPg />} />
      </Routes>
    </div>
  );
}

export default App;
