import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries,setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data=>setCountries(data))
    },[])
    return (
        <div >
            <h1 >Hello from Countries</h1>
            <h4>Countries:{countries.length}</h4>
            
            <div className='countries-container'>
                {
                countries.map(country => <Country
                    country={country}key={country.cca3}
                    // name={country.name.common}
                    // area={country.area}
                    // population={country.population}
                    // region={country.region}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;