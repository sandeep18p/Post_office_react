import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import { useState } from 'react';
import PostOffice from './Components/PostOffice';

function App() {
  const [data, setData] = useState(false);
  const [pincode, setPincode] = useState('');
  const [show,setShow]=useState(null);

  return (
    <>
      {data === false ? <Search setData={setData} pincode={pincode} setPincode={setPincode} setShow={setShow}/> : <PostOffice pincode={pincode} show={show} setShow={setShow}></PostOffice>}
    </>
  );
}

export default App;
