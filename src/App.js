import { Switch, Route, useHistory } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  const history = useHistory();

  const onAddMeetup = (meetupData) => {
    fetch("https://twomeetup-default-rtdb.firebaseio.com/meetup.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(meetupData),
    });

    history.replace("/");
  };

  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={AllMeetups} />
        <Route path="/new">
          <NewMeetup onAdd={onAddMeetup} />
        </Route>
        <Route path="/favourites" component={Favourites} />
      </Switch>
    </Layout>
  );
}

export default App;
