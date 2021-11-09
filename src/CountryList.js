import React, { Component } from 'react';
import axios from 'axios';

class CountryList extends Component {
    constructor() {
        super()
        this.state = {
            mydata: []
        }
    }

    componentDidMount() {
        axios.get('https://restcountries.com/v3.1/all').then(response => {
            this.setState({ mydata: response.data })

        }).catch(error => {
            console.log(error);
        })
    }


    render() {
        const myList = this.state.mydata
        const CountryName = myList.map((mylist) => {
            return <li>{mylist.name.common}</li>
        })
      
        return (
            <div>
             <ul>
                 {CountryName}
             </ul>
              
            </div>
        );
    }
}

export default CountryList;