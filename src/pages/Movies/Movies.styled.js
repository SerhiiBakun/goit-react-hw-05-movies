import styled from 'styled-components';

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  outline: none;
`;

export const MovieList = styled.ul`
  list-style: none;
  margin: 2rem 0;
  padding: 0;
`;

export const MovieItem = styled.li`
  margin: 1rem 0;
`;

export const MovieLink = styled.a`
  display: block;
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
