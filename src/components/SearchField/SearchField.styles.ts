import styled from "styled-components";

export const StyledSearchField = styled.fieldset`
  height: 70px;
  width: 738px;
  background-color: ${(props) => props.theme.bgSecondary};
  padding: 10px 10px 10px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 14px;

  svg {
    min-width: max-content;
  }
`;

export const StyledInput = styled.input`
  all: unset;
  color: ${(props) => props.theme.textSearch};
  width: 100%;
  margin-left: 10px;
`;

export const SearchButton = styled.button`
  all: unset;
  background: #0079ff;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  padding: 13px 24px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.primaryHover};
  }
`;

export const ErrorMessage = styled.p`
  color: #f74646;
  min-width: max-content;
  padding: 0 5px;
`;
