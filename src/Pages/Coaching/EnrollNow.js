import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./EnrollNow.css";
import firebase from "firebase";
import { db } from "../../Files/firebase";

const EnrollNow = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [fetchedBatchDetails, setfetchedBatchDetails] = useState();

  const history = useHistory();

  useEffect(() => {
    const fetchedData = async () => {
      await db
        .collection("coaching")
        .doc("frontEndDev_batch1")
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log(doc.data());
            setfetchedBatchDetails(doc.data());
          } else {
            console.log("Oops!!! Document not found");
          }
        });
    };
    fetchedData();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      mobileNo === "" ||
      city === "" ||
      age === ""
    ) {
      alert(
        "Some of the mandatory fields are missing, please recheck before enrolling again!"
      );
    } else {
      await db
        .collection("coaching")
        .doc("frontEndDev_batch1")
        .collection("enrolledStudents")
        .doc(
          `${firstName}${lastName}_roll${
            fetchedBatchDetails?.enrolledStudents + 1
          }`
        )
        .set(
          {
            contactInfo: {
              email: email,
              mobileNo: mobileNo,
            },
            enrolledAt: fetchedBatchDetails?.enrolledStudents + 1,
            firstName: firstName,
            lastName: lastName,
            fullName: `${firstName} ${lastName}`,
            city: city,
            age: age,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        );

      await db
        .collection("coaching")
        .doc("frontEndDev_batch1")
        .set(
          {
            enrolledStudents: fetchedBatchDetails?.enrolledStudents + 1,
          },
          { merge: true }
        );

      history.replace(
        "/coaching/front-end-development/batch1/enrollement-successful"
      );
    }
  };

  return (
    <div className="enroll__page">
      <h3>Please fill in given details</h3>
      <form onSubmit={submitHandler} className="enroll__form">
        <div className="inputs__row">
          <div className="input">
            <span>First Name</span>
            <input
              placeholder="Enter your first name (e.g. Muhammad)"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value.trim())}
            />
          </div>
          <div className="input">
            <span>Last Name</span>
            <input
              placeholder="Enter your last name (e.g. Ahmad)"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value.trim())}
            />
          </div>
        </div>

        <div className="inputs__row">
          <div className="input">
            <span>Email</span>
            <input
              placeholder="Enter your valid email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
          </div>
          <div className="input">
            <span>Whatsapp No</span>
            <input
              placeholder="Enter your mobile no"
              type="text"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value.trim())}
            />
          </div>
        </div>

        <div className="inputs__row">
          <div className="input">
            <span>City</span>
            <input
              placeholder="Enter your city name"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="input">
            <span>Your Age</span>
            <input
              placeholder="Your age"
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value.trim())}
            />
          </div>
        </div>
        <input className="enroll__btn" type="submit" value="Enroll Now" />
      </form>
    </div>
  );
};

export default EnrollNow;
