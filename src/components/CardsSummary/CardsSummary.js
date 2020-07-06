import React from 'react';
import cx from 'classnames';
import CountUp from 'react-countup';
import {Card, CardContent, Grid, Typography} from '@material-ui/core';

import Moment from 'moment';

import styles from './CardsSummary.module.css';

const CardsSummary = ({data: {Global, Date}}) => {

    var temp = Date
    var update = Moment(temp).format('Do MMM YY, h:mm a')


    if (!Global) {
        return ("Loading...")
    }
    else {

        return (
            <div className={styles.container}>
                <Grid container spacing={3} justify="center">

                    <Grid item component={Card} xs={12} md={3} className={cx(styles.cards, styles.infected)}>
                        <CardContent>
                            <Typography>Today Confirmed Cases</Typography>
                            <Typography variant="h3">
                                <CountUp 
                                    start={0}
                                    end={Global.NewConfirmed}
                                    duration={3}
                                    separator= ','
                                />
                            </Typography>
                            <Typography color="textSecondary">{update}</Typography>
                            <Typography color="textSecondary">New Infected Cases Globally in One Day</Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={3} className={cx(styles.cards, styles.recovered)}>
                        <CardContent>
                            <Typography>Today Recovered Cases</Typography>
                            <Typography variant="h3">
                                <CountUp 
                                    start={0}
                                    end={Global.NewRecovered}
                                    duration={3}
                                    separator= ','
                                />
                            </Typography>
                            <Typography color="textSecondary">{update}</Typography>
                            <Typography color="textSecondary">New Recovered Cases Globally in One Day</Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={3} className={cx(styles.cards, styles.deaths)}>
                        <CardContent>
                            <Typography>Today Deaths</Typography>
                            <Typography variant="h3">
                                <CountUp 
                                    start={0}
                                    end={Global.NewDeaths}
                                    duration={3}
                                    separator= ','
                                />
                            </Typography>
                            <Typography color="textSecondary">{update}</Typography>
                            <Typography color="textSecondary">New Deaths Cases Globally in One Day</Typography>
                        </CardContent>
                    </Grid>

                


                    <Grid item component={Card} xs={12} md={3} className={cx(styles.cards, styles.infected)}>
                        <CardContent>
                            <Typography>Total Confirmed Cases</Typography>
                            <Typography variant="h3">
                                <CountUp 
                                    start={0}
                                    end={Global.TotalConfirmed}
                                    duration={3}
                                    separator= ','
                                />
                            </Typography>
                            <Typography color="textSecondary">{update}</Typography>
                            <Typography color="textSecondary">Total Infected Cases Globally</Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={3} className={cx(styles.cards, styles.recovered)}>
                        <CardContent>
                            <Typography>Total Recovered Cases</Typography>
                            <Typography variant="h3">
                                <CountUp 
                                    start={0}
                                    end={Global.TotalRecovered}
                                    duration={3}
                                    separator= ','
                                />
                            </Typography>
                            <Typography color="textSecondary">{update}</Typography>
                            <Typography color="textSecondary">Total Recovered Cases Globally</Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={3} className={cx(styles.cards, styles.deaths)}>
                        <CardContent>
                            <Typography>Total Deaths</Typography>
                            <Typography variant="h3">
                                <CountUp 
                                    start={0}
                                    end={Global.TotalDeaths}
                                    duration={3}
                                    separator= ','
                                />
                            </Typography>
                            <Typography color="textSecondary">{update}</Typography>
                            <Typography color="textSecondary">Total Deaths Globally</Typography>
                        </CardContent>
                    </Grid>
                    
                </Grid>
            </div>
        )
    }
}

export default CardsSummary;