import React from "react";
import NewMeetupForm from "./NewMeetupForm";

const NewMeetup = (props) => {
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAdd={props.onAdd}/>
    </section>
  );
};

export default NewMeetup;
