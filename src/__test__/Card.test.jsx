import { render, screen } from '@testing-library/react';

import Card from '../components/Card';

const mockedProps = {
  name: 'testName',
  email: 'testEmail',
  id: 1,
};
describe('Card', () => {
  it('should render name, email and id', () => {
    render(<Card {...mockedProps} />);

    const nameElement = screen.getByText(/testname/i);
    const emailElement = screen.getByText(/testemail/i);
    const imgElement = screen.getByRole('img');

    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  });

  it('should display same as snapshot && if style change is intentional then snapshot must be updated', () => {
    render(<Card {...mockedProps} />);
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
