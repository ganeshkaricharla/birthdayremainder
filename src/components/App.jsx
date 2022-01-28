import './Style.css';

import Today from './Today';
import Form from './Form';
import List from './List';
import Header from './Header';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />} exact />
          <Route path='/today' element={<Today />} exact />
          <Route path='/list' element={<List />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
