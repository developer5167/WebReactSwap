import "./styles.css";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import NavBar from "./components/nav-bar/nav-bar";

import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Home from "./components/home/home";
import Products from "./components/products/products";
import Forgotpassword from "./components/forgot-password/forgot-password";
import Dashboard from "./components/dashboard/dashboard";
import { GlobalProvider } from "./GlobalState";
import { RestrictLoginRoute } from "./restrict-login-route";
import { RestrictDashboardRoute } from "./restrict-dashboard-route";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <RestrictLoginRoute><Login /></RestrictLoginRoute> },
    { path: "/signup", element: <RestrictLoginRoute><Signup /></RestrictLoginRoute> },
    { path: "/explore", element: <Products /> },
    { path: "/forgotpassword", element: <Forgotpassword /> },
    { path: "/dashboard", element:  <RestrictDashboardRoute><Dashboard /></RestrictDashboardRoute> },
  ]);
  return routes;
}
function App() {
  return (
    <GlobalProvider>
    <Router>
      <NavBar />
      <AppRoutes />
    </Router>
    </GlobalProvider>
  );
}

export default App;
