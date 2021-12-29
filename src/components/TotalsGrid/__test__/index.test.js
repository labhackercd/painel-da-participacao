import React from 'react';
import { shallow, mount } from 'enzyme';
import TotalsGrid, { ToolTip } from '../index';
import MockTheme from '../../../mocks/theme/mockTheme';
import * as TEXTCONSTANTS from '../../../settings/texts/AudienciasPage';

const mockData = [
  {
    isLoaded: true,
    info: '5000',
    title: TEXTCONSTANTS.audiencesTotalsTexts.subSectionParticipantsTotals.title,
    toolTipText: TEXTCONSTANTS.audiencesTotalsTexts.subSectionParticipantsTotals.toolTip,
    toolTipAriaLabel:
      TEXTCONSTANTS.audiencesTotalsTexts.subSectionParticipantsTotals.toolTipAriaLabel,
    toolTipColor: '#DA7F0B',
  },
  {
    isLoaded: true,
    info: '5000',
    title: TEXTCONSTANTS.audiencesTotalsTexts.subSectionAudiencesTotals.title,
    toolTipText: TEXTCONSTANTS.audiencesTotalsTexts.subSectionAudiencesTotals.toolTip,
    toolTipAriaLabel: TEXTCONSTANTS.audiencesTotalsTexts.subSectionAudiencesTotals.toolTipAriaLabel,
    toolTipColor: '#DA7F0B',
    subInformation: '200 realizadas',
  },
  {
    isLoaded: true,
    info: '5000',
    title: TEXTCONSTANTS.audiencesTotalsTexts.subSectionMessagesTotals.title,
    toolTipText: TEXTCONSTANTS.audiencesTotalsTexts.subSectionMessagesTotals.toolTip,
    toolTipAriaLabel: TEXTCONSTANTS.audiencesTotalsTexts.subSectionMessagesTotals.toolTipAriaLabel,
    toolTipColor: '#DA7F0B',
  },
  {
    isLoaded: true,
    info: '5000',
    title: TEXTCONSTANTS.audiencesTotalsTexts.subSectionQuestionsTotals.title,
    toolTipText: TEXTCONSTANTS.audiencesTotalsTexts.subSectionQuestionsTotals.toolTip,
    toolTipAriaLabel: TEXTCONSTANTS.audiencesTotalsTexts.subSectionQuestionsTotals.toolTipAriaLabel,
  },
];

it('snapshot should not have changes', () => {
  const component = shallow(<MockTheme><TotalsGrid itens={[]} /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

it('Render Totals Grid With Data', () => {
  const component = mount(<MockTheme><TotalsGrid itens={mockData} /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

it('snapshot should not have changes', () => {
  const component = shallow(<MockTheme><ToolTip itens={[]} /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

it('Render Totals Grid ToolTip With Data', () => {
  const component = mount(<MockTheme><ToolTip itens={mockData} /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
