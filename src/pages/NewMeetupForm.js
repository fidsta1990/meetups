import React, { useRef } from "react";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAdd(meetupData);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* single field */}
      <div className={classes.control}>
        <label htmlFor="title">Meetup Title</label>
        <input type="text" id="title" required ref={titleInputRef} />
      </div>
      {/* single field */}
      <div className={classes.control}>
        <label htmlFor="image">Meetup Image</label>
        <input type="url" id="image" required ref={imageInputRef} />
      </div>
      {/* single field */}
      <div className={classes.control}>
        <label htmlFor="address">Meetup Address</label>
        <input type="text" id="address" required ref={addressInputRef} />
      </div>
      {/* single field */}
      <div className={classes.control}>
        <label htmlFor="description">Meetup Description</label>
        <textarea
          rows="5"
          id="description"
          required
          ref={descriptionInputRef}
        />
      </div>
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  );
};

export default NewMeetupForm;
