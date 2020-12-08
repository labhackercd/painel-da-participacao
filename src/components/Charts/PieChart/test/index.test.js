import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from "enzyme";
import PieChart from './../index';

const pieChartdata = {values:[15, 15, 70],  labels: ['Mobile', 'Desktop', 'Tablet']};

test("Snapshot should not have changes", () => {
    const component = mount(<PieChart data={pieChartdata}></PieChart>);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
});

it("Mounts the chart with the data", () => {
    const component = mount(<PieChart data={pieChartdata}></PieChart>);
    expect(component.exists()).toEqual(true);
});
