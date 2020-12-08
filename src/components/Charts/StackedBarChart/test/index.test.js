import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from "enzyme";
import StackedBarChart from '../index';

const stackedBarChartData = {
    values:[
        ['Ferramenta', 'Audiências Interativas', 'Wikilegis', 'Enquetes', 'Pauta Participativa'],
        ['',300, 800, 231, 545],
    ],
    options:{
        legend: { position: 'top', maxLines: 3,textStyle: {color: 'white'} },
        isStacked: 'relative',
        colors: ['#FFC107', '#76D275', '#6EC6FF', '#FF6F60'],
        bar: { groupWidth: '30%'},
        hAxis: {minValue: 0,gridlines: {color: 'transparent'}, textPosition: 'none', },
        backgroundColor: '#000000',
    }
};

test("Snapshot should not have changes", () => {
    const component = mount(<StackedBarChart data={stackedBarChartData.values} options={stackedBarChartData.options}></StackedBarChart>);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
});

it("Mounts the chart with the data", () => {
    const div = document.createElement("div")
    ReactDOM.render(<StackedBarChart data={stackedBarChartData.values} options={stackedBarChartData.options}></StackedBarChart>, div)
});
