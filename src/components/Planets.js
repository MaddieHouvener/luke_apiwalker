import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Error from './Error';

const Planets = (props) => {
    const [planet, setPlanet] = useState({});
    const [isError, setIsError] = useState(false)

    const getPlanet = () => {
        axios.get(`https://swapi.dev/api/planets/${props.id}`)
            .then(response => {
                setPlanet(response.data);
            })
            .catch(err => {
                console.log(err);
                setIsError(true);
            });
    };

    useEffect(() => {
        getPlanet();
    }, [props.id]);

    const newPath = parseInt(props.id)

    console.log('isError', isError)
    if (isError) {
        return (
            <div>
                <Navbar formId={props.id} formSelect={'people'} />
                <Error />
            </div>
        );

    } else {
        return (
            <p>
                <Navbar formId={props.id} formSelect={'planets'} />
                { isNaN(newPath) ? <h1></h1> : <h1></h1>}
                <h2>{planet.name}</h2>
                <p>Climate: {planet.climate}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Surface Water: {planet.surface_water}</p>
                <p>Population: {planet.population}</p>
            </p>
        )
    }
}

export default Planets;
