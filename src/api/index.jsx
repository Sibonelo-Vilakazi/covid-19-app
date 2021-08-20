import axios from 'axios';

const url ='https://covid19.mathdro.id/api';

export const fetchData = async (country)=>{
    try{
        let cUrl= url;
        if(country){
            cUrl = `${url}/countries/${country}`;
        }
        const {data : {confirmed, recovered, deaths , lastUpdate}} = await axios.get(cUrl);
        
        const modifiedData ={
            confirmed,
            recovered,
            deaths,
            lastUpdate
        } 
        return modifiedData;
    }catch(error){
        console.log(error);
    }
    
}


export const fetchCountries = async () => {

    try{
        const  {data:{countries}} = await axios.get(url+"/countries");
        
        return countries.map((i) => i.name);
    }catch(error){
        console.log(error) 
    }
}

export const fetchChart = async () =>{

    try{
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed : dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            date : dailyData.reportDate
        }));
        return modifiedData;
    }catch(error){
        console.log(error);
    }
}