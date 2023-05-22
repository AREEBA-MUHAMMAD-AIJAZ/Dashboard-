import React from 'react';
import './Card.css';
import graph from '../assets/graph.png';

const Card = () => {
  return (
    <div >
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <button>Hello</button>
        <h1 class="card-title">$100,000</h1>
        <p class="card-text">Your bank balance</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <h1 class="card-title">80</h1>
        <p class="card-text">New Clients</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <h1 class="card-title">$3,55,650</h1>
        <p class="card-text">This week's card spending</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <h5 class="card-title">400</h5>
        <p class="card-text">Top Counties</p>
      </div>
    </div>
  </div>
  <div class="col-span-2">
    <div class="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        {/* <h5 class="card-title">Card title</h5>
        <p class="card-text"> longer.</p> */}
       <img src={graph}/>
//       </div>
//     </div>
//   </div>
</div>
    </div>
  );
};

export default Card;
