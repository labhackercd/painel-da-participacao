import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from "enzyme";
import PieChart from './../index';

const pieChartdata = {
    values:[
        ['Dispositivo', 'Acessos'],
        ['Mobile', 15],
        ['Desktop', 15],
        ['Tablet', 70],
    ],
    options:{
        legend:{textStyle: {color: 'white'}},
        colors: ['#855CF8', '#503795', '#E289F2'],
        backgroundColor: '#000000',
    }
};

test("Snapshot should not have changes", () => {
    const component = mount(<PieChart data={pieChartdata.values} options={pieChartdata.options}></PieChart>);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
});

it("Mounts the chart with the data", () => {
    const div = document.createElement("div")
    ReactDOM.render(<PieChart data={pieChartdata.values} options={pieChartdata.options}></PieChart>, div)

    /*
    const component = mount(<PieChart data={pieChartdata}></PieChart>);
    expect(component.exists()).toEqual(true);*/
});
