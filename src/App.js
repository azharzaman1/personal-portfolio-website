import React from "react";
import HomePage from "./Pages/Homepage";
import Pricing from "./Pages/Pricing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoachingOverview from "./Pages/Coaching/CoachingOverview";
import EnrollNow from "./Pages/Coaching/EnrollNow";
import EnrolledStudents from "./Pages/Coaching/EnrolledStudents";
import EnrollementSuccess from "./Pages/Coaching/EnrollementSuccess";

const App = () => {
  return (
    <div className="App__main__container">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/coaching/front-end-development/batch1/overview">
            <CoachingOverview />
          </Route>
          <Route path="/coaching/front-end-development/batch1/enrollment">
            <EnrollNow />
          </Route>
          <Route path="/coaching/front-end-development/batch1/enrollement-successful">
            <EnrollementSuccess />
          </Route>
          <Route path="/coaching/front-end-development/batch1/enrolled-students">
            <EnrolledStudents />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
