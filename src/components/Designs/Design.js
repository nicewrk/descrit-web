import React from 'react';
import logo from './logo.svg';
import './Design.css';

class Design extends React.Component {
	render() {
    const {designId} = this.props.match.params;
    return (
      <div className="design">
        <p>Design ID: {designId}</p>
        <img alt="logo" src={logo} className="app-logo"/>
        <div className="design-footer">
          <div className="design-critique-count">
            {this.props.critiqueCount}
          </div>
          <div className="design-tags">
            logo, web, UI
          </div>
          <div className="design-like-count">
            ❤ 23
          </div>      
        </div>
      </div>
    );
  }
}

export default Design;
