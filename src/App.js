import React from 'react';
import styles from './App.module.css';

import ChartPicker from './components/ChartPicker/ChartPicker';
import Chart from './components/Charts/Chart';
import CardGroup from './components/Cards/CardGroup';

import {fetchData,fetchCountries} from './api/index';
class App extends React.Component {
  
  state= {
    data : [],
    country:'' 
  }
  async componentDidMount(){
    const fetchedData =await fetchData();
    this.setState({data : fetchedData,country:''})
  
  }


  handleCountryChange = async (countryPick) => {
    console.log(countryPick);
    this.setState({data :this.state.data, country:countryPick});
  //  console.log(this.state);
  }

  render(){
    const {data} = this.state;
    console.log(data); 
  return (
    <div className={styles.container}>
      <CardGroup data = {data}/>
      <ChartPicker handleCountryChange={this.handleCountryChange} />
      <Chart country ={this.state.country}/>

    </div>
  );
}
}

export default App;
