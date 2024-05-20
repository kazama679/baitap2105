import React, { useState } from 'react';

export default function Bai2() {
    const [color, setColor] = useState("");
    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault(); 
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value); 
    }
    return (
        <div>
            <h2>Color Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="colorInput">Màu sắc:</label>
                <input 
                    type="color" 
                    id="colorInput" 
                    value={color} 
                    onChange={handleChange} 
                />
                <button type="submit">Submit</button>
            </form>
            {color && <p>Mã màu sắc: {color}</p>}
        </div>
    );
}