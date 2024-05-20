import React, { useState } from 'react';

export default function Bai7() {
    const [gender, setGender] = useState(""); 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value); 
    }
    const handleSubmit = () => {
        console.log(`Giới tính: ${gender}`);
    }
    return (
        <div>
            <h2>Gender Form</h2>
            <form>
                <div>
                    <input 
                        type="radio" 
                        id="maleRadio" 
                        name="gender" 
                        value="Nam" 
                        checked={gender === "Nam"} 
                        onChange={handleChange} 
                    />
                    <label htmlFor="maleRadio">Nam</label>
                </div>
                <div>
                    <input 
                        type="radio" 
                        id="femaleRadio" 
                        name="gender" 
                        value="Nữ" 
                        checked={gender === "Nữ"} 
                        onChange={handleChange} 
                    />
                    <label htmlFor="femaleRadio">Nữ</label>
                </div>
                <div>
                    <input 
                        type="radio" 
                        id="otherRadio" 
                        name="gender" 
                        value="Khác" 
                        checked={gender === "Khác"} 
                        onChange={handleChange} 
                    />
                    <label htmlFor="otherRadio">Khác</label>
                </div>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}