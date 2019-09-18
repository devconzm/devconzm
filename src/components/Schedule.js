import React, { Component, Fragment } from "react";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import scheduleData from "../data/schedule.json";
import Info from "./Info";
import Footer from "./Footer.js";


export class Schedule extends Component {
  render() {
    // honestly this isn't the best solution, If it can be optimized further give it a go
    const [day1, day2] = scheduleData.schedule;
    return (
      <div className="masthead">
        <Info />
        <br />
        <Fragment>
          <div className="container">
            <h3>{day1.day}</h3>
            {day1.schedule.map(schedule => (
              <ScheduleItem schedule={schedule} id={schedule.id} />
            ))}
          </div>
        </Fragment>
        <br />
        <br />
        <Fragment>
          <div className="container">
            <h3>{day2.day}</h3>
            {day2.schedule.map(_schedule => (
              <ScheduleItem schedule={_schedule} id={_schedule.id} />
            ))}
          </div>
        </Fragment>
        <Footer />
      </div>
    );
  }
}

function ScheduleItem({ schedule, id }) {
  return (
    <div className="container">
      <div className="card border-primary">
        <div id="accordion" key={id}>
          <div className="container">
            <div className="card-body border-primary">
              <a
                className="row card-link text-decoraton-none"
                href={"#collapseOne" + id}
                data-toggle="collapse"
              >
                <div className="col-md-1">
                  <img
                    src={schedule.image}
                    className="rounded-circle"
                    width={80}
                    height={80}
                    alt="keynote speaker"
                  />
                  <br />
                  <br />
                </div>
                <div className="col-md-8 text-center">
                    <h2>{schedule.speaker}</h2>
                    <p>{schedule.topic}</p>
                </div>
                <div className="col-md-2 text-right">
                  <span>{schedule.time}</span> 
                    <br />
                  <span>60mins</span>
                </div>
              </a>
              <a href={schedule.githubLink} title="github">
                    <FaGithubSquare size={20} />
                  </a>
                  <a href="https://twitter.com/Olivierjmm?s=17" title="twitter">
                    <FaTwitterSquare size={20} />
                  </a>
            </div>
          </div>
          <div
            id={"collapseOne" + id}
            className="collapse"
            data-parent="#accordion"
          >
            <div className="card-footer text-secondry">
              {schedule.description}
            </div>
            
          </div>
        </div>
        <br />
      </div>
      <br />
    </div>
  );
}