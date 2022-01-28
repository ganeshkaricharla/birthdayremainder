import { useEffect, useState } from 'react';
import './Style.css';

import Card from './Card';
import NavList from './NavList';
import Passkeyscreen from './Passkeyscreen';

function Today() {
  const pass = 'GANESH';
  const [birthdays, setBirthDays] = useState(null);

  const [isPermitted, setPermitted] = useState(false);
  const currDate = new Date().getDate();
  const currMonth = new Date().getMonth();
  async function getData() {
    const response = await fetch('http://localhost:3001/all');
    const data = await response.json();
    const todayBirths = data.filter(
      (birthday) => birthday.month === currMonth && birthday.day === currDate
    );
    setBirthDays(todayBirths);
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
                <h1>No birthdays today</h1>
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

export default Today;
