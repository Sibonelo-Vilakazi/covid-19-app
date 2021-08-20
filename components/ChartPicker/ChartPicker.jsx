import React,{useState,useEffect} from 'react';
import {fetchCountires, fetchCountries} from '../../api/index';
import { FormControl, NativeSelect } from '@material-ui/core';
const ChartPicker = ({handleCountryChange}) =>{
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        const fetchAPI = async () =>{
        const fetchCountriesData = await fetchCountries();
        setCountries(fetchCountriesData);
        }
        fetchAPI();
    },[]);
    
    return(
        <div>
            <FormControl>
                <NativeSelect onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value =''>global</option>
                {countries.map((country,i) => <option key ={i} value={country}> {country} </option> )} 
                </NativeSelect>
            </FormControl>
            </div>
    );
}

export default ChartPicker;