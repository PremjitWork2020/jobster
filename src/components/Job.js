import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import { useDispatch } from 'react-redux';

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {/* <div className="job"> */}
      <header className="job-header">
        <div className="user-name">
          <p>{company ? company.split('')[0] : 'Z'}</p>
        </div>
        <div className="job-header-info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <section className="job-info">
        <div>
          <span>
            <FaLocationArrow />
          </span>
          <p>{jobLocation}</p>
        </div>
        <div>
          <span>
            <FaCalendarAlt />
          </span>
          <p>{createdAt}</p>
        </div>
        <div>
          <span>
            <FaBriefcase />
          </span>
          <p>{jobType}</p>
        </div>
        <div>
          <p className="interview">{status}</p>
        </div>
      </section>
      <footer className="job-footer">
        <button className="btn btn-edit">Edit</button>
        <button className="btn btn-delete">Delete</button>
      </footer>
      {/* </div> */}
    </Wrapper>
  );
};

export default Job;
