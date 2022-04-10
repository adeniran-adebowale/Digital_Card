import React from 'react';
import foto from '../img/foto.jpg';
import mail from '../img/mail.png';
import linkedin from '../img/linkedin.fw.png';



const Info = ()=>{

    return(
        <div>
            <div className='foto'><img src={foto} alt='loading...'/></div>


            <p>
                <b className='name'>Adebowale David Adeniran</b><br/>
                <small>Frontend Developer</small><br />
                <small>adeniran.adebowale@yahoo.com</small>
            </p>

            <div className='foto--info'>
                <div className='white'>
                    <img src={mail} alt='email img loading..' />
                     <span>Email </span> 
                </div>
                <div className='blue'>
                <img src={linkedin} alt='Linkedin img loading..'/>
                    <span>LinkedIn</span>
                                    </div>
            </div>

        </div>
    )
}

export default Info;