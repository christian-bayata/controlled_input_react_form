import React, { useState, useEffect } from 'react';

const ControlledInputs = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('')
    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName && email) {
            const person = {id: new Date().getTime().toString(), firstName, email};
            console.log(person);
            setPeople((people) => {
                return [...people, person];
            });
            setFirstName('');
            setEmail('');
        } else {
            console.log('Please input name or email')
        }
    };

    return <>
        <article>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">Name: </label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age: </label>
                    <input 
                        type="text" 
                        id="age" 
                        name="age" 
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <button className="btn">Add Person</button>
            </form>
            {people.map(person => {
                const {id, firstName, email} = person;
                return(
                    <div className="list-people" key={id}>
                        <h2>{firstName}</h2>
                        <p>{email}</p>
                    </div>
                )
            })}
        </article>
    </>
};

export default ControlledInputs