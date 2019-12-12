import React, { Component } from 'react';
import Header from './Info';
import scheduleData from '../data/schedule.json';
import Footer from './Footer';
import ActivityTimeline from 'react-rainbow-components/components/ActivityTimeline';
import TimelineMarker from 'react-rainbow-components/components/TimelineMarker';
import Tabset from 'react-rainbow-components/components/Tabset';
import Tab from 'react-rainbow-components/components/Tab';
const [day1, day2] = scheduleData.schedule;
console.log(day1);
export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'DAY_ONE' };
    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  handleOnSelect(event, selected) {
    this.setState({ selected });
  }

  renderTabContent() {
    const { selected } = this.state;
    if (selected === 'DAY_ONE') {
      return (
        <ActivityTimeline>
          {day1.schedule.map(schedule => (
            <TimelineMarker
              label={schedule.activity + ': ' + schedule.topic}
              datetime={schedule.time}
              description={schedule.speaker}
            />
          ))}
        </ActivityTimeline>
      );
    } else {
      return (
        <ActivityTimeline>
          {day2.schedule.map(schedule => (
            <TimelineMarker
              label={schedule.activity + ': ' + schedule.topic}
              datetime={schedule.time}
              description={schedule.speaker}
            />
          ))}
        </ActivityTimeline>
      );
    }
  }
  render() {
    const { selected } = this.state;

    // honestly this isn't the best solution, If it can be optimized further give it a go
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-4">
              <h1
                className="text-center"
                style={{ marginTop: '30px', marginBottom: '30px' }}
              >
                DevCon Zambia Schedule
              </h1>
              <p className="lead small text-center">
                {' '}
                Note: Schedule subject to Change
              </p>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-lg-12 col-md-12 d-flex justify-content-center">
              <div className="rainbow-m-around_xx-large">
                <Tabset
                  id="tabset-1"
                  onSelect={this.handleOnSelect}
                  activeTabName={selected}
                  className="rainbow-background-color_gray-1 rainbow-p-horizontal_x-large text-center"
                >
                  <Tab
                    label="19th September 2020"
                    name="DAY_ONE"
                    id="DAY_ONE"
                    ariaControls="primaryTab"
                  />

                  <Tab
                    label="20th Spetember 2020"
                    name="DAY_TWO"
                    id="DAY_TWO"
                    ariaControls="sharedTab"
                  />
                </Tabset>
                <br></br>
                <br></br>

                {this.renderTabContent()}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
