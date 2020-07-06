import React from 'react';
import styles from './App.module.css';

// Import Components
import CardsSummary from './components/CardsSummary/CardsSummary';
import MenuBar from './components/MenuBar/MenuBar';
import CountryPicker from './components/CountryPicker/CountryPicker';
import { CovidMap } from './components/CovidMap/CovidMap'

import { fetchData } from './API';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
    state = {
        data: {},
        country: "",
    };
    
    async componentDidMount() {
        const fetchedData = await fetchData();


        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({data, country: country})
    } 

    render() {
        const { data } = this.state

        return (
            <Router>
                <div className={styles.container}>
                    <MenuBar />
                    <Switch>
                    <Route 
                        path="/" 
                        exact 
                        component={ () => <CardsSummary data={data} />} 
                    />                           
                    <Route 
                        path="/country" 
                        component={ () => <CountryPicker handleCountryChange={this.handleCountryChange} />} 
                    />
                    <Route 
                        path="/map"
                        component={ () => <CovidMap />}
                    />
                    </Switch>
                </div>
            </Router>
            
        )
    }
}

export default App;