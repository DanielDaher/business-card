//https://www.robinwieruch.de/vitest-react-testing-library/
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loading from '../src/Components/Loading';

describe('Loading', () => {
  it('show 12 blades loading', () => {
    render(<Loading/>);

    const divFather = screen.getByTestId('spinner-center');
    const blades = screen.getAllByTestId('spinner-blade');
    const firstBlade = blades[0];

    expect(divFather).toHaveClass('spinner');
    expect(divFather).toHaveClass('center');

    expect(blades).toHaveLength(12);
    expect(firstBlade).toHaveClass('spinner-blade');
  });
});