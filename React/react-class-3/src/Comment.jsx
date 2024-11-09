import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./commentsForm";

export default function Comment() {
  let [comment, setComment] = useState([
    {
      username: "@ayush",
      remarks: "great work",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComment((currComments) => [...currComments, comment]);
  };

  return (
    <>
      <div>
        <div>
          <h3>All Comments</h3>
          {comment.map((comment, idx) => {
            return (
              // Add return here
              <div className="comment" key={idx}>
                <span>{comment.remarks}</span>
                &nbsp;
                <span>(rating: {comment.rating})</span>
                &nbsp;
                <br />
                <span>-{comment.username}</span>
                &nbsp;
              </div>
            );
          })}
        </div>
      </div>
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
