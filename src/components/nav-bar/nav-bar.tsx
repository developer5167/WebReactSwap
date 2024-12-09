import "../nav-bar/nav-bar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Cookies from "js-cookie";
import { useAuth } from "../../../src/GlobalState";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/user-service";

export default function NavBar() {
  const navigate = useNavigate();
  const { isLoggedIn, logOut }: any = useAuth();

  const logOutFun = async () => {
    const { email }: any = Cookies.get("user");
    const data = {
      email: email,
    };
    if (isLoggedIn) {
      logOut();
        Cookies.remove("user");
        navigate("/login");
      // const loginUserApi = await logoutUser("logout", data);
      // if (loginUserApi["message"] = "Logout Successful") {
      //   logOut();
      //   Cookies.remove("user");
      //   navigate("/login");
      // }
    } else {
      navigate("/login"); // Navigate to login
    }
  };

  return (
    <div
      className="main"
      style={{ backgroundColor: "white", margin: "0px", padding: "10px" }}
    >
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <p
              style={{
                fontFamily: "lobster",
                fontSize: "35px",
                marginTop: "10px",
              }}
            >
              Swap
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/explore">Explore</Nav.Link>
            </Nav>
            {isLoggedIn ? (
              <Nav.Link className="loginBtn" onClick={logOutFun}>
                Log Out
              </Nav.Link>
            ) : (
              <Nav.Link className="loginBtn" href="/login">
                Login
              </Nav.Link>
            )}

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
              <img
                className="CircularAvatar"
                src="https://cdn.dribbble.com/users/15322875/avatars/normal/open-uri20230301-28402-ytsern?1677666385"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    // <Routes>
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/" element={<Home />} />
    //   <Route path="/explore" element={<Products />} />
    //   <Route path="/signup" element={<Signup />} />
    // </Routes>
  );
}
