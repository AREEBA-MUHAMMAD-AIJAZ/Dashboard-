import React from 'react';
import Leadtable from '../components/Leadtable';
import Budget from '../components/Budget';
import Creditsummary from '../components/Creditsummary';
import Leadcompition from '../components/Leadcompition';
import Recentlead from '../components/Recentlead';
import Card from '../components/Card';

const Dashboard = () => {
  return (
    <div>
      <Card />
      <Leadtable/>
      <Budget/>
      <Leadcompition/>
      <Creditsummary/>
      <Recentlead/>
    </div>
  )
}

export default Dashboard;