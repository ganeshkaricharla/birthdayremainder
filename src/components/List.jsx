import { useEffect, useState } from 'react';
import './Style.css';

import NavList from './NavList';
import Card from './Card';
import Passkeyscreen from './Passkeyscreen';
function List() {
  const pass = 'GANESH';
  const [birthdays, setBirthDays] = useState(null);

  const [isPermitted, setPermitted] = useState(false);
  async function getData() {
    const response = await fetch('http://localhost:3001/all');

    const data = await response.json();
    const sorted = data.sort((a, b) => {
      return new Date(2000, a.month, a.day) - new Date(2000, b.month, b.day);
    });
    setBirthDays(sorted);
  }
  function handlePassword(event) {
    if (event.target.value === pass) {
      setPermitted(true);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  if (isPermitted) {
    return (
      <div>
        <NavList />
        <div className='card'>
          <div className='card-body'>
            <ul className='list-group list-group-flush my--3'>
              {birthdays ? (
                birthdays.map((birthday) => (
                  <Card details={birthday} key={birthday.fullname} />
                ))
              ) : (
                <h1>No birthdays in list</h1>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <NavList />
        <Passkeyscreen handlePassword={handlePassword} />
      </div>
    );
  }
}

export default List;
