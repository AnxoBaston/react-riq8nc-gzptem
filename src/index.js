import React from 'react';
import ReactDOM from 'react-dom/client';
import { ExperimentalChoroplethChart } from '@carbon/charts-react';
import data from './../data/nuts2.js';
import options from './options.js';
import '@carbon/charts-react/styles.css';

class App extends React.Component {
  state = {
    data,
    options,
  };

  render = () => (
    <ExperimentalChoroplethChart
      data={this.state.data}
      options={this.state.options}
    ></ExperimentalChoroplethChart>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
