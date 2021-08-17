import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../Files/firebase";
import "./EnrolledStudents.css";

const EnrolledStudents = () => {
  const [enrolledStudentsList, setEnrolledStudentsList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await db
        .collection("coaching")
        .doc("frontEndDev_batch1")
        .collection("enrolledStudents")
        .onSnapshot((snapshot) =>
          setEnrolledStudentsList(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              profile: doc.data(),
            }))
          )
        );
    };
    fetchData();
  }, []);

  return (
    <div className="enrolled__students">
      <div className="student__profilesList">
        <div className="table__header">
          <h1>No.</h1>
          <h2>Name</h2>
          <h3>City</h3>
          <h4>Email Address</h4>
        </div>
        {enrolledStudentsList?.map((student) => (
          <EnrolledStudentProfile
            roll={student?.profile.enrolledAt}
            name={student?.profile.fullName}
            city={student?.profile.city}
            email={student?.profile.contactInfo.email}
          />
        ))}
      </div>
      <div className="notice">
        <h3>
          If your details not correct, ot your profile is not list please report
          at azharzaman.001@gmail.com
        </h3>
      </div>
      <div className="enrolledStudents__backLink">
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

const EnrolledStudentProfile = ({ roll, name, city, email }) => {
  return (
    <div className="student__profile">
      <h1 className="studentProfile__name">{roll}</h1>
      <h2 className="studentProfile__name">{name}</h2>
      <h3 className="studentProfile__city">{city}</h3>
      <h4 className="studentProfile__city">{email}</h4>
    </div>
  );
};

export default EnrolledStudents;
