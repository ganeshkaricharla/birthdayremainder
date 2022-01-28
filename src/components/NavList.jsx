import './Style.css';

function NavList() {
  return (
    <ul className='list'>
      <li>
        <a href='/'>Today</a>
      </li>
      <li>
        <a href='/list'>List</a>
      </li>
      <li>
        <a href='/add'>Add</a>
      </li>
    </ul>
  );
}

export default NavList;
