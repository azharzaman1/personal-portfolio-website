import React from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./EnrollementSuccess.css";

const EnrollementSuccess = () => {
  return (
    <div className="enrollement__success">
      <div className="enrollmentSuccess__card">
        <Card className="orderPlaced__card">
          <CheckCircleOutlineIcon />

          <h3 className="placedSuccess__tagline">Enrollement Successful</h3>
          <Link to="/coaching/front-end-development/batch1/enrolled-students">
            See All Enrolled Students
          </Link>
        </Card>
        <div className="enrolledStudents__backLink">
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default EnrollementSuccess;
