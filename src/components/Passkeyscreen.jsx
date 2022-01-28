function Passkeyscreen(props) {
  return (
    <div className='passkey-container'>
      <input
        type='password'
        name='passkey'
        className='passkey-input'
        onChange={props.handlePassword}
        placeholder='ENTER MASTER KEY'
      />
    </div>
  );
}

export default Passkeyscreen;
