import './Style.css';

function Button(props) {
  return (
    <button
      type={props.type}
      className='btn btn-lg btn-primary w-75 mx-auto'
      onClick={props.handleSubmit}
    >
      {props.text}
    </button>
  );
}

export default Button;
