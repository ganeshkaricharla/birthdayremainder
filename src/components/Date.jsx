import './Style.css';

function Date(props) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <h3 className='badge bg-dark datebadge'>
      {props.day},{months[props.month]} {props.showYear && props.year}
    </h3>
  );
}

export default Date;
