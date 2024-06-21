import React from 'react'
import "./home.css"
import image1 from '../../assets/Images/consulting.jpeg'
import Carousel from '../carouselComponent/carousel1';
import image2 from '../../assets/Images/web-project1.jpeg';
import image3 from '../../assets/Images/ERP.jpeg';
import image4 from '../../assets/Images/Cloud-based-ERP.webp';
import image5 from '../../assets/Images/anayltics.jpg';
import image6 from '../../assets/Images/automation.png';
import image7 from '../../assets/Images/collaboration.webp';
import Testimonial from '../TestimonialComponent/Testimonial';

const Home = () => {
  const images = [
    image2,
    image3,
    image4,
  ];

  return (
    <div className='home__container'>

      <section className='section section1'>
        <div className="divition divition1">
          <h1 className='main__title'>Transform Your Business with <span ><em className='brand__name'>Softeware Sale Mart</em></span></h1>
            <div className="main__content custom__padding">
              <p>
              <em className='brand__name__sub'>Softeware Sale Mart</em> has transformed our workflow and boosted our productivity. Highly recommended!" – Jane Doe, CEO of Company <em className='brand__name'>Shopify</em>
              </p>
              <p><i>Streamline Your Workflow, Boost Productivity !!</i></p>
              <p>
                <button className='btn-primary'>Get Started for Free</button> – No Credit Card Required
              </p>
            </div>
        </div>
        <div className="divition divition0">
          <img src={image1} className='image1' alt="background image1"/>
        </div> 
      </section>

      <section className='section1'>
        <h1>Why choose <em className='brand__name'>Softeware Sale Mart</em> ?</h1>
        <div className="main__content">
          <p>
            <span className='sub__heading'>Automation:</span> "Automate routine tasks and focus on what truly matters."
          </p>
          <p><span className='sub__heading'>Analytics:</span> "Get real-time insights with our powerful analytics tools."</p>
          <p><span className='sub__heading' >Collaboration:</span> "Seamlessly collaborate with your team anytime, anywhere."
          </p>
        </div>
      </section>

      <section className="section">
        <div className='why__container'>
          <div className="Item"><img src={image5} width='200' height='200' alt="img1" /></div>
          <div className="Item"><img src={image6} alt="img2" width='200' height='200' /></div>
          <div className="Item"><img src={image7} alt="img3" width='200' height='200' /></div>
        </div>
      </section>

      <section className='section section2'>
        <div className="divition divition2">
          <h2>The Ultimate Solution for <em className='brand__name'> Web Projects </em> , <em className='brand__name__sub'> Software Solution </em>, and <em className='brand__name__sub'> ERP solutions </em></h2>
        </div>
      </section>

      <section className='section0'>
        <Carousel images={images}/>
      </section>

      <section className='section3'>
        <h1>How <em className='brand__name'>Softeware Sale Mart</em> can help you</h1>
        <div className="main__content">
            <p>
              <span className='sub__heading'>Save Time:</span> "Cut down on manual processes and increase efficiency."
            </p>
            <p><span className='sub__heading'>Increase Revenue:</span> "Optimize operations to boost your bottom line."</p>
            <p><span className='sub__heading' >Enhance Customer Satisfaction:</span> "Deliver better service with less effort."
            </p>
        </div>
        <div className="testimonial">
          <Testimonial images={images}/>
        </div>
      </section>

    </div>
  )
}

export default Home
