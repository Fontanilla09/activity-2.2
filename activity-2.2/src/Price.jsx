import React, { useState } from 'react';
import './tailwind.css';

const Price = () => {
    const [productName, setProductName] = useState('Laptop');
    const [quantity, setQuantity] = useState(1);
    const [unitPrice, setUnitPrice] = useState(35000);
    const [total, setTotal] = useState(35000);

    const handleCalculate = () => {
        setTotal(quantity * unitPrice);
    };

    const handleReset = () => {
        setProductName('');
        setQuantity(0);
        setUnitPrice(0);
        setTotal(0);
    };

    return (
        <div className="container">
            <h1>Price Checker</h1> <br />
<p>Enter product details to calculate the total price.</p><br />
            <div className="main-layout">

                <div className="card product-details">
                    <h3>Product Details</h3>
                    <div className="input-group">
                        <label>Product Name:</label>
                        <input className='YO'
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label>Quantity:  </label>
                        <input className='YO'
                            type="text"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                    </div>
                    <div className="input-group">
                        <label>Unit Price (₱): </label>
                        <input className='YO'
                            type="text"
                            value={unitPrice}
                            onChange={(e) => setUnitPrice(Number(e.target.value))}
                        />
                    </div><br />
                    <div className="button-group">
                        <button className="calc-btn" onClick={handleCalculate}>Calculate</button>
                        <button className="reset-btn" onClick={handleReset}>Reset</button>
                    </div>
                </div>

<br /> <br />
                <div className="card billing-summary">
                    <div className="summary-header">
                        <h3>Billing Summary</h3>
                        <p>Order details below</p>
                    </div>
                    <div className="summary-body">
                        <div className="product-display">
                            <span>PRODUCT: </span>
                            <strong>{productName}</strong>
                        </div>
                        <div className="summary-row">
                            <div className="stat">
                                <span>QUANTITY: </span>
                                <strong>{quantity}</strong>
                            </div>
                            <div className="stat">
                                <span>UNIT PRICE: </span>
                                <strong>₱{unitPrice}</strong>
                            </div>
                        </div>
                        <div className="total-display">
                            <p>Calculation: {quantity} x ₱{unitPrice}</p>
                            <h2>Total Amount: ₱{total.toLocaleString()}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;
