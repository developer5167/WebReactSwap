import { Button, Form } from "react-bootstrap";
import "../product-details/comment.css";

export default function Comments({ list }:any) {
  console.log(list.length);
  function getComments(comment:any) {
    return (
      <div>
        <img
          className="CircularAvatar"
          src={comment.profile}
          // style="width:30px height:30px"
        />
        <small>
          <b>{comment.name}</b>
        </small>
        <br />
        <small>
          <i>{comment.comment}</i>
        </small>
        <br />
        <br />
      </div>
    );
  }
  function addCommentButtonClick() {
    console.log("Enter clicked");
  }
  return (
    <div className="comment-box-border">
      <h5>Comments</h5>
      <div className="border-bottom"></div>
      <div className="comments">{list.comments.map(getComments)}</div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="enter your comment"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" onClick={addCommentButtonClick}>
          Add
        </Button>
      </Form>
    </div>
  );
}
