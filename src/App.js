import logo from './logo.svg';
//import './App.css';
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { Header, Segment,Table } from 'semantic-ui-react';

function App() {
  return (
    <div  >
    <Segment style={{borderRadius:90,backgroundColor:'#5993ff',   marginbottom: 25}}>
      <Header  textAlign='center' as='h1' style={{backgroundColor:"#01034d",
      color:"White",}}>
        <p> प&#2381;रथम&#2307; प&#2366;ठ&#2307;</p> 
      </Header>
    </Segment>
    
      <Header  textAlign='center' as='h3' style={{ borderRadius:90,backgroundColor:"#01034d",
      color:"White",}}>
        <p> अकारान्तरथम-पुँल्लिङ्गः</p> 
      </Header>
      <Header  textAlign='center' as='h2' style={{ borderRadius:5,backgroundColor:'#00bfff',
      color:"Black",}}>
        <p> पाठ का अनुवाद</p> 
      </Header>
    


    <Table position='' color='black' style={{textAlign:'center', width:820}} key='black' inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Sanskrit</Table.HeaderCell>
            <Table.HeaderCell>Hindi</Table.HeaderCell>
            <Table.HeaderCell>English</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>एषः कः ?</Table.Cell>
            <Table.Cell>यह क्या है?</Table.Cell>
            <Table.Cell>What is this?</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>एषः कः ?</Table.Cell>
            <Table.Cell>यह क्या है?</Table.Cell>
            <Table.Cell>What is this?</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>एषः कः ?</Table.Cell>
            <Table.Cell>यह क्या है?</Table.Cell>
            <Table.Cell>What is this?</Table.Cell>
          </Table.Row>
          
        </Table.Body>
      </Table>
      <div class="ui top attached tabular menu">
        <div class="active item">Tab</div>
        <div class=" item">Tab1</div>
        <div class=" item">Tab2</div>
      </div>
      <div class="ui bottom attached active tab segment">
        <p>asdasd</p>
        <p>asdasd</p>
      </div>

    </div>

  );
} 

export default App;
