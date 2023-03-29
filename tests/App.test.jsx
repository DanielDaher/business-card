//https://www.robinwieruch.de/vitest-react-testing-library/
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

describe('App', () => {
  it('Route / should show Form element', () => {
    render(<App/>);

    screen.debug();
    const inputName = screen.getByPlaceholderText('Name');
    const inputLinkedin = screen.getByPlaceholderText('Linkedin URL');
    const inputGithub = screen.getByPlaceholderText('Github URL');
    const button = screen.getByTitle('Make a new QR CODE with your informations');

    expect(inputName).toBeInTheDocument();
    expect(inputLinkedin).toBeInTheDocument();
    expect(inputGithub).toBeInTheDocument();
    expect(button).toBeInTheDocument();

  });
});