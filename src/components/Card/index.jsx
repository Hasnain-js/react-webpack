import React from 'react';
import './styles.css';
import img1 from '../../assets/images/card1.png';
import img2 from '../../assets/images/card2.png';
import img3 from '../../assets/images/card3.png';
export const Card = () => {
    return (
        <div className="container">
        <div className="card-container"
        style={{backgroundImage: "linear-gradient(5deg, #6c7c81 50%, transparent 52%, transparent 30%)"}}>
            <div className="image-container">
                <img src={img1} alt="Card Image" />
            </div>
            <div className="card">
                <div className="card-header">
                    <h3>Sport Shoes</h3>
                    <small className="badge">discount 20%</small>
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <button>Buy</button>
                </div>
            </div>
        </div>
        <div className="card-container"
        style={{backgroundImage: "linear-gradient(5deg, #b12e2b 50%, transparent 52%, transparent 30%)"}}>
            <div className="image-container">
                <img src={img2} alt="Card Image" />
            </div>
            <div className="card">
                <div className="card-header">
                    <h3>Sport Shoes</h3>
                    <small className="badge">discount 20%</small>
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <button>Buy</button>
                </div>
            </div>
        </div>
        <div className="card-container"
        style={{backgroundImage: "linear-gradient(5deg, #ebad00 50%, transparent 52%, transparent 30%)"}}>
            <div className="image-container">
                <img src={img3} alt="Card Image" />
            </div>
            <div className="card">
                <div className="card-header">
                    <h3>Sport Shoes</h3>
                    <small className="badge">discount 20%</small>
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <button>Buy</button>
                </div>
            </div>
        </div>
    </div>
    );
}
