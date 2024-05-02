import React from 'react';
import styled from 'styled-components';
import Footer from '../../Assets/Footer';


const Contact = () => {
  return (

    
    <div className="all" style={{marginTop: "4rem", }}>

    {/* map */}
    <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.3023698086!2d76.84966393930495!3d28.422885864319063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1666724059113!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" title='map' referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <Wrapper>
    <div className="main">
    <h1 className='my-4 text-center text-primary para'>SHARE YOUR CONCERN</h1>

      <div className="left_right">

      <div className="left" data-aos="fade-up">
        <img src="https://www.nicepng.com/png/full/420-4208739_v-p-i-s-red-contact-us-banner.png" alt="" />
      </div>


      <div className="right" data-aos="fade-up">
      <form className='form' action="https://formspree.io/f/meqdrabg" method="POST">
        <input className='text' type="text" placeholder='Username' />
        <input className='email' type="email" placeholder="Email"  />
        <input className='subject' type="text" placeholder="Subject"  />
        <input className='number' type="text" placeholder="Phone No."  />


        <textarea className='textarea' name="textarea" placeholder="Enter The Message " id="" cols="10" rows="4"></textarea>
        
        <input type="submit" className="btn btn-primary btn" width="100%" />

      </form>
      </div>

      </div>
    </div>

    </Wrapper>
    <Footer />
    </div>
  )
}

export default Contact


const Wrapper = styled.section`
  .main{
    max-width:90%;
    width:100%;
    margin:2rem auto;
    display:flex;
    flex-direction:column;
  }

  .Heading{
    color: cadetblue;
  }
  .left{
    width:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
  }
  .left img{
    width:90%;
  }
  .left_right{
    display:flex;
    gap:12px;
  }
  .right{
    width:auto;
    margin:auto;
  }

  .para{font-size:20px; }
  .text{width:95%; margin:8px 0px; padding:7px;  font-size:"3px";  border:none; border-bottom: 1px solid black; }
  .email{width:95%; margin:8px 0px; padding:7px; font-size:"3px";  border:none; border-bottom: 1px solid black;  }
  .number{width:95%; margin:8px 0px; padding:7px; font-size:"3px";  border:none; border-bottom: 1px solid black;  }
  .subject{width:95%; margin:8px 0px; padding:7px; font-size:"3px";  border:none; border-bottom: 1px solid black;  }
  .textarea{width:95%; margin:8px 0px; padding:7px; font-size:"3px";  border:none; border-bottom: 1px solid black;  } 
  .btn{width:95%}

  ${'' /* responsive  */}

  @media screen and (max-width: 1200px) {
    .main{max-width:90%; width:100%; }
  }
  @media screen and (max-width: 800px) {
    .main{max-width:90%; width:100%; }
  }
  @media screen and (max-width: 600px) {
    .main{max-width:96%; width:100%; }
  }
`;