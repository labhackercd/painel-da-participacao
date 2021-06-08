import React from 'react';
import { shallow, mount } from 'enzyme';
import Caroulsel from '../index';
import CaroulselItem from '../carouselItem';
import MockTheme from '../../../mocks/theme/mockTheme';

const carouselItens = [
  {
    toolName: 'Wikilegis', description: 'Opiniões em textos de propostas legislativas', color: '#14D768', buttonText: 'A participação na Wikilegis', toolPage: `${process.env.NEXT_PUBLIC_WIKILEGIS_PAGE_URL}`,
  },
  {
    id: 2, toolName: 'Audiências Interativas', description: 'Perguntas aos parlamentares', color: '#F59D2A', buttonText: 'A participação nas Audiências', toolPage: `${process.env.NEXT_PUBLIC_AUDIENCIAS_PAGE_URL}`,
  },
];

it('snapshot should not have changes', () => {
  const component = shallow(<MockTheme><Caroulsel carouselItens={[]} /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

it('Render Carousel With Data', () => {
  const component = mount(<MockTheme><Caroulsel carouselItens={carouselItens} /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

// Test Caroulsel Item
it('Render Carousel Item', () => {
  const component = mount(<MockTheme><CaroulselItem item={carouselItens[0]} /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
