import styled from 'styled-components';

export const Button = styled.button`
  width: 260px;
  height: 4rem;
  border: 0;
  border-radius: 2rem;
  background: ${({ theme }) => theme.colors.yellow[500]};
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s ease-in;

  &:hover {
    filter: brightness(0.8);
  }
`;
