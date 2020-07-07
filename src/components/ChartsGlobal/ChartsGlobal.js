import React, { useState, useEffect } from 'react'

import styles from './ChartsGlobal.module.css';

import { chartData } from '../../API';
import { Line, Bar } from 'react-chartjs-2';
import { Switch } from '@material-ui/core';

export const ChartsGlobal = ({data: {Global}}) => {

    const [dailyData, setdailyData] = useState([]);
    const [switchControl, setSwitchControl] = useState(true);

    useEffect( () => {
        const fetchAPI = async () => {
            setdailyData(await chartData())
        }

        fetchAPI();
    }, []);
    
    console.log(Global);

    const lineChart= (
        dailyData.length
        ? (
            <Line 
                data = {{
                    labels: dailyData.map(({date}) => date),
                    datasets: [{
                        data: dailyData.map(({confirmed}) => confirmed),
                        label: 'Infected',
                        borderColor: '#00f',
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

    const barChart = (
        Global
        ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [Global.NewConfirmed, Global.NewRecovered, Global.NewDeaths],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: 'Daily Global Data' },
                }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            Bar Chart <Switch 
                className={styles.switch}
                checked={switchControl}
                onClick={() => setSwitchControl(!switchControl)}
            /> Line Chart

            <hr />

            <div className={styles.charts}>
                {switchControl ? lineChart : barChart}
            </div>
        </div>
    )
}
