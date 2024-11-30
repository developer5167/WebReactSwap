import "./styles.css";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import NavBar from "./components/nav-bar/nav-bar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home from "./components/home/home";
import Products from "./components/products/products";
import Forgotpassword from "./components/forgot-password/forgot-password";
import Dashboard from "./components/dashboard/dashboard";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/explore", element: <Products /> },
    { path: "/forgotpassword", element: <Forgotpassword /> },
    { path: "/dashboard", element: <Dashboard /> },
  ]);
  return routes;
}
function App() {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
    </Router>
  );
}

export default App;
