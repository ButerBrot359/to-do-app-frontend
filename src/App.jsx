import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import "./App.css";
import TasksPage from "./pages/Tasks/TasksPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Tasks</Link>
        <br />
        <Link to="/login">Login Page</Link>
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
