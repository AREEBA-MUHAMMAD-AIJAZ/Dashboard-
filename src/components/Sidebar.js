import React from 'react';
import './Heading.css';
import logo from '../assets/logo.png'
import { FaToggleOn , FaHome ,FaBuilding , FaMale , FaPeopleCarry } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
// import Image from '../https://designstudioagency.com/wecanbuyhousefastcash/newadmin/index.html?fbclid=IwAR0HqgsUque9tuSUGFWYUBBjcZ2hrmqkoqnLuen4JP3gZ5fVhHRXsuqdy0Q';
import './Sidebar.css';
import { useState } from 'react';

const Sidebar = ({childarn}) => {
    const [isOpen , setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem =[
        {
            path:"/",
            name:"dashboard",
            icon:<FaHome />
        },
        {
            path:"/billing",
            name:"Billing",
            icon:<FaMale/>
        },
        {
            path:"/countries",
            name:"Countries",
            icon:<FaBuilding />
        },
        {
            path:"/leads",
            name:"Leads",
            icon:<FaPeopleCarry/>
        },
    ]
  return (
   <div className="container-fluid">
       <div style={{width:isOpen ? "300px" : "50px" }} className="sidebar">
         <div className="top_section">
           <h1 style={{display:isOpen ? "block" : "none" }} className="logo"> <img src={logo} /> </h1>
           <div style={{marginLeft:isOpen ? "50px" : "0px" }} className="bars">
              <FaToggleOn size={20}onClick={toggle}/> 
           </div>
         </div>
       
         {menuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active" >
              <div className="icon">{item.icon}</div>
              <div style={{display:isOpen ? "block" : "none" }} className="link_text">{item.name}</div>  
            </NavLink>
        ))
      } 
      </div>
      <div>
     
      </div>
         <main>{childarn}</main>
 
   </div>
  )
}

export default Sidebar;
