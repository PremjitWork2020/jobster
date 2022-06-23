import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--white);
      height: 100vh;
      width: 250px;
      margin-left: -250px;
      transition: var(--transition);
    }
    .show-sidebar {
      margin-left: 0;
      height: 100%;
    }
    .content {
      position: sticky;
      top: 0;
    }
    header {
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
      height: var(--nav-height);
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      padding: 1rem 0;
      padding-left: 2.5rem;
      color: var(--grey-500);
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      background: var(--grey-50);
      padding-left: 3rem;
      color: var(--grey-900);
    }
    .nav-link:hover .icon {
      color: var(--primary-500);
    }
    .icon {
      margin-right: 1rem;
      font-size: 1.5rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      color: var(--grey-900);
    }
    .active .icon {
      color: var(--primary-500);
    }
  }
`;

export default Wrapper;
