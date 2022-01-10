import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, name: 'Alex', email: 'alex@gmail.com' },
        { id: 2, name: 'Lily', email: 'lily@gmail.com' },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('initial render with loading', async () => {
  render(<App />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

it('loaded users after component did mount', async () => {
  render(<App />);
  const titleElement = await screen.findByText(/funny kittens/i);
  expect(titleElement).toBeInTheDocument();
});

it('loaded users', async () => {
  render(<App />);
  const cardElementOne = await screen.findByText(/alex/i);
  const cardElementTwo = await screen.findByText(/lily/i);
  expect(cardElementOne).toBeInTheDocument();
  expect(cardElementTwo).toBeInTheDocument();
});

it('filter users', async () => {
  render(<App />);

  const searchfieldElement = await screen.findByRole('searchbox');
  fireEvent.change(searchfieldElement, { target: { value: 'alex' } });
  // await waitFor(() => screen.queryByText(/alex/i));
  expect(screen.queryByText(/lily/i)).toBeFalsy();
});
