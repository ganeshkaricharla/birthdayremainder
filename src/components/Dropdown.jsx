import './Style.css';

function Option(props) {
  return <option value={props.value}>{props.value}</option>;
}

function Dropdown(props) {
  return (
    <div className='input-group my-2 mx-auto w-75'>
      <span className='input-group-text w-25 bg-light'>{props.label}</span>
      <select
        className='form-select'
        aria-label='Default select example'
        name={props.name}
        onChange={props.handleChange}
        required
      >
        {props.options.map((option) => (
          <Option value={option} key={option} />
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
