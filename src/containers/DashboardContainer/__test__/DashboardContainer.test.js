import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../index.js';
import { Route, MemoryRouter } from 'react-router-dom'
import ShallowRenderer from 'react-test-renderer/shallow';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import {shallow} from "enzyme/build";
import MockTheme from './../../../components/mockTheme';

test("It renders Dashboard Page", async () => {
    const  wrapper = mount(<MockTheme><Router><Dashboard/></Router></MockTheme>);
});


test("It renders Dashboard Page", async () => {
    const  wrapper = mount(<MockTheme><Dashboard/></MockTheme>);
    //console.log(wrapper.debug())
    const tabButton = wrapper.find("#simple-tab-0").last();
    //console.log(tabButton.debug())
    tabButton.simulate('click');
});
