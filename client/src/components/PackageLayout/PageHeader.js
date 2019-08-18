import React from 'react';
import { PageHeader } from 'antd';
import { withRouter } from 'react-router-dom';
// media assets
import logo from '../../static/images/logoa.png';

// styles
import '../../static/css/Navbar.scss';
 class PageHeaderBar extends React.Component {
   render(){
  return (
    <div className="grow">
        <PageHeader onBack={() => this.props.history.goBack()} title={<div><img src={logo} alt="Logo" width={130}/></div>}/>
      
    </div>
  );
   }
}
export default withRouter(PageHeaderBar); 
