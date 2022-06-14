import { useState } from 'react';
import Wrapper from '../assets/wrappers/SearchContainer';
import { FormRow, FormRowSelect } from '../components';
// import Wrapper from '../assets/wrappers/DashboardFormPage';

const initialValues = {
  search: '',
  jobTypeOptions: ['all', 'full-time', 'part-time', 'remote', 'internship'],
  jobType: 'all',
  statusOptions: ['all', 'interview', 'declined', 'pending'],
  status: 'all',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
  sort: 'latest',
};

const SearchContainer = () => {
  const [filter, setFilter] = useState(initialValues);

  const handleFilterChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //   dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>Search Form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={filter.search}
            handleChange={handleFilterChange}
          />
          <FormRowSelect
            name="status"
            value={filter.status}
            list={filter.statusOptions}
            handleChange={handleFilterChange}
          />
          <FormRowSelect
            labelText="job type"
            name="jobType"
            value={filter.jobType}
            list={filter.jobTypeOptions}
            handleChange={handleFilterChange}
          />
          <FormRowSelect
            name="sort"
            value={filter.sort}
            list={filter.sortOptions}
            handleChange={handleFilterChange}
          />
          <button className="btn btn-block btn-danger" onClick={handleSubmit}>
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
