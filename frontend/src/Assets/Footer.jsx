import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>

      {/* Footer / */}
      
      <Wrapper>

      <div className='main' >
        <div className="upperFooter" >
            <div className="innerUpperFooter" >
            <div className="left">
                <p className="para">Ready to get started</p>
                <p className="para" >Talk to us today</p>
            </div>
            <div className="right">
                <NavLink to="/contact">
                <button className="btn">GET STARTED</button>
                </NavLink>
            </div>
            </div>
        </div>

        {/* main footer  */}

        <div className="mainFooter">
            <div className="fourParts">
                <div className="first">
                    <p className="para" >StudFlare</p>
                    <p>Lorem ipsum dolor, sit amet.. consectetur adipisicing elit. </p>
                    
                </div>
                <div className="second" >
                    <p>Subscribe and get important updates </p>
                    <div className="inp" >
                    <input className='input'  type="email" placeholder='Enter your email' />
                    <NavLink to="contact" >
                    <button className="btn" >SUBSCRIBE</button>
                    </NavLink>
                    </div>
                </div>
                <div className="third">
                <p>Follow us </p>
                <div className="icons" >
                    <span className="span"><p> <a href="https://poki.com/" target="_new"> 🎮 </a> </p></span>

                    <span className="span"><p> <a href="                    https://www.youtube.com/" target="_new"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAAB4CAMAAAC3goLtAAAAb1BMVEX/AAD/////Pz//ysr/sLD/oqL/rq7/8vL/tbX/19f/9vb/1NT/wcH/a2v/+vr/4uL/Li7/XV3/pqb/i4v/RUX/f3//urr/6ur/dnb/ZGT/nJz/DQ3/3Nz/UlL/GRn/qqr/JCT/S0v/Njb/hYX/kZEQ+W3lAAAErElEQVR4nO3c6ZaiOhQGUCNgmAdFgsio9f7PeMNUCoJgcTJ4V39/u1d6N0VBchLODn0e18SYEM9LDctS2tg0UaTrqqoe2qh1dD2K6J90f0mxLCNNPY8Qgk33D/8w2q0EEkOJiuQUO84lCLIq3N/8Mr/uPs01z0v/tg+rLAsujuPE95+jblseXod/o3U9y9aLUxzcPkb9KX7m3BM1UlL8mRYTJXGy0M/5MIe5lvvqohnmOi0unFKEcpT8Hi1riSPkgk7mVowv8FDrnkQLh6nsN1qlFM17ydmc0+qiaVO54GltIho2HZ9MaQvRrLkE+FWriEbNJ3jReqVo05scx9pAtOhdcm+otUWD3ucy0LoX0Z6FpM9aS7RmKednbSxas5SSPLRuKVqzGPuhlfhZ2yd+aI+iLcspH9q7aMtyctJr3Uy0ZUXsXotFS9ZE67WeaMma3HttJFqyJpXZaSWdho+CO63sk4Q2pNN+wyNht1NarRuKhqyK1moJpzrXxsSt1ihFQ1Yla7WSrxv6VK1WyqLHa/a40R62j1Q628dYiu81WoCXQ4h05qXJ3Gq05+0j7ek9dfq8rv9Z7EYL8FOstYgwfifqjbbaPtC+q04BDDUftdH62wfqtMhVAQabS9JoAQbqtXRm/wMw3HTu8Fp6+7IqqcW11gUY6FnLbEMgqLUQq7KhFqGCxe0b1lqIVdlYiwiDRb9faw2AgV60dGkK/zKutRBlpQktcsFv31oLMWGc0lJvAfsyrrUQE8ZpLX36niG9LtUCTBhntXRhArhExVSrAYwzr6VPX7BFKqFaiNrHOy3CENejjke1EC/2t1rqhXn61lqITf4FLUIWxO2QUi3E/3tRi1C0vWphUS3AQmeNFuFk69Kt1kLsPq3R0pfxxgvDV0ufvpvmvgpn7bZSC38t2vA2+qf9/9wJ237L/j3B5rL97WDwe5cBvHkNXvMEkFkNpzkY0IyR8Jjfgs3GMYe1gw220mG/LoNcRSLGa17YFTrbegKL6gerWg14ZelaayHO2XGp2jU1xhRgIC4V0YpV/ZZJtbmpjZsAA3Gp5MdftUvCYE+H4Q5Uu18G8FDksrtXNNr99oG47Jy2+7wA9xmXXemo0QIsdXjs+F+VRgvwe8HjNEWZNlqAs8I8TqrcyDedAgrdbzph1Z0Hs+T5tvBdglbrMXyiA+bUak2A1wOHHFotxDEgDrHQN54W/oqT2Nf+JPZXPMKy/pQ7ES1Zk+abre/7OsOV+qPILnqvBSmKMk6e/mohSmGM8/TFlsH66Oz2ZA8tKkVjFqM9aeW/cb0nLcR5O6Zx3CctxGlspul6VHRayT8/vqGBVvKLa420Un9adEIjrcxfID9qgo9OGtK+0PbehFbaSXmKprRylkGyp5Yqo+468lUWnEFDq2HnIlOyL9L3o85Q465QXiDP9fWTcaew145bXiLFUiI/r+i4VcfFxiHOwlsphnkLs3Pkrexm9muuW9mpyd2pONXJyso5abptkfked6u78KWKrWo/52Ebvj/d49e+EV8QOI5zPmmHug3fKsZK7chuYkKIlw5bHDYNDg9FcTxqfY7HY3FoGh3+9jlsuxwSgv/S5PA/VPI4osZ1ibUAAAAASUVORK5CYII=" alt="" width="18px" /> </a> </p></span>
                    
                    {/* <span className="span"><p><img src={<BsYoutube />} alt="" width="18px" /></p></span> */}


                    <span className="span"> <a href="https://www.instagram.com/" target="_new" > <p><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="" width="18px"/> </p>  </a> </span>
                </div>
                </div>
                <div className="fourth">
                    <p>Call us</p>
                    <p>+91 123456789</p>
                </div>
            </div>
        <hr width="80%" className='hr' />
        {/* <hr width="80%" style={{margin : "0px auto"}} /> */}

            <div className="lastFooterPart">
                <div className="lastFooter">
                <div className="date">
                    <p>@ {new Date().getFullYear()} StudFlare. All Rights Reserved</p>
                </div>
                <div className="policy">
                    <p>PRIVATE POLICY</p>
                    <p>TERMS AND CONDITIONS</p>
                </div>
                </div>
            </div>
        </div>

    </div>

      </Wrapper>

    </div>
  )
}

