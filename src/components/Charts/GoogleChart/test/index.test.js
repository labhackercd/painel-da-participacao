import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import GoogleChart from '../index';

describe('Test Bar Chart', () => {
  const barChartdata = {
    values: [
      ['City', '2010 Population', '2000 Population'],
      ['New York City, NY', 8175000, 8008000],
      ['Los Angeles, CA', 3792000, 3694000],
      ['Chicago, IL', 2695000, 2896000],
      ['Houston, TX', 2099000, 1953000],
      ['Philadelphia, PA', 1526000, 1517000],
    ],
    options: {
      title: 'Population of Largest U.S. Cities',
      chartArea: { width: '50%' },
      hAxis: {
        title: 'Total Population',
        minValue: 0,
      },
      vAxis: {
        title: 'City',
      },
    },
  };

  test('Snapshot of GoogleChart should not have changes', () => {
    const component = mount(<GoogleChart chartType="BarChart" data={barChartdata.values} options={barChartdata.options} />);
    expect(component.exists()).toEqual(true);
    expect(component).toMatchSnapshot();
  });

  test('Mounts the GoogleChart with the data', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GoogleChart chartType="BarChart" data={barChartdata.values} options={barChartdata.options} />, div);
  });
});
/*
describe('Test Calendar Heat Chart', () => {

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

    test("Snapshot of Calendar Heat Chart should not have changes", () => {
        const component = mount(<GoogleChart chartType={"Calendar"} data={calendarHeatChartdata.values} options={calendarHeatChartdata.options}></GoogleChart>);
        expect(component.exists()).toEqual(true);
        expect(component).toMatchSnapshot();
    });

    test("Mounts the Calendar Heat Chart with the data", () => {
        const div = document.createElement("div")
        ReactDOM.render(<GoogleChart chartType={"Calendar"} data={calendarHeatChartdata.values} options={calendarHeatChartdata.options}></GoogleChart>, div)
    });
});

describe('Test Curve Line Chart', () => {

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

    test("Snapshot of Line Chart should not have changes", () => {
        const component = mount(<GoogleChart chartType={"LineChart"} data={curveLineChartdata.values} options={curveLineChartdata.options}></GoogleChart>);
        expect(component.exists()).toEqual(true);
        expect(component).toMatchSnapshot();
    });

    test("Mounts the Line Chart with the data", () => {
        const div = document.createElement("div")
        ReactDOM.render(<GoogleChart chartType={"LineChart"} data={curveLineChartdata.values} options={curveLineChartdata.options}></GoogleChart>, div)
    });
});

describe('Test Pie Chart', () => {

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

    test("Snapshot of Pie Chart should not have changes", () => {
        const component = mount(<GoogleChart chartType={"PieChart"} data={pieChartdata.values} options={pieChartdata.options}></GoogleChart>);
        expect(component.exists()).toEqual(true);
        expect(component).toMatchSnapshot();
    });

    test("Mounts the Pie Chart with the data", () => {
        const div = document.createElement("div")
        ReactDOM.render(<GoogleChart chartType={"PieChart"} data={pieChartdata.values} options={pieChartdata.options}></GoogleChart>, div)
    });
});

describe('Test Stacked Bar Chart', () => {

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

    test("Snapshot of Stacked Bar Chart should not have changes", () => {
        const component = mount(<GoogleChart chartType={"BarChart"} data={stackedBarChartData.values} options={stackedBarChartData.options}></GoogleChart>);
        expect(component.exists()).toEqual(true);
        expect(component).toMatchSnapshot();
    });

    test("Mounts the Stacked Bar Chart with the data", () => {
        const div = document.createElement("div")
        ReactDOM.render(<GoogleChart chartType={"BarChart"} data={stackedBarChartData.values} options={stackedBarChartData.options}></GoogleChart>, div)
    });
});

describe('Test TreeMap Chart', () => {

    const treeMapChartdata = {
        values: [
          [
            'Location',
            'Parent',
            'Market trade volume (size)',
            'Market increase/decrease (color)',
          ],
          ['Global', null, 0, 0],
          ['America', 'Global', 0, 0],
          ['Europe', 'Global', 0, 0],
          ['Asia', 'Global', 0, 0],
          ['Australia', 'Global', 0, 0],
          ['Africa', 'Global', 0, 0],
          ['Brazil', 'America', 11, 10],
          ['USA', 'America', 52, 31],
          ['Mexico', 'America', 24, 12],
          ['Canada', 'America', 16, -23],
          ['France', 'Europe', 42, -11],
          ['Germany', 'Europe', 31, -2],
          ['Sweden', 'Europe', 22, -13],
          ['Italy', 'Europe', 17, 4],
          ['UK', 'Europe', 21, -5],
          ['China', 'Asia', 36, 4],
          ['Japan', 'Asia', 20, -12],
          ['India', 'Asia', 40, 63],
          ['Laos', 'Asia', 4, 34],
          ['Mongolia', 'Asia', 1, -5],
          ['Iran', 'Asia', 18, 13],
          ['Pakistan', 'Asia', 11, -52],
          ['Egypt', 'Africa', 21, 0],
          ['S. Africa', 'Africa', 30, 43],
          ['Sudan', 'Africa', 12, 2],
          ['Congo', 'Africa', 10, 12],
          ['Zaire', 'Africa', 8, 10],
        ],
        options:{
          minColor: '#f00',
          midColor: '#ddd',
          maxColor: '#0d0',
          headerHeight: 15,
          fontColor: 'black',
          showScale: true,
        }
    };

    test("Snapshot of TreeMap Chart should not have changes", () => {
        const component = mount(<GoogleChart chartType={"TreeMap"} data={treeMapChartdata.values} options={treeMapChartdata.options}></GoogleChart>);
        expect(component.exists()).toEqual(true);
        expect(component).toMatchSnapshot();
    });

    test("Mounts the TreeMap Chart with the data", () => {
        const div = document.createElement("div")
        ReactDOM.render(<GoogleChart chartType={"TreeMap"} data={treeMapChartdata.values} options={treeMapChartdata.options}></GoogleChart>, div)
    });
});
*/
