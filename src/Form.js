import React, { useState } from "react";
// import CopyRight from "./CopyRight";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  // const handleSubmit = () => {};

  return (
    <>
      <article>
        <div className="title">
          <h2>Contact me here</h2>
          <div className="underline"></div>
        </div>

        <form className="form">
          <div className="form-control">
            <label htmlFor="Name">Name : </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="comments">Comments : </label>
            <textarea
              type="text"
              id="comments"
              name="comments"
              placeholder="..."
              style={{ height: "50px" }}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
        {/* <hr />
        <footer>
          <CopyRight />
        </footer> */}
      </article>
    </>
  );
};

export default Form;
