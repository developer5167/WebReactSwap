import "../login/login.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { loginUserApi } from "../../services/user-service";
import { useEffect, useState } from "react";
import LoadingSpinner from "../spinner-loading/spinner-loading";
import { useAuth } from "../../GlobalState";

export default function Login() {
  
  const { login ,isLoggedIn}: any = useAuth();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const navigate = useNavigate();

 
  function buttonClick() {
    navigate("/signup");
  }
  const loginClick = async (e: any) => {
    var email = document.getElementById("input_email");
    var email_value = (email as HTMLInputElement).value;

    var password = document.getElementById("input_password");
    var password_value = (password as HTMLInputElement).value;

    if (
      email_value == null ||
      email_value == "" ||
      password_value == null ||
      password_value == ""
    ) {
      console.log("please enter valid credentials");
      return;
    }
    let loginRequest = {
      email: email_value,
      password: password_value,
    };
    setLoading(true);
    try {
      var loginData = await loginUserApi("/login", loginRequest);
      if (loginData["user_id"] != undefined) {
        setData(`User login successfull ${loginData["user_id"]}`);
        Cookies.set("user", JSON.stringify(loginData), { expires: 10 });
      } else {
        setData(loginData["message"]);
      }
      console.log(loginData);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setData(loginData["message"]);
      setLoading(false);
    }
    var localStorageData = Cookies.get("user");
    if (localStorageData) {
      login();
      navigate("/dashboard");
    }
  };

  return (
    <section
      className="h-100 gradient-form"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: "150px " }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">We are The Swap Team</h4>
                    </div>

                    <form>
                      <p>Please login to your account</p>

                      <div data-mdb-input-init className="form-outline mb-3">
                        <input
                          type="email"
                          id="input_email"
                          className="form-control"
                          placeholder="email address"
                        />
                      </div>
                      <div data-mdb-input-init className="form-outline mb-3">
                        <input
                          type="password"
                          id="input_password"
                          placeholder="password"
                          className="form-control"
                        />
                      </div>
                      {loading ? <LoadingSpinner /> : null}
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          onClick={loginClick}
                        >
                          Log in
                        </button>
                        <br></br>
                        <p>{data}</p>
                        <a
                          className="text-muted forgotpassword"
                          onClick={() => {
                            navigate("/forgotpassword");
                          }}
                        >
                          Forgot password?
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>

                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-outline-danger"
                          onClick={buttonClick}
                        >
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      "Discover a seamless platform for buying, selling, and
                      exchanging goods online. Our website connects you with
                      trusted users, enabling easy transactions and hassle-free
                      deals. Whether you’re looking to declutter, upgrade, or
                      find unique items, we’ve got you covered!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
