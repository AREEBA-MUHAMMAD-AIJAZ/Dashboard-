import React from 'react';
import './Leadcompition.css'

const Leadcompition = () => {
  return (
    <div className='Leadcompition'>
      <div>
        <h6>LEAD OPPORTUNITIES</h6>
        <hr/>
        <p>
        Find counties with lots of leads and low
        competition. Subscribe to get exclusive
        leads for $75. Click on view all to see
        more opportunities by state.
        </p>
      </div>

      <table class="table">
  <thead>
    <tr>
      <th scope="col">COUNTY</th>
      <th scope="col">STATE</th>
      <th scope="col">PRICE</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <td>County Name</td>
      <td>State Name</td>
      <td>Bidding Price</td>
      <td>
        <button className='subs-country'>Subscribe to Country</button>
      </td>
    </tr>
   
  </tbody>
</table>
    


    </div>
  )
}

export default Leadcompition;
