import styled from 'styled-components';

const Wrapper = styled.main`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.35rem;
  }
  form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  p,
  h3 {
    text-align: center;
  }
  .form-lable {
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    border: transparent;
    background: transparent;
    text-transform: capitalize;
    color: var(--primary-500);
    font-weight: 600;
  }
`;

export default Wrapper;
