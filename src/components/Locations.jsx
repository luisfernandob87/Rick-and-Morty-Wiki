import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ResidentInfo from './ResidentInfo';

const Locations = () => {

    const [location, setLocation] = useState({});
    const [searchLocation, setSearchLocation] = useState("");

    useEffect(()=>{
        const locationRandom = Math.floor(Math.random()*125)+1;
        axios.get(`https://rickandmortyapi.com/api/location/${locationRandom}`)
        .then(res => setLocation(res.data))
    },[])

    console.log(location);

    const getLocation = () =>{
        axios.get(`https://rickandmortyapi.com/api/location/${searchLocation}`)
        .then(res => setLocation(res.data))
    };


    return (
        <div>
            <h1>Rick and Morty Wiki</h1>
            <input type="text" value={searchLocation} onChange={(e)=>setSearchLocation(e.target.value)}/>
            <button onClick={getLocation}>Search</button>
            <div className='location'>
            <h2>Name: {location.name}</h2>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
            <p>Residents: {location.residents?.length}</p>
            </div>
            <ul>
                {location.residents?.map((locat)=>(
                    <ResidentInfo locat={locat} key={locat}/>
                ))}
            </ul>
        </div>
    );
};

export default Locations;