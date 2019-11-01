import React from 'react';
import { Icon } from 'antd';
import './index.scss';

const electron = window.electron;
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: false,
    }
  }

  clickHandle = (type) => {
    if (type === 'minus') {
      electron.remote.getCurrentWindow().minimize();
    } else if (type === 'max') {
      electron.remote.getCurrentWindow().maximize();
      this.setState({ isFullScreen: true });

    } else if (type === 'unmax') {
      electron.remote.getCurrentWindow().unmaximize();
      this.setState({ isFullScreen: false });
    } else {
      electron.remote.getCurrentWindow().close();
    }

  }
  render() {
    const { isFullScreen } = this.state;
    return (
      <div className='jiemo-header'>
        <div className='jiemo-logo'><img src={require('../../src/wangyi.png')} />芥末音乐</div>
        <Icon
          type="minus"
          onClick={this.clickHandle.bind(this, 'minus')}
          className='jiemo-icon-minus'
        />
        {
          isFullScreen ?
            <Icon type="switcher"
              onClick={this.clickHandle.bind(this, 'unmax')}
              className='jiemo-icon-max'
            /> :
            <Icon type="border"
              onClick={this.clickHandle.bind(this, 'max')}
              className='jiemo-icon-max'
            />
        }

        <Icon
          type="close"
          onClick={this.clickHandle.bind(this, 'close')}
          className='jiemo-icon-close'
        />
      </div>
    )
  }
}

export default Header;