import './Style.css';

function Input(props) {
  return (
    <div className='input-group my-2 mx-auto w-75'>
      <span className='input-group-text w-25 bg-light'>{props.label}</span>
      <input
        type={props.type}
        className='form-control'
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.handleChange}
        required
      />
    </div>
  );
}

export default Input;
