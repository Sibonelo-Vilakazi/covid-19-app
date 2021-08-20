import React,{useState,useEffect} from 'react';
import {fetchChart} from '../../api/index';
import {Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
import {fetchData} from '../../api/index';
const Chart = ({country}) =>{
    const [dailyData , setdailyData] = useState([]);
    useEffect(()=>{
        const fetchAPI = async(checkCountry) =>{
            
            if (checkCountry!==""){

                setdailyData(await fetchData(checkCountry));
            }else{
                setdailyData(await fetchChart());
            }
            
            
            
        }
        
        fetchAPI(country);
    },[country])
    console.log(dailyData);
    const lineChart =(
        dailyData[0] ?
        
        (<Line height ={180} data ={{
            labels :dailyData.map((d) => d.date),
            datasets: [
                {
                data :dailyData.map((d) => d.confirmed),
                label: 'Infected',
                borderColor : '#3333ff',
                fill:true
                },{
                data :dailyData.map((d) => d.deaths),
                label: 'Deaths',
                borderColor : 'rgba(225,0,0,0.5)',
                fill:true
                }
                
            ], 
        }
        }
        />): null
    );
    
    const barChart = (
        dailyData.confirmed ?
        <Bar
            data={
                {
                    labels:['Infected','Recovered','Deaths'],
                    datasets:[
                        {
                            label:'People',
                            backgroundColor:[ 'rgba(255,0,0,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(0,0,255,0.5)'],
                            data:[dailyData.confirmed.value,dailyData.recovered.value,dailyData.deaths.value]
                        }
                    ]
                }
            }
            options={{
                legend: { display : false},
                title:{display :true ,text:`Current state in ${'country'}`},
            
            }} 
        /> : null
    )


    return(
        <div className={styles.container}>
        {country ==='' ? lineChart : barChart}
        </div>
    );
}

export default Chart;