export default Footer

// box-shadow:4px 10px 14px grey;


const Wrapper = styled.section`
  .main{position : relative;}

  .upperFooter{ width : 100%; position : relative; z-index : 1;}

  .innerUpperFooter{ margin : 12px auto; width : 60%; padding : 12px; background-color : rgb(247 247 247); border-radius : 12px; display : flex; justify-content : space-around; align-items : center; max-width: 85%;  border:1px solid black; }

  .para{ margin : 12px 0px 10px ; font-size : 14px; }

  .btn{ border-radius : 12px; border : none; background-color : rgb(49 21 218 / 72%); color: aliceblue; width: 100%;
    padding: 6px 30px; font-size: 16px; }

  .mainFooter { width : 100%; padding : 12px;  background-color : rgb(6 21 85 / 97%); color : white ; padding : 6rem 0rem 3rem 0rem  ; position : absolute; top : 3rem; }

  .fourParts { width : 60%; margin : 12px auto ; display : flex; justify-content : space-between; gap : 1rem; font-size : 14px; font-family: math;  }

  .first{ width : 100%; padding : 12px; }

  .second{ width : 100%; padding : 12px; }

  .inp { display : flex; flex-direction : column; margin : 12px; gap : 12px; }

  .input { padding : 6px 10px; }

  .third{ width : 100%; padding : 12px; }

  .icons { display : flex; justify-content: space-evenly;  align-items : center; max-width: 100%; width: 75%; height: 28%; margin: 12px ;  }

  .span { content : " "  ; padding : 12px; border-radius : 50%; background-color : #fff; width : 400%; height : 100%; text-align : center; margin: 0px 3px; }

  .fourth{ width : inherit; padding : 12px; }

  .hr{margin : 0px auto ;}

  .lastFooterPart { width : 100%; gap:3rem; }

  .lastFooter { width : 60%; margin : 1rem auto; display : flex; justify-content : space-between; font-size : 12px; }

  p{margin-bottom: 0rem;}

  ${'' /* responsive  */}


  @media screen and (max-width: 1300px) {
    .mainFooter{
      flex-wrap: wrap;
      gap:.5rem;
    }
    .fourParts{
      width:70%;
    }
  }

  @media screen and (max-width: 1100px) {
    .fourParts{
      width:89%;
    }
    .first, .second, .third, .fourth{
      padding:0px;
    }
  }

  @media screen and (max-width: 864px) {
    .fourParts{
      width: 94%;
    display: flex;
    text-align: center;
    }
    .third .icons{
      display: flex;
    text-align: center;
    max-width: 100%;
    margin: 12px auto;
    }
    .lastFooter{
      width:75%;
    }
  }

  @media screen and (max-width: 661px) {
    .second .inp .input{
    width: 100%;
    padding: 4px;
    }
    .second .inp .btn{
    width: 86%;
    padding: 4px;
    font-size:13px;
    }
    .fourParts{
      display:flex;
      flex-wrap:wrap;
      font-size:12.8px;
    }
    .first, .second, .third, .fourth{
      width:48%;
      font-size:12.8px;
    }
    .fourth{
      margin:auto;
    }
    .third .icons{
      width: 50%;
      height: 50%;
    }
    .fourParts{
      gap:.4rem;
    }
    .lastFooter{
      width:93%;
      gap:2rem;
      font-size:12.8px;
      display:flex;
      justify-content:space-around;
    }

    .innerUpperFooter {
      width:100%;
      padding: 6px;
    }

    .innerUpperFooter .left .para {
      font-size:12.8px;
    }
    .innerUpperFooter .right .btn {
      font-size:12.8px ;
      padding:6px 15px;
      }
  }

  @media screen and (max-width: 510px) {
    .innerUpperFooter {
      display:flex;
      ${'' /* flex-direction: column; */}
      width:100%;
      padding: 6px;
    }
    .innerUpperFooter .left .para {
      margin:4px;
    }
    .mainFooter{padding: 3rem 0rem 3rem 0rem;}
  }

`;
