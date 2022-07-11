import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ResidentInfo = ({locat}) => {

    const [character, setCharacter]=useState({});

    useEffect(()=>{
        axios.get(locat)
        .then(res => setCharacter(res.data))
    },[])

    return (
            <div className='card'>           
            <li>{character.name}</li>
            <img src={character.image} alt="" />
            <p>Status: {character.status}</p>
            <p>Origin: {character.origin?.name}</p>
            <p>Episode: {character.episode?.length}</p>
            </div>
    );
};

export default ResidentInfo;