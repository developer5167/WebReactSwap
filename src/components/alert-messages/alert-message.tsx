import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

export default function ShowCustomAlert({ message, variant, showCancelButton, showOkButton, cancelBtn, okayButton,showAlert,setShowAlert }: any) {

  const cancelButtonClick = (e: any) => {
    cancelBtn(e)
  }
  const okayButtonClick = (e: any) => {
    setShowAlert(false)
    okayButton(e);
  }
  console.log("LDLLL ",showAlert)
  return (
    <>
      <Alert show={showAlert} variant={variant}>
        <Alert.Heading>{message}</Alert.Heading>
        <p>
          {message}
        </p>
        <hr />
        {showCancelButton ? <div className="d-flex justify-content-end">
          <Button onClick={cancelButtonClick} variant="outline-success">
            Cancel
          </Button>
        </div> : null}
        {showOkButton ? <div className="d-flex justify-content-end">
          <Button onClick={okayButtonClick} variant="outline-success">
            Okay
          </Button>
        </div> : null}
      </Alert>

    </>
  );
}