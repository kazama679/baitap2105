import React, { useState } from 'react';

export default function Bai4() {
    const [progress, setProgress] = useState(0); 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProgress(parseInt(e.target.value));
    }
    const handleSubmit = () => {
        console.log(`Tiến độ hoàn thành công việc: ${progress}%`);
    }
    return (
        <div>
            <h2>Progress Form</h2>
            <form>
                <label htmlFor="progressInput">Tiến độ hoàn thành:</label>
                <input 
                    type="range" 
                    id="progressInput" 
                    min="0" 
                    max="100" 
                    value={progress} 
                    onChange={handleChange} 
                />
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
            <p>Tiến độ hoàn thành công việc: {progress}%</p>
        </div>
    );
}
