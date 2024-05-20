import React, { useState } from 'react';

export default function Bai6() {
    const [account, setAccount] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAccount(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleSubmit = () => {
        console.log('Thông tin tài khoản:', account);
    }
    return (
        <div>
            <h2>Thêm mới tài khoản</h2>
            <form>
                <div>
                    <label htmlFor="nameInput">Tên:</label>
                    <input 
                        type="text" 
                        id="nameInput" 
                        name="name" 
                        value={account.name} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label htmlFor="emailInput">Email:</label>
                    <input 
                        type="email" 
                        id="emailInput" 
                        name="email" 
                        value={account.email} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label htmlFor="passwordInput">Mật khẩu:</label>
                    <input 
                        type="password" 
                        id="passwordInput" 
                        name="password" 
                        value={account.password} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label htmlFor="confirmPasswordInput">Nhập lại mật khẩu:</label>
                    <input 
                        type="password" 
                        id="confirmPasswordInput" 
                        name="confirmPassword" 
                        value={account.confirmPassword} 
                        onChange={handleChange} 
                    />
                </div>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}