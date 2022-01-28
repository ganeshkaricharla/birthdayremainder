import './Style.css';

function Textarea(props) {
  return (
    <div className='input-group  my-2 mx-auto w-75'>
      <span className='input-group-text w-25'>{props.label}</span>
      <textarea
        onChange={props.handleChange}
        className='form-control'
        name={props.name}
        aria-label='textarea'
        rows='1'
      ></textarea>
    </div>
  );
}

export default Textarea;
