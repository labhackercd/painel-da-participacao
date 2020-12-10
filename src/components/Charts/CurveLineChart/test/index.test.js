import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from "enzyme";
import CurveLineChart from './../index';

const curveLineChartdata = {
    values:[
        ['ano', 'Usuários'],
        ['2016', 134],
        ['2017', 523],
        ['2018', 400],
        ['2019', 843],
        ['2020', 1432],
      ],
    options:{
        backgroundColor: '#000000',
        hAxis: {
          textStyle:{color: '#FFFFFF'}
        },
        vAxis: {
          textPosition: 'none',
          gridlines: {color: 'transparent'}
        },
        curveType: 'function',
        legend:{textStyle: {color: 'white'}},
      }
};

test("Snapshot should not have changes", () => {
    const component = mount(<CurveLineChart data={curveLineChartdata.values} options={curveLineChartdata.options}></CurveLineChart>);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
});

it("Mounts the chart with the data", () => {
    const div = document.createElement("div")
    ReactDOM.render(<CurveLineChart data={curveLineChartdata.values} options={curveLineChartdata.options}></CurveLineChart>, div)

});
