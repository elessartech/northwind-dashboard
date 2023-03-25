import styled from 'styled-components'
import { SearchProps } from '../types'

const SearchContainer = styled.figure`
    display: flex;
    flex-direction: column;
`

const SearchBarLabel = styled.label`
    margin-bottom: 0.5em;
    font-size: .8em;
    margin-left: 1.5em;
    font-weight: 500;
`

const SearchBar = styled.input`
    background-color: rgb(255, 255, 255, 0.08);
    padding: .75em;
    border-radius: 15px;
    border: none;
    color: #FFFFFF; 
    min-width: 600px;
    font-size: 1.25em;
    &::placeholder {
        color: rgb(255, 255, 255, 0.5);
        font-size: 1.25em;
        letter-spacing: 0.05rem;
    }
    @media only screen and (max-width: 600px) {
        & {
            min-width: 200px;
        }
    }
`

const Search = ({productName, setProductName}: SearchProps) => {
    return (
        <SearchContainer>
            <SearchBarLabel htmlFor='SearchBar' className='SearchBarLabel'>Filter orders by product name</SearchBarLabel>
            <SearchBar type='text' value={productName} onChange={(event) => setProductName(event.target.value)} name='productName' id='SearchBar' placeholder='Aniseed Syrup' />
        </SearchContainer>
    )
}
export default Search