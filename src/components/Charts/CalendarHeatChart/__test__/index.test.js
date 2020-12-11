import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from "enzyme";
import CalendarHeatChart from './../index';

const calendarHeatChartdata = {
    values:[
      [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
      [new Date(2012, 3, 13, 8, 40, 0, 0), 37032],
      [new Date(2012, 3, 14, 8, 40, 0, 0), 38024],
      [new Date(2012, 3, 15, 8, 40, 0, 0), 38024],
      [new Date(2012, 3, 16, 8, 40, 0, 0), 38108],
      [new Date(2012, 3, 17, 8, 40, 0, 0), 38229],
      [new Date(2013, 1, 4, 8, 40, 0, 0), 38177],
      [new Date(2013, 1, 5, 8, 40, 0, 0), 38705],
      [new Date(2013, 1, 12, 8, 40, 0, 0), 38210],
      [new Date(2013, 1, 13, 8, 40, 0, 0), 38029],
      [new Date(2013, 1, 19, 8, 40, 0, 0), 38823],
      [new Date(2013, 1, 23, 8, 40, 0, 0), 38345],
      [new Date(2013, 1, 24, 8, 40, 0, 0), 38436],
      [new Date(2013, 2, 10, 8, 40, 0, 0), 38447],
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
