import { useNavigate } from "react-router-dom";
import "../login/login.css";
import { useState } from "react";
import { useUserViewModel } from '../../services/viewModel'
import LoadingSpinner from "../spinner-loading/spinner-loading";
import ShowCustomAlert from "../alert-messages/alert-message";
import { Fade } from "react-bootstrap";
export default function Signup() {

  const { loading, error, createUser, data } = useUserViewModel();
  console.log(data)
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (email != '' && (password == confirmPassword) && mobile) {

      let fullEmail = email.split('@');

      let request = {
        email: email,
        password: password,
        name: fullEmail[0],
        mobile_number: mobile,
        account_status: true
      }
      console.log(request);
      try {
        await createUser('/createUserWithEmaiPassword', request)
      }
      catch {
        console.log('Failed');

      }
    }
   
  }

  const cancelButtonClick = () => {
    console.log("cancelButtonClicked")
  }
  const okayButtonClick = () => {
    console.log("okayButtonClicked") 
  }
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

                    <form onSubmit={handleSubmit}>
                      <p>Create an account</p>

                      <div data-mdb-input-init className="form-outline mb-3">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div data-mdb-input-init className="form-outline mb-3">
                        <input
                          type="password"
                          id="form2Example22"
                          placeholder="Password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div data-mdb-input-init className="form-outline mb-3">
                        <input
                          type="password"
                          id="form2Example22"
                          placeholder="Confirm Password"
                          className="form-control"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div data-mdb-input-init className="form-outline mb-3">
                        <input
                          type="number"
                          id="form2Example22"
                          placeholder="Mobile"
                          className="form-control"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          required
                        />
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="submit"
                        >
                          Sign Up
                        </button>
                      </div>
                      {loading ? <LoadingSpinner /> : null}
                      {data=="User already exists" ? <ShowCustomAlert message={data} variant={"danger"} showCancelButton={false} showOkButton={true} cancelBtn={cancelButtonClick} okayButton={okayButtonClick} />:data=="User Created Successfully"?<ShowCustomAlert message={data} variant={"success"} showCancelButton={false} showOkButton={true} cancelBtn={cancelButtonClick} okayButton={okayButtonClick}/>:null}
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Already have an account?</p>
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
