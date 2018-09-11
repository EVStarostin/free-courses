import React, { Component } from 'react';
import Header from '../Header';
import Menu from '../Menu';
import MainPage from '../MainPage';
import Footer from '../Footer';
import './style.css';

import categories from '../../../mock/categories';
import articles from '../../../mock/articles';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    
    this.state = {focused: 0};
  }

  handleClick(index, e){
    e.preventDefault();
    this.setState({focused: index});
  }

  render() {
    const { focused } = this.state;
    const menuItems = [{id: 0, name: 'Главная'}].concat(categories);
    return (
      <div className="Layout">
        <div className="wrapper">
          <Header />
          <Menu items={menuItems} handleClick={this.handleClick} focused={focused} />
          <MainPage articles={articles} focused={focused} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
