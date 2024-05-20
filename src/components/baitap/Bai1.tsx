import React, { useState, useEffect } from 'react';

export default function Bai1() {
    const [email, setEmail] = useState<string>("");
    const [emailsList, setEmailsList] = useState<string[]>([]);
    useEffect(() => {
        const storedEmails = localStorage.getItem('userEmails');
        if (storedEmails) {
            setEmailsList(JSON.parse(storedEmails));
        }
    }, []);
    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handleClick = () => {
        console.log(email); 
        const updatedEmailsList = [...emailsList, email];
        setEmailsList(updatedEmailsList);
        localStorage.setItem('userEmails', JSON.stringify(updatedEmailsList)); 
    }
    return (
        <div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="text" onChange={handleChange2} />
                <p>Email người dùng nhập: {email}</p>
                <button onClick={handleClick}>Login</button>
            </div>
        </div>
    )
}