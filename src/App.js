import logo from './logo.svg';
//import './App.css';
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { Header, Image ,Segment } from 'semantic-ui-react';

function App() {
  return (
    <div>
    <Segment>
      <Header textAlign='center' as='h1'>
      <Image src='https://sm.mashable.com/t/mashable_in/feature/t/the-oceans/the-oceans-absorbed-an-unfathomable-amount-of-heat-this-deca_e3zb.960.png'>
        <p> प&#2381;रथम&#2307; प&#2366;ठ&#2307;</p> 
        </Image>
      </Header>
      </Segment>
    </div>
  );
} 

export default App;
