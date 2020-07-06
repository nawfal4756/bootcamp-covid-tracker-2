import React, { useState, useEffect } from 'react'

import styles from './ChartsGlobal.module.css';

import { chartData } from '../../API';
import { Line } from 'react-chartjs-2';

export const ChartsGlobal = () => {

    const [dailyData, setdailyData] = useState([]);

    useEffect( () => {
        const fetchAPI = async () => {
            setdailyData(await chartData())
        }

        fetchAPI();
    }, []);
    

    const lineChart= (
        dailyData.length
        ? (
            <Line 
                data = {{
                    labels: dailyData.map(({date}) => date),
                    datasets: [{
                        data: dailyData.map(({confirmed}) => confirmed),
                        label: 'Infected',
                        borderColor: '#0f0',
                        fill: true,
                    }, {
                        data: dailyData.map(({deaths}) => deaths),
                        label: 'Deaths',
                        borderColor: '#f00',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }],
                }}
            />) : null 
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}
