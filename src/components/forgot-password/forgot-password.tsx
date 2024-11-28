import "../login/login.css";
import { useNavigate } from "react-router-dom";
export default function Forgotpassword() {
  const navigate = useNavigate();
  function buttonClick() {
    navigate("/signup");
  }

  return (
    <section className="h-100 gradient-form" style={{ "backgroundColor": "#fff" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10" style={{ width: 550, height: 150 }}>
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-12">
                  <div className="card-body" style={{ margin: 50 }}>
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: "150px " }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">Reset password</h4>
                    </div>

                    <form>
                      <p>Please enter your email id </p>
                      <div data-mdb-input-init className="form-outline mb-3">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="email address"
                        />
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                        >
                          Rest password
                        </button>
                        <div className="d-flex align-items-center justify-content-center pb-4 py-2">
                          <p className="mb-0 me-2">Do you remember password?</p>
                          <button
                            onClick={() => {
                              navigate("/login");
                            }}
                            type="button"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-outline-danger"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </form>
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
