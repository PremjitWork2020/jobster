import styled from 'styled-components';
const Wrapper = styled.section`
  .form {
    margin-top: 0;
    width: 100%;
    max-width: 100%;
  }
  .form-input,
  .form-select,
  .btn-block {
    height: 35px;
  }
  .btn-block {
    align-self: end;
    margin-top: 1rem;
  }
  .form-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
  .form-row {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
    }
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
