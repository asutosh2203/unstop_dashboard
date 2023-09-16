import './AssessmentList.css';
import { MdAdd } from 'react-icons/md';
import Assessment from '../Assessment/Assessment';
import assessmentList from './assessmentData';
const AssessmentList = () => {
  return (
    <div className='assessmentList'>
      <div className='newAssessment'>
        <div>
          <MdAdd />
        </div>
        <h3>New Assessment</h3>
        <p>
          From here you can add questions of multiple types like MCQs,
          subjective (text or paragraph)!
        </p>
      </div>
      {assessmentList.map((assessment) => {
        return (
          <Assessment
            title={assessment.title}
            jobType={assessment.type}
            date={assessment.date}
          />
        );
      })}
      <button>
        <MdAdd />
      </button>
    </div>
  );
};

export default AssessmentList;
