import React from 'react';
import { shallow, mount } from 'enzyme';
import CaroulselCards from '../index';
import TotalFrame from '../../Frames/TotalFrame';
import MockTheme from '../../../mocks/theme/mockTheme';
import * as TEXTCONSTANTS from '../../../settings/texts/AudienciasPage';

const carouselItens = [
  {
    isLoaded: true,
    info: 10,
    title: TEXTCONSTANTS.audiencesTotalsTexts.subSectionParticipantsTotals.title,
    toolTipText: TEXTCONSTANTS.audiencesTotalsTexts.subSectionParticipantsTotals.toolTip,
    toolTipAriaLabel: TEXTCONSTANTS.audiencesTotalsTexts.subSectionParticipantsTotals
      .toolTipAriaLabel,
    toolTipColor: '#FFFF',
  },
  {
    isLoaded: true,
    info: 10,
    title: TEXTCONSTANTS.audiencesTotalsTexts.subSectionAudiencesTotals.title,
    toolTipText: TEXTCONSTANTS.audiencesTotalsTexts.subSectionAudiencesTotals.toolTip,
    toolTipAriaLabel: TEXTCONSTANTS.audiencesTotalsTexts.subSectionAudiencesTotals.toolTipAriaLabel,
    oolTipColor: '#FFFF',
    subInformation: '2 realizadas',
  },
  {
    isLoaded: true,
    info: 10,
    title: TEXTCONSTANTS.audiencesTotalsTexts.subSectionMessagesTotals.title,
    toolTipText: TEXTCONSTANTS.audiencesTotalsTexts.subSectionMessagesTotals.toolTip,
    toolTipAriaLabel: TEXTCONSTANTS.audiencesTotalsTexts.subSectionMessagesTotals.toolTipAriaLabel,
    toolTipColor: '#FFFF',
  },
  {
    isLoaded: true,
    info: 10,
    title: TEXTCONSTANTS.audiencesTotalsTexts.subSectionQuestionsTotals.title,
    toolTipText: TEXTCONSTANTS.audiencesTotalsTexts.subSectionQuestionsTotals.toolTip,
    toolTipAriaLabel: TEXTCONSTANTS.audiencesTotalsTexts.subSectionQuestionsTotals.toolTipAriaLabel,
  },
];

it('snapshot should not have changes', () => {
  const component = shallow(<MockTheme><CaroulselCards carouselItens={[]} /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

it('Render Carousel With Data', () => {
  const component = mount(<MockTheme><CaroulselCards carouselItens={carouselItens} /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

// Test Caroulsel Item
it('Render Carousel Item', () => {
  const component = mount(<MockTheme><TotalFrame item={carouselItens[0]} /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
