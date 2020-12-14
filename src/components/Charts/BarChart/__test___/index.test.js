import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from "enzyme";
import BarChart from './../index';

const barChartdata = {
    values: [
    ['City', '2010 Population', '2000 Population'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000],
  ],
    options:{
    title: 'Population of Largest U.S. Cities',
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Total Population',
      minValue: 0,
    },
    vAxis: {
      title: 'City',
    },
  }
};

test("Snapshot should not have changes", () => {
    const component = mount(<BarChart data={barChartdata.values} options={barChartdata.options}></BarChart>);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
});

it("Mounts the chart with the data", () => {
    const div = document.createElement("div")
    ReactDOM.render(<BarChart data={barChartdata.values} options={barChartdata.options}></BarChart>, div)
});
