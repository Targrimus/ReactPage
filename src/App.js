import logo from './logo.svg';
import './App.css';
import { Container} from 'react-bootstrap';
import Offcanvas from './components/Offcanvas';
import { useEffect, useState } from 'react';
import LoadingSpinner from './components/LoadingSpinner'
import Footer from './components/Footer'


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(()=>{

    fetch('./data.new.json')
    .then(result=>result.json())
    .then((data)=>{
      setIsLoading(false);
      setData(data)
      console.log(data);
    })
    .catch(e=>console.log(e));

  },[])


  return (
      <Container fluid className='p-0 App'> 

        <Offcanvas/>

        {isLoading && <LoadingSpinner/>}

        <Footer/>

      
      </Container>
  );
}

export default App;
