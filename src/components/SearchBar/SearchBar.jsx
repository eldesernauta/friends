
import { InputGroup, Input } from "reactstrap";

const SearchBar = ({placeholder, onSearch}) => {
  return (
    <InputGroup>
      <Input onChange={onSearch} placeholder={placeholder} />
    </InputGroup>
  );
};

export default SearchBar;
