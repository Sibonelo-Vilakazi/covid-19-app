import React,{useState,useEffect} from 'react';
import {Grid, Card ,CardContent, Typography} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
const CardGroup = ({data:{confirmed, recovered,deaths,lastUpdate}}) =>{
    // confirmed recovered deaths
    //const [data,setData] = useState({});
    console.log(confirmed);
    if(!confirmed)
        return 'Loading....';  
    return(
        <div className={styles.container}>
            <Grid container spacing ={3} justifyContent="center">
                <Grid  item component={Card} xs={12} md={3} className={cx(styles.card, styles.infections)}>
                    <CardContent>
                        <Typography color ="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint ="h5" >
                        <CountUp 
                        start={0} 
                        end={confirmed.value} 
                        duration ={2.5}
                        separator=','
                        /></Typography>
                        <Typography color ="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint ="body2" >Number of Infections of covid 19</Typography>
                        
                    </CardContent>
                </Grid>
                <Grid  item component={Card} xs={12} md={3} className={cx(styles.card, styles.recoveries)}>
                    <CardContent>
                        <Typography color ="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varaint ="h5" >
                        <CountUp 
                        start={0} 
                        end={recovered.value} 
                        duration ={2.5}
                        separator=','
                        />
                        </Typography>
                        <Typography color ="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint ="body2" >Number of Recoveries of covid 19</Typography>
                        
                    </CardContent>
                </Grid>
                <Grid  item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color ="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varaint ="h5" >
                        <CountUp 
                        start={0} 
                        end={deaths.value} 
                        duration ={2.5}
                        separator=','
                        />
                        </Typography>
                        <Typography color ="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint ="body2" >Number of deaths of covid 19</Typography>
                        
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default CardGroup;