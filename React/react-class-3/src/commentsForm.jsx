import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  return errors;
};

export default function CommentForm({ addNewComment }) {
  // let [formData, setFormData] = useState({
  // username: "",
  // remarks: "",
  // rating: 5,
  // });

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // let handleInputChanges = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };

  // let handleSubmitForm = (event) => {
  //   console.log(formData);
  //   addNewComment(formData);
  //   event.preventDefault();
  //   setFormData({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };

  return (
    <div>
      <h4>Leave a Comment</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        <br />
        <br />

        <label htmlFor="remarks">Remarks</label>
        <textarea
          name="remarks"
          id="remarks"
          value={formik.values.remarks}
          placeholder="add remarks"
          onChange={formik.handleChange}
        ></textarea>
        <br />
        <br />

        <label htmlFor="rating">Rating</label>
        <input
          name="rating"
          type="number"
          id="rating"
          placeholder="rating"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
        />
        <br />
        <br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
