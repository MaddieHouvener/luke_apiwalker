import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Error from './Error';

const People = (props) => {
    const [people, setPeople] = useState({});
    const [isError, setIsError] = useState(false)

    const getPeople = () => {
        axios.get(`https://swapi.dev/api/people/${props.id}`)
        .then(response => {
            setPeople(response.data);
            setIsError(false);
        })
        .catch(err => {
            setIsError(true);
        }); 
    };
    
    useEffect(() => {
        getPeople();
    }, [props.id]);
    
    console.log('iserror=', isError)
    if (isError) {
        return (
            <div>
                <Navbar formId={props.id} formSelect={'people'} />
                <Error />
            </div>
        );
    } else {
        return (
            <div>
                <Navbar formId={props.id} formSelect={'people'} />
                <h2>{people.name}</h2>
                <p>Height: {people.height}</p>
                <p>Mass: {people.mass}</p>
                <p>Hair Color: {people.hair_color}</p>
                <p>Skin Color: {people.skin_color}</p>
            </div>
        );
    }
}

export default People;
