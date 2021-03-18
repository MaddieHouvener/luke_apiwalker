import React, { useState } from 'react';
import { navigate } from '@reach/router';

const Navbar = (props) => {
    const [formSelect, setFormSelect] = useState(props.formSelect);
    const [formId, setFormId] = useState(props.formId);

    const submitForm = e => {
        e.preventDefault();
        // Route to correct route based on form data 
        navigate(`/${formSelect}/${formId}`);
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="select">Search For</label>
            <select value={formSelect} name="select" id="select" onChange={e => setFormSelect(e.target.value)}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <br />
            <label htmlFor="id">ID:</label>
            <input value={formId} type="number" name="id" onChange={e => setFormId(e.target.value)}></input>
            <input type="submit" value="Search"></input>
        </form>
    );
}

export default Navbar;