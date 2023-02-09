import React, {useState, Component} from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

const App = (props) => {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout> 
    </div>
  );
}

export default App;
