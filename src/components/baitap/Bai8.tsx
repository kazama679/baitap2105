import React, { useState } from 'react';
export default function Bai8() {
    const [hobbies, setHobbies] = useState([]); 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (e.target.checked) {
            setHobbies([...hobbies, value]); 
        } else {
            setHobbies(hobbies.filter(hobby => hobby !== value)); 
        }
    }
    const handleSubmit = () => {
        console.log('Sở thích đã chọn:', hobbies);
    }
    return (
        <div>
            <h2>Hobby Form</h2>
            <form>
                <div>
                    <input 
                        type="checkbox" 
                        id="musicCheckbox" 
                        name="hobby" 
                        value="Âm nhạc" 
                        onChange={handleChange} 
                    />
                    <label htmlFor="musicCheckbox">Âm nhạc</label>
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        id="readingCheckbox" 
                        name="hobby" 
                        value="Đọc sách" 
                        onChange={handleChange} 
                    />
                    <label htmlFor="readingCheckbox">Đọc sách</label>
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        id="sportCheckbox" 
                        name="hobby" 
                        value="Thể thao" 
                        onChange={handleChange} 
                    />
                    <label htmlFor="sportCheckbox">Thể thao</label>
                </div>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}