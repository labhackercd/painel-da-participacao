import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from "enzyme";
import CalendarHeatChart from './../index';

const pieChartdata = {
    values:[
      [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
      [new Date(2012, 3, 13), 37032],
      [new Date(2012, 3, 14), 38024],
      [new Date(2012, 3, 15), 38024],
      [new Date(2012, 3, 16), 38108],
      [new Date(2012, 3, 17), 38229],
      [new Date(2013, 1, 4), 38177],
      [new Date(2013, 1, 5), 38705],
      [new Date(2013, 1, 12), 38210],
      [new Date(2013, 1, 13), 38029],
      [new Date(2013, 1, 19), 38823],
      [new Date(2013, 1, 23), 38345],
      [new Date(2013, 1, 24), 38436],
      [new Date(2013, 2, 10), 38447],
  ],
    options:{
    title: 'Red Sox Attendance',
  }
};

test("Snapshot should not have changes", () => {
    const component = mount(<CalendarHeatChart data={pieChartdata.values} options={pieChartdata.options}></CalendarHeatChart>);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
});

it("Mounts the chart with the data", () => {
    const div = document.createElement("div")
    ReactDOM.render(<CalendarHeatChart data={pieChartdata.values} options={pieChartdata.options}></CalendarHeatChart>, div)
});
