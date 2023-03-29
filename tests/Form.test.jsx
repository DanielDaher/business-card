//https://www.robinwieruch.de/vitest-react-testing-library/
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../src/Components/Form';

describe('Form', () => {
  it('Alert appears when a form input is empty', async () => {  
    render(<Form/>);

    const inputName = screen.getByPlaceholderText('Name');
    const button = screen.getByTitle('Make a new QR CODE with your informations');

    fireEvent.change(inputName, { target: { value: 'John Doe' } });
    fireEvent.click(button);

    const errorMessage = await screen.findByText('All fields must be filled!');
    expect(errorMessage).toBeInTheDocument();
  });
});