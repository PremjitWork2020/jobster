import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  .job-header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
  }
  .user-name {
    height: 60px;
    width: 60px;
    background: var(--primary-500);
    color: var(--white);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .user-name:first-letter {
    color: #000;
  }
  .job-header-info {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    h5,
    p {
      margin-bottom: 0;
    }
    p {
      margin: 0;
      color: var(--grey-400);
    }
  }
  .job-info {
    padding: 1rem 1.5rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    text-transform: capitalize;
    div {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 1rem;
      color: var(--grey-400);
    }
    span {
      margin-top: 0.1rem;
    }
    p {
      margin: 0;
      color: var(--grey-800);
      letter-spacing: var(--letterSpacing);
    }
    .interview {
      background-color: rgb(224, 232, 249);
      color: rgb(100, 122, 203);
      padding: 0.1rem 1.25rem;
      border-radius: var(--borderRadius);
    }
  }
  .job-footer {
    padding: 0 1.5rem;
    padding-bottom: 1rem;
    .btn-edit {
      background-color: var(--green-light);
      color: var(--green-dark);
      margin-right: 0.5rem;
    }
    .btn-delete {
      background-color: var(--red-light);
      color: var(--red-dark);
    }
  }

  @media (min-width: 1120px) {
    .job-info {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default Wrapper;
