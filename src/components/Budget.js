import React from 'react';
import './Budget.css';

const Budget = () => {
  return (
    <div className='Budget'>
            <div>
                <div className='top-head'>
                <h6>THIS MONTH </h6>
                <h6>ACCOUNT CREDITS: $0 </h6>
                </div>
                <div className='top-head'>
                <h6>Current Month Spending</h6>
                <h6>Budget</h6> 
                </div>
            </div>
        <div class="table-group-divider">
            <hr/>
            <div  className='butn-budget' >
             <a href='#'> Set Budget </a>
            </div>
           
        </div>

  </div>
  )
}

export default Budget
