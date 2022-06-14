import styled from 'styled-components';

const Wrapper = styled.section`
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    transition: var(--transition);
  }
  .jobs-found {
    font-weight: 700;
  }
  @media (min-width: 992px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
    }
  }
`;

export default Wrapper;
