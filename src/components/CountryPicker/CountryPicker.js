import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';

import { withRouter } from 'react-router-dom';

import { fetchCountries } from '../../API';

import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
            
        }

        fetchAPI();
    }, [])

    const temp = fetchedCountries.sort();


    return (
            <FormControl className={styles.container}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {temp.map((country, i) => {
                        return <option key={i} value={country}>{country}</option>;
                    })}
                </NativeSelect>
            </FormControl>
    );
};

export default withRouter(CountryPicker);
