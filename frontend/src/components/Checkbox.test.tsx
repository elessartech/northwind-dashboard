import { render } from '@testing-library/react'
import Checkbox from './Checkbox';
import { describe, expect, it } from 'vitest'

describe('<Checkbox />', () => {
  it('Checkbox`s initial status is false', () => {
    const wrapper = render(<Checkbox shipped={false} setShipped={() => {}} />)
    const checkbox = wrapper.container.querySelector(
        'input[type=checkbox]'
      ) as HTMLInputElement;
    expect(checkbox.checked).toBe(false)
  })
  it('Checkbox`s status changes according to shipped var', () => {
    const wrapper = render(<Checkbox shipped={true} setShipped={() => {}} />)
    const checkbox = wrapper.container.querySelector(
        'input[type=checkbox]'
      ) as HTMLInputElement;
    expect(checkbox.checked).toBe(true)
  })
});

