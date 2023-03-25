import styled from 'styled-components'
import { CheckboxProps } from '../types'

const CheckboxContainer = styled.figure`
    margin-top: 0.75em;
    margin-left: 1em;
`

const CheckboxLabel = styled.label`
    display: block;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-left: 1.75em;
    font-size: 15px;
    & > span:after {
        left: 7.5px;
        top: 1px;
        width: 2.5px;
        height: 10px;
        border: solid #fff;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    &:hover > input ~ span {
        background-color: #fff;
    }
    & > input:checked ~ span {
        background-color: #B54139;
    }
`

const CheckboxShipOrders = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    &:checked ~ span:after {
        display: block;
    }
`

const Checkmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #fff;

    &:after {
        content: "";
        position: absolute;
        display: none;
    } 

`

const Checkbox = ({shipped, setShipped}: CheckboxProps) => {
    return (
        <CheckboxContainer>
            <CheckboxLabel>Show only shipped orders
                <CheckboxShipOrders type="checkbox" checked={shipped} onChange={() => setShipped(!shipped)} />
                <Checkmark />
            </CheckboxLabel>
        </CheckboxContainer>
    )
}
export default Checkbox