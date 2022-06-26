

import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        

      </header>


      <body>

        <Container fluid className="appBody vh-100">


          <h1 className='pt-5'>Elegant</h1>

          <h2 className='pt-5 pb-5'>Custom Tailored Suits Of The Highest Quality</h2>


          <a href='#home' >
            <Button variant="danger" size="lg">Start Measurement</Button>{' '}
          </a>
        </Container>
      </body>
    </div>
  );
}

export default App;
