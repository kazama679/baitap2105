import React, { useState } from 'react';

export default function Bai5() {
    const [product, setProduct] = useState({
        code: '',
        name: '',
        price: 0,
        quantity: 0
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: name === 'price' || name === 'quantity' ? parseInt(value) : value
        }));
    }
    const handleSubmit = () => {
        console.log('Thông tin sản phẩm:', product);
    }
    return (
        <div>
            <h2>Product Form</h2>
            <form>
                <div>
                    <label htmlFor="codeInput">Mã sản phẩm:</label>
                    <input 
                        type="text" 
                        id="codeInput" 
                        name="code" 
                        value={product.code} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label htmlFor="nameInput">Tên sản phẩm:</label>
                    <input 
                        type="text" 
                        id="nameInput" 
                        name="name" 
                        value={product.name} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label htmlFor="priceInput">Giá:</label>
                    <input 
                        type="number" 
                        id="priceInput" 
                        name="price" 
                        value={product.price} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label htmlFor="quantityInput">Số lượng:</label>
                    <input 
                        type="number" 
                        id="quantityInput" 
                        name="quantity" 
                        value={product.quantity} 
                        onChange={handleChange} 
                    />
                </div>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}