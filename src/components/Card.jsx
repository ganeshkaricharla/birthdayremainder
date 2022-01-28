import './Style.css';

import Avatar from './Avatar';
import Details from './Details';
import Date from './Date';

function Card(props) {
  return (
    <li className='list-group-item px-0 banner'>
      <div className='row align-items-center'>
        <div className='col-auto'>
          <Avatar gender={props.details.gender} />
        </div>
        <div className='col ml--2'>
          <Details
            name={props.details.fullname}
            relation={props.details.relation}
            description={props.details.words}
          />
        </div>
        <div className='col-auto'>
          <Date
            month={props.details.month}
            day={props.details.day}
            year={props.details.year}
            showYear={props.details.showYear}
          />
        </div>
      </div>
    </li>
  );
}

export default Card;
