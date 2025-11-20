// Followed tutorial from https://www.freecodecamp.org/news/build-a-countdown-timer-with-react-step-by-step/ 
// to create this component, later redesigned to fit my project

import React, { useState, useEffect, useContext } from "react";
import { Card, Row, Col } from "react-bootstrap";
import FilmContext from "../contexts/FilmContext";

// TODO - edit to take the actual values from the API

const CountdownTimer = () => {
  const filmDetails = useContext(FilmContext)
  const [eventName, setEventName] = useState(filmDetails.name);
  const [eventDate, setEventDate] = useState(filmDetails.releaseDate);
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    if (countdownStarted && eventDate) {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(filmDetails.releaseDate).getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countdownInterval);
          alert("Countdown complete!");
        }

        setTimeRemaining(remainingTime);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [countdownStarted, eventDate, timeRemaining]);

  useEffect(() => {
    if (countdownStarted) {
      document.title = eventName;
    }
  }, [countdownStarted, eventName]);

  const handleSetCountdown = () => {
    setCountdownStarted(true);
    localStorage.setItem("eventDate", eventDate);
    localStorage.setItem("eventName", eventName);
  };

  const formatDate = (date) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
        <Card style={{backgroundColor:"black"}}>
            <Row> 
                <Col>
                    <Card >
                        <p style={{fontFamily: "Constantina"}}>{days.toString().padStart(2, "0")}</p>
                        <p style={{fontFamily: "Constantina"}}>Days</p>
                    </Card>
                </Col>
                <Col >
                    <Card>
                        <p style={{fontFamily: "Constantina"}}>{hours.toString().padStart(2, "0")}</p>
                        <p style={{fontFamily: "Constantina"}}>Hours</p>
                    </Card>
                </Col>
                <Col >
                    <Card>
                        <p style={{fontFamily: "Constantina"}}>{minutes.toString().padStart(2, "0")}</p>
                        <p style={{fontFamily: "Constantina"}}>Minutes</p>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <p style={{fontFamily: "Constantina"}}>{seconds.toString().padStart(2, "0")}</p>
                        <p style={{fontFamily: "Constantina"}}>Seconds</p>
                    </Card>
                </Col>  
            </Row>
        </Card>
    );
  };

  useEffect(() => handleSetCountdown(), [])
  return (
    <div className="countdown-timer-container">
      <h3 className="countdown-date">
        Release Party {countdownStarted && formatDate(eventDate)} at 7:00 PM
      </h3>
        <>
          {formatTime(timeRemaining)}
        </>
    </div>
  );
};

export default CountdownTimer;