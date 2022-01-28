import './Style.css';

function Details(props) {
  return (
    <div className='details'>
      <h3 className='mb-0'>
        {props.name}
        <span className='badge rounded-pill bg-success relation'>
          {' '}
          {props.relation}
        </span>
      </h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Details;
