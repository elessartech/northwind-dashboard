import { render } from '@testing-library/react';
import App from './App';
import { describe, expect, it } from 'vitest';

describe('<App />', () => {
  it('The app contains Logo element', () => {
    const wrapper = render(<App />);
    const logo = wrapper.container.querySelector(
      'span'
    ) as HTMLButtonElement;

    expect(logo.textContent).toBe('Northwind');
  });
});
