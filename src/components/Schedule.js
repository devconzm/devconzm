import React, { Component, Fragment } from "react";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import scheduleData from "../data/schedule.json";

export class Schedule extends Component {
  render() {
    // honestly this isn't the best solution, If it can be optimized further give it a go
    const [day1, day2] = scheduleData.schedule;
    return (
      <div className="container">
        <Fragment>
          <h3>{day1.day}</h3>
          {day1.schedule.map(schedule => (
            <ScheduleItem schedule={schedule} id={schedule.id} />
          ))}
        </Fragment>
        <br />
        <br />
        <Fragment>
          <h3>{day2.day}</h3>
          {day2.schedule.map(_schedule => (
            <ScheduleItem schedule={_schedule} id={_schedule.id} />
          ))}
        </Fragment>
      </div>
    );
  }
}

function ScheduleItem({ schedule, id }) {
  return (
    <div id="accordion" key={id}>
      <div className="card">
        <div className="card-header">
          <a
            className="row card-link"
            href={"#collapseOne" + id}
            data-toggle="collapse"
          >
            <div className="col m2">
              <img
                src={schedule.image}
                className="rounded-circle"
                width={80}
                height={80}
                alt="keynote speaker"
              />
              <br />
              <a href="https://twitter.com/olivierjmm" title="twitter">
                <FaGithubSquare size={20} />
              </a>
              <a href="https://twitter.com/olivierjmm" title="twitter">
                <FaTwitterSquare size={20} />
              </a>
            </div>
            <div className="col m5">
              <a className="card-link" data-toggle="collapse">
                {Schedule.topic}
              </a>
              <br />
              <a data-toggle="collapse" href={"#collapseOne" + id}>
                {schedule.speaker}
              </a>
            </div>
            <div className="col m5">
              <a data-toggle="collapse" href={"#collapseOne" + id}>
                07:45 - 08:45
              </a>
              <br />
              <span>60mins</span>
            </div>
          </a>
        </div>
        <div
          id={"collapseOne" + id}
          className="collapse"
          data-parent="#accordion"
        >
          <div className="card-body">{Schedule.description}</div>
        </div>
      </div>
      <br />
    </div>
  );
}
