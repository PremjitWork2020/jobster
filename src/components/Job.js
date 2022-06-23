import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { deleteJob, setEditJob } from '../features/job/jobSlice';

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
  const date = moment(createdAt).format('MMM Do, YYYY');
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
          <p>{date}</p>
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
        <Link
          to="/add-job"
          className="btn btn-edit"
          onClick={() => {
            dispatch(
              setEditJob({
                editJobId: _id,
                position,
                company,
                jobLocation,
                jobType,
                status,
              })
            );
          }}
        >
          Edit
        </Link>
        <button
          className="btn btn-delete"
          onClick={() => {
            dispatch(deleteJob(_id));
          }}
        >
          Delete
        </button>
      </footer>
      {/* </div> */}
    </Wrapper>
  );
};

export default Job;
