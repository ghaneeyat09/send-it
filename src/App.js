import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import UserDashboard from "./screens/UserDashBoard";
import AdminDashBoard from "./screens/AdminDashBoard";
import CreateOrder from "./screens/CreateOrder";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/register" element={ <Signup /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/user-dashboard" element={ <UserDashboard /> } />
          <Route path="/admin-dashboard" element={ <AdminDashBoard/> } />
          <Route path="/create-order" element={ <CreateOrder/> } />
      </Routes>
    </div>
  );
}

export default App;
