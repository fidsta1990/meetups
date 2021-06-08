import React, { useEffect, useState } from "react";
import MeetupList from "./MeetupList";

const AllMeetups = () => {
  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://twomeetup-default-rtdb.firebaseio.com/meetup.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];
        for (let key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setMeetups(meetups);
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <section>
        <p>Loading....</p>
      </section>
    );

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </div>
  );
};

export default AllMeetups;
