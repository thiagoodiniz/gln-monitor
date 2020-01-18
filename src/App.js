import React from 'react';
import './App.scss';
import Header from './header/Header';
import CardList from './card/card-list/CardList';
import SideMenu from './side-menu/SideMenu';

function App() {
  return (
    <div className="app">

      <div className="app__content">
        <SideMenu></SideMenu>

        <div className="app__content--center">
          <Header></Header>
          <CardList></CardList>
        </div>

      </div>
    </div>
  );
}

export default App;
