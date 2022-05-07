import React from 'react';
import banner from '../../images/vbanner.png'

const Home = () => {
    return (
        <div>
            <section className='w-100 text-white d-flex flex-column justify-content-center align-items-center' style={{ backgroundImage: `url(${banner})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '70vh' }}>
                <h1>Welcome to V-Leaf GYM equip management system</h1>
                <p>It's easy to handle LARGE STORAGE now</p>
            </section>
        </div>
    );
};

export default Home;