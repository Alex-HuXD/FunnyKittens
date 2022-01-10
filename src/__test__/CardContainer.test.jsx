import { render, screen, fireEvent } from '@testing-library/react';

import CardContainer from '../components/CardContainer';

const mockedCardsSingle = [{ name: 'testName', email: 'testEmail', id: 1 }];

const mockedCardsMutiple = [
  { name: 'testName', email: 'testEmail', id: 1 },
  { name: 'testName1', email: 'testEmail1', id: 2 },
];

describe('CardContainer', () => {
  screen.debug();

  it('should display same as snapshot && if style change is intentional then snapshot must be updated', () => {
    render(<CardContainer cats={mockedCardsSingle} />);
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it('should render tellMe component when only one card is displayed', () => {
    render(<CardContainer cats={mockedCardsSingle} />);
    const tellMeComponent = screen.getByRole('button', { name: /speak/i });
    expect(tellMeComponent).toBeInTheDocument();
  });

  it('should not render tellMe component when more than one card is displayed', () => {
    render(<CardContainer cats={mockedCardsMutiple} />);
    const tellMeComponent = screen.queryByRole('button', { name: /speak/i });
    expect(tellMeComponent).toBeFalsy();
  });
});
