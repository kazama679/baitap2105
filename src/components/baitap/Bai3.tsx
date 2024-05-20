import React, { useState } from 'react';

export default function Bai3() {
    const [birthday, setBirthday] = useState(""); 
    const [submitted, setSubmitted] = useState(false); 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBirthday(e.target.value); 
    }
    const handleSubmit = () => {
        console.log(`Ngày sinh: ${birthday}`);
        setSubmitted(true);
    }
    return (
        <div>
            <h2>Birthday Form</h2>
            <form>
                <label htmlFor="birthdayInput">Ngày sinh:</label>
                <input 
                    type="date" 
                    id="birthdayInput" 
                    value={birthday} 
                    onChange={handleChange} 
                />
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
            {submitted && <p>Ngày sinh: {birthday}</p>}
        </div>
    );
}