import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from "enzyme";
import CalendarHeatChart from './../index';

const calendarHeatChartdata = {
    values:[
      [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
      [new Date("2013-02-04T10:40:00.000Z"), 37032],
      [new Date("2013-02-04T10:40:00.000Z"), 37032],
      [new Date("2013-02-04T10:40:00.000Z"), 37032],
      [new Date("2013-02-04T10:40:00.000Z"), 37032],
      [new Date("2013-02-04T10:40:00.000Z"), 37032],
  ],
    options:{
    title: 'Red Sox Attendance',
    calendar: {
      cellColor: {
        stroke: '#76a7fa',
        strokeOpacity: 0.5,
        strokeWidth: 1,
      }
    },
  }
};

test("Snapshot should not have changes", () => {
    const component = mount(<CalendarHeatChart data={calendarHeatChartdata.values} options={calendarHeatChartdata.options}></CalendarHeatChart>);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
});

it("Mounts the chart with the data", () => {
    const div = document.createElement("div")
    ReactDOM.render(<CalendarHeatChart data={calendarHeatChartdata.values} options={calendarHeatChartdata.options}></CalendarHeatChart>, div)
});
