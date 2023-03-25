import styled from "styled-components";
import { SearchProps } from "../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchContainer = styled.figure`
  display: flex;
  flex-direction: column;
`;

const SearchBarLabel = styled.label`
  margin-bottom: 0.5em;
  font-size: 0.8em;
  margin-left: 1.5em;
  font-weight: 500;
`;

const SearchBar = styled.input`
  background-color: rgb(255, 255, 255, 0.08);
  padding: 0.75em;
  border-radius: 15px;
  border: none;
  color: #ffffff;
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
`;

const SearchBarContainer = styled.div`
  position: relative;
`

const MagnifierIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 1.5em;
  top: 1.25em;
`

const Search = ({ productName, setProductName }: SearchProps) => {
  return (
    <SearchContainer>
      <SearchBarLabel htmlFor="SearchBar" className="SearchBarLabel">
        Filter orders by product name
      </SearchBarLabel>
      <SearchBarContainer>
        <SearchBar
          type="text"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
          name="productName"
          id="SearchBar"
          placeholder="Aniseed Syrup"
        />
        <MagnifierIcon icon={faMagnifyingGlass} />
      </SearchBarContainer>
    </SearchContainer>
  );
};
export default Search;
