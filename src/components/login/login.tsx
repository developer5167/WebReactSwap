import "../login/login.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  function buttonClick() {
    navigate("/signup");
  }
  function loginClick() {}

  return (
    <section className="h-100 gradient-form" style={{ "backgroundColor": "#fff" }}>
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
                          id="form2Example11"
                          className="form-control"
                          placeholder="email address"
                        />
                      </div>
                      <div data-mdb-input-init className="form-outline mb-3">
                        <input
                          type="password"
                          id="form2Example22"
                          placeholder="password"
                          className="form-control"
                        />
                      </div>

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
