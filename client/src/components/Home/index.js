import React from 'react';
import home from '../../assets/img/home-img.png'
import '../../styles/Home.css'

function Home(props) {
    return (
        <section className="home" id="home">
            <div className="content" data-aos="fade-right">
                <h3>We Belive Good Food Offer Great Smile</h3>
                <p>To provide a fun and safe environment where our customers can enjoy good food made with quality ingredients at affordable prices!</p>
                <a href="#menu"><button className="btn">Get Started</button></a>
            </div>

            <div className="image" data-aos="fade-up">
                <img src={home} alt="home" />
            </div>
        </section>
    );
}

export default Home;