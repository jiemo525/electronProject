import React from 'react';
import Header from '../Header';
import Content from '../Content';
import LeftMenu from '../LeftMenu';
import Footer from '../Footer';
import {connect} from '../utils/db.js';
import './index.scss'

class Home extends React.Component {
  render() {
    connect()
    return (
      <div className='jiemo-home'>
        <div className='jiemo-home-header'>
          <Header />
        </div>
        <div className='jiemo-home-content'>
          <div className='jiemo-home-left-menu'><LeftMenu /></div>
          <div className='jiemo-right-content'><Content /></div>
        </div>
        <div className='jiemo-home-footer'><Footer /></div>
      </div>
    )
  }
}

export default Home