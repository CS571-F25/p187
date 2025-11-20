// Followed tutorial from https://www.freecodecamp.org/news/build-a-countdown-timer-with-react-step-by-step/ 
// to create this component, later redesigned to fit my project

import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";

// TODO - edit to take the actual values from the API

const CountdownTimer = () => {
  const [eventName, setEventName] = useState("Wake Up Dead Man: A Knives Out Mystery Release Event");
  const [eventDate, setEventDate] = useState("December 12, 2025");
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    if (countdownStarted && eventDate) {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
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
                        <h3 style={{fontFamily: "Constantina"}}>{days.toString().padStart(2, "0")}</h3>
                        <h4 style={{fontFamily: "Constantina"}}>Days</h4>
                    </Card>
                </Col>
                <Col >
                    <Card>
                        <h3 style={{fontFamily: "Constantina"}}>{hours.toString().padStart(2, "0")}</h3>
                        <h4 style={{fontFamily: "Constantina"}}>Hours</h4>
                    </Card>
                </Col>
                <Col >
                    <Card>
                        <h3 style={{fontFamily: "Constantina"}}>{minutes.toString().padStart(2, "0")}</h3>
                        <h4 style={{fontFamily: "Constantina"}}>Minutes</h4>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <h3 style={{fontFamily: "Constantina"}}>{seconds.toString().padStart(2, "0")}</h3>
                        <h4 style={{fontFamily: "Constantina"}}>Seconds</h4>
                    </Card>
                </Col>  
            </Row>
        </Card>
    );
  };

  useEffect(() => handleSetCountdown(), [])
  return (
    <div className="countdown-timer-container">
      <h2 className="countdown-name">
        {countdownStarted ? eventName : "Countdown Timer"}
      </h2>
      <h3 className="countdown-date">
        {countdownStarted && formatDate(eventDate)}
      </h3>
        <>
          {formatTime(timeRemaining)}
        </>
    </div>
  );
};

export default CountdownTimer;