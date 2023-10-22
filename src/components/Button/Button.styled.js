import styled from "styled-components";

export const ButtonLoadMore = styled.button`
  border: none;
  outline: none;
  background-color: #4c6ef5;
  color: #fff;
  padding: 12px 36px;
  border-radius: 4px;
  font-weight: 400;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s;

  &:hover {
    background-color: #3b5bdb;
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const ButtonLoadMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
