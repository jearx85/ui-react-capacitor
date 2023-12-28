import React from 'react';
import { Sidebar, NavBar, MainContent, RightView } from '../../components/index';

import './HomePage.css'

export default function HomePage() {
  return (
    <>
        <main className='col-10'>
          <NavBar />
          <div className="row">
            <Sidebar />
          <MainContent />
          </div>
        </main>
        <RightView/>
    </>
  )
}
