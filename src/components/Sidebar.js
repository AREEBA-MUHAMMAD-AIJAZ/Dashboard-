import React from 'react';
import logoo from '../assets/logo.png';
// import {FaTh,FaShoppingBeg,FaUserAlt,FaRegChartBar,FaBars} from "react-icons/fa";
import { FaCalendar} from 'react-icons/fa';

import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';
import { useState } from 'react';

const Sidebar = ({childarn}) => {
    const [isOpen , setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem =[
        {
            path:"/",
            name:"dashboard",
            icon:<FaCalendar />
        },
        {
            path:"/billing",
            name:"Billing",
            icon:<FaCalendar/>
        },
        {
            path:"/countries",
            name:"Countries",
            icon:<FaCalendar />
        },
        {
            path:"/leads",
            name:"Leads",
            icon:<FaCalendar/>
        },
    ]
  return (
   <div className="container-fluid">
       <div style={{width:isOpen ? "300px" : "50px" }} className="sidebar">
         <div className="top_section">
           <h1 style={{display:isOpen ? "block" : "none" }} className="logo"> hi </h1>
           <div style={{marginLeft:isOpen ? "50px" : "0px" }} className="bars">
              <FaCalendar onClick={toggle}/> 
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
         <main>{childarn}</main>
 
   </div>
  )
}

export default Sidebar;



