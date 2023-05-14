import React from 'react';
import "./home.scss"
import Slider from '../../components/Slider/Slider';
import Categories from '../../components/Category/Categories';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Announcement/Announcement';
import Products from '../../components/Products/Products';
import NewsLatter from '../../NewsLatter/NewsLatter';
import Footer from '../../components/Footer/Footer';


const Home = () => {
    return (
        <div className='home'>
           <Announcement/>
           <Navbar/>
           <Slider/>
           <Categories/>
           <Products/>
           <NewsLatter/>
           <Footer/>
        </div>
    )
    }

export default Home;
