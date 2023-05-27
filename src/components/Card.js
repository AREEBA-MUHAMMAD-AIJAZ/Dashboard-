import React from 'react';
import './Card.css';
import graph from '../assets/graph.png';
import Sidebar from './Sidebar';
import Heading from './Heading';
import Notificationbar from './Notificationbar';
import Carrds from './Carrds'

const Cards = () => {
  return (
    <div>
      
          <div class='container-fluid'>

                      <div class='row '>
                     
                      <Notificationbar/>
                      </div>
                    
                      <div class='row '>
                      <Heading />
                      <div style={{margin:90}}>
                     <Carrds />
                     </div>
                      <Sidebar />
                   
                     </div>
                     
                    
             
          </div>
    </div>
  );
}

export default Cards;