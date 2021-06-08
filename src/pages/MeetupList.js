import React from "react";
import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {

  const meetupList = props.meetups.map((meetup) => {
    return (
      <MeetupItem
        key={meetup.id}
        id={meetup.id}
        title={meetup.title}
        image={meetup.image}
        address={meetup.address}
        description={meetup.description}
      />
    );
  });

  return <ul className={classes.list}>{meetupList}</ul>;
};

export default MeetupList;
