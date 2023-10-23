import aboutImg from '../images/about-background.png'
import { Link } from 'react-router-dom';
import './css/about.css'

export default function About() {
    return (
        <div className='about-page'>
            <main className='about-main'>
                <img className='about-img' src={aboutImg} alt="Article Image" />
                <div className="about-container">
                    <h1 className='about-header'>Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p className='about-body'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉) <br /><br />Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

                    <div className="card">
                        <h2 className='card-header'>Your destination is waiting. Your van is ready.</h2>
                        <Link className='card-link' to="/vans">Explore our vans</Link>
                    </div>
                </div>
            </main>
        </div>     
    )
  }