import React from 'react';
import { shallow, mount } from 'enzyme';
import Caroulsel from '../index';

const carouselItens = [
  {
    toolName: 'Wikilegis', description: 'Opiniões em textos de propostas legislativas', color: '#14D768', buttonText: 'A participação na Wikilegis', toolPage: `${process.env.NEXT_PUBLIC_WIKILEGIS_PAGE_URL}`,
  },
  {
    id: 2, toolName: 'Audiências Interativas', description: 'Perguntas aos parlamentares', color: '#F59D2A', buttonText: 'A participação nas Audiências', toolPage: `${process.env.NEXT_PUBLIC_AUDIENCIAS_PAGE_URL}`,
  },
];

it('snapshot should not have changes', () => {
  const component = shallow(<Caroulsel carouselItens={[]} />);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});

it('Render Carousel With Data', () => {
  const component = mount(<Caroulsel carouselItens={carouselItens} />);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});
