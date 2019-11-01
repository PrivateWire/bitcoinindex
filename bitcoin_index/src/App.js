import React, {Component} from 'react';
import CurrencyCard from './components/CurrencyCard'
import './css/App.css';

class App extends Component {

    state = {
        currency:{},
    }

    componentDidMount() {
        this.getCurrencies();
    }

    getCurrencies = () => {
        this.request('GET', '/currentprice.json').then(currencies => {
            this.setState({currency: currencies})
        })
    }

    //Make Request
    request = (method, endPoint) => {
        let url = `https://api.coindesk.com/v1/bpi${endPoint}`;
        const options = {method: method, headers: new Headers({'Content-Type': 'application/json'})};
        return fetch(url, options).then(this.handleResponse).catch(this.handleError)
    }

    //Validate
    handleResponse = (res) => {
        if (res.status === 200) {
            return res.json()
        } else {
            let err = new Error(err.statusText);
            console.log('Something went wrong', err.message);
        }
    }

    //Catch error
    handleError =(err)=> {
        if(err) {
            console.log('Sorry something went wrong')
        }
    }

    render() {
        return <div><h3>Bitcoin Price Index</h3>
                <CurrencyCard currencies={this.state.currency}/></div>;
    }
}

export default App;
