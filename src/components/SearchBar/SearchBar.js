import PropTypes from "prop-types";

import {
  SearchBarHeader,
  SearchBarForm,
  SearchBarButton,
  SearchBarSpan,
  SearchBarInput,
  SearchBarIcon,
} from "./SearchBar.styled";

export default function SearchBar({ onSubmit }) {
  return (
    <SearchBarHeader>
      <SearchBarForm onSubmit={onSubmit}>
        <SearchBarButton type="submit">
          <SearchBarIcon />
          <SearchBarSpan>Search</SearchBarSpan>
        </SearchBarButton>

        <SearchBarInput
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchBarForm>
    </SearchBarHeader>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
