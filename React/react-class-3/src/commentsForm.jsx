import { useState } from "react"

export default function CommentForm () {
    let [formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:5
    })
  return (
    <div>
      <h4>Leave a Comment</h4>
      <form action=''>
        <input type='text' placeholder='username' value={formData.username}/>
        <br />
        <br />
        <textarea name='' id='' value={formData.remarks} placeholder="add remarks">
          Remarks
        </textarea>
        <br />
        <br />
        <input type='number' placeholder='rating' min={1} max={5} value={formData.rating}/>
        <br />
        <br />
        <button>Add Comment</button>
      </form>
    </div>
  )
}
