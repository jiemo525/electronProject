import React from 'react';
import './index.scss';

class LeftMenu extends React.Component {
  render() {
    return (
      <div className='jiemo-left-menus'>
        <div className='jiemo-left-menu'>
          <div className='jiemo-left-menu-title'>推荐</div>
          <div className='jiemo-left-menu-item'>发现音乐</div>
          <div className='jiemo-left-menu-item'>私人FM</div>
          <div className='jiemo-left-menu-item'>LOOK直播</div>
          <div className='jiemo-left-menu-item'>视频</div>
          <div className='jiemo-left-menu-item'>朋友</div>
        </div>
        <div className='jiemo-left-menu'>
          <div className='jiemo-left-menu-title'>我的音乐</div>
          <div className='jiemo-left-menu-item'>本地音乐</div>
          <div className='jiemo-left-menu-item'>下载管理</div>
          <div className='jiemo-left-menu-item'>我的音乐网盘</div>
          <div className='jiemo-left-menu-item'>我的电台</div>
          <div className='jiemo-left-menu-item'>我的收藏</div>
        </div>
        <div className='jiemo-left-menu'>
          <div className='jiemo-left-menu-title'>创建的歌单</div>
        </div>
        <div className='jiemo-left-menu'>
          <div className='jiemo-left-menu-title'>收藏的歌单</div>
        </div>
      </div>
    )
  }
}

export default LeftMenu;