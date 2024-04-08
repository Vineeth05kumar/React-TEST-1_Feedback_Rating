import React, { useState } from "react";

export default function Form(props) {
  const [nameEntered, setNameEntered] = useState("");
  const [ratingEntered, setRatingEntered] = useState("1");

  const nameChangeHandler = (event) => {
    setNameEntered(event.target.value);
  };

  const ratingChangeHandler = (event) => {
    setRatingEntered(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const obj = {
      name: nameEntered,
      rating: ratingEntered,
    };
    props.onAdding(obj);
    setNameEntered("");
    setRatingEntered("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <h1>FeedBack System</h1>
      <label htmlFor="name">Enter User Name:</label>
      <input
        value={nameEntered}
        id="name"
        type="text"
        onChange={nameChangeHandler}
      />
      <label htmlFor="rating">Choose Rating:</label>
      <select id="rating" value={ratingEntered} onChange={ratingChangeHandler}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
