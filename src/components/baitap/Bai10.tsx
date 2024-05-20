import React, { useState } from 'react';
export default function Bai10() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setErrorMessage('Email và Mật khẩu không được để trống');
            return;
        }
        const storedData = JSON.parse(localStorage.getItem(formData.email));
        if (storedData && storedData.password === formData.password) {
            alert('Đăng nhập thành công');
        } else {
            setErrorMessage('Đăng nhập thất bại. Vui lòng kiểm tra lại Email và Mật khẩu');
        }
        setFormData({
            email: '',
            password: ''
        });
        setErrorMessage('');
    };
    return (
        <div>
            <h2>Đăng nhập tài khoản</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="emailInput">Email:</label>
                    <input 
                        type="email" 
                        id="emailInput" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label htmlFor="passwordInput">Mật khẩu:</label>
                    <input 
                        type="password" 
                        id="passwordInput" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
}