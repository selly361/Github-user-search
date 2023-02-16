import {
  ErrorMessage,
  SearchButton,
  StyledInput,
  StyledSearchField,
} from "./SearchField.styles";

import { ISearchFieldProps } from "types/searchField";
import React from "react";
import { SearchIcon } from "assets";

function SearchField({ query, setQuery, error, fetchData }: ISearchFieldProps) {
  return (
    <StyledSearchField>
      <SearchIcon />
      <StyledInput
        onKeyPress={(e) => {
          if(e.key == "Enter") fetchData(query);
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search a Github Username..."
      />
      <ErrorMessage>{error}</ErrorMessage>
      <SearchButton onClick={() => fetchData(query)}>Search</SearchButton>
    </StyledSearchField>
  );
}

export default SearchField;
