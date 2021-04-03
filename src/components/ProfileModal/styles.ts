import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  height: 25rem;
  background-color: var(--purple);
  border-radius: 0.5rem;
  box-shadow: 2px 8px 8px 2px rgba(0, 0, 0, 0.25); 
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
  h1 {
    font-size: 1rem;
    color: var(--background);
    line-height: 1.5rem;
  }

  div {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;

    button {
        padding: 1rem 4rem;
        font-size: 1rem;
        color: var(--shape);
        background-color: var(--purple-light);

        &:hover {
          background-color: var(--purple-mid);
        }

      & + button {
        margin-top: 1rem;
      }
    }
  }
`;
