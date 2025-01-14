import React, { useEffect, useState } from 'react'
import './Footer.css';
import { Link } from 'react-scroll';


const Footer = () => {
    const [offset, setOffset] = useState(0);

    // Calculate the offset as a percentage of the window height (e.g., -5% of the page height)
      useEffect(() => {
        const calculateOffset = () => {
          const percentage = 8; // Example: 3.5% offset
          const offsetValue = (percentage / 100) * window.innerHeight; // Convert to pixels
          setOffset(-offsetValue); // Set negative to scroll up
        };
    
        // Calculate offset initially and on window resize
        calculateOffset();
        window.addEventListener('resize', calculateOffset);
    
        return () => {
          window.removeEventListener('resize', calculateOffset);
        };
      }, []);



  return (
    <div className='footer'>
        <div className='sb__footer section__padding'></div>
        <div className='sb__footer-links'>
            <div className='sb__footer-links-div'>
                <h4>Services</h4>
                <Link to="services" smooth={true} duration={200} offset={offset*1.5}>
                    <p>Coding</p>
                </Link>
                <Link to="services" smooth={true} duration={200} offset={offset*1.5}>
                    <p>Web Design</p>
                </Link>
                <Link to="services" smooth={true} duration={200} offset={offset*1.5}>
                    <p>Painting</p>
                </Link>
            </div>


            <div className='sb__footer-links-div'>
                <h4>Portfolio</h4>
                <Link to="projects" smooth={true} duration={200} offset={offset*1.5}>
                    <p>Recent Projects</p>
                </Link>
                <Link to="github-stats" smooth={true} duration={200} offset={offset*2}>
                    <p>Stats</p>
                </Link>
                <Link to="services" smooth={true} duration={200} offset={offset*1.5}>
                    <p>Skills</p>
                </Link>
            </div>

            <div className='sb__footer-links-div'>
                <h4>Follow Me</h4>
                <a href="https://www.instagram.com/shyamvaradharajan?igsh=YzljYTk1ODg3Zg==" target='_blank'>
                    <p>Instagram</p>
                </a>
                <a href="https://www.linkedin.com/in/shyam-varadharajan" target="_blank">
                    <p>LinkedIn</p>
                </a>
                <a href="https://www.facebook.com/people/Shyam-Sainarayanan-Varadharajan/pfbid02wr8Sk6BTSMVh3qAL9HwDprRpfU2J77GVJoZLJWpVQ6z6YCfn6YtmJvHb2KhDsHtDl/?mibextid=qi20mg&rdid=2cPTfgfYWDK0qfxK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18C2sAebX2%2F%3Fmibextid%3Dqi20mg" target='_blank'>
                    <p>Facebook</p>
                </a>
                <a href="https://github.com/shemzegem200" target='_blank'>
                    <p>Github</p>
                </a>
            </div>

            <div className='sb__footer-links-div'>
                <h4>About</h4>
                <Link to="about" smooth={true} duration={200} offset={offset*1.5}>
                    <p>Who I Am</p>
                </Link>
                <Link to="about" smooth={true} duration={200} offset={offset*1.5}>
                    <p>My Journey</p>
                </Link>
                <Link to="contact" smooth={true} duration={200} offset={offset*1.5}>
                    <p>Contact</p>
                </Link>
            </div>


            <div className='sb__footer-links-div'>
                <h4>Follow me on</h4>
                <div className='social-media'>
                    <a className="logo-circle pink" href="https://www.linkedin.com/in/shyam-varadharajan" target='_blank'>
                    <svg className="svg-icon pink" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                    </a>

                    <a className="logo-circle purple" href="https://github.com/shemzegem200" target='_blank'>
                    <svg className="svg-icon purple" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                    </a>

                    <a className="logo-circle blue" href="https://www.facebook.com/people/Shyam-Sainarayanan-Varadharajan/pfbid02wr8Sk6BTSMVh3qAL9HwDprRpfU2J77GVJoZLJWpVQ6z6YCfn6YtmJvHb2KhDsHtDl/?mibextid=qi20mg&rdid=2cPTfgfYWDK0qfxK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18C2sAebX2%2F%3Fmibextid%3Dqi20mg" target='_blank'>
                    <svg className="svg-icon blue" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                    </a>
                </div>
            </div>
        </div>

        <hr/>

        <div className='sb__footer-below'>
            <div className='sb__footer-copyright'>
                <p>
                ©{new Date().getFullYear()} Shyam. All rights reserved
                </p>
            </div>

            <div className='sb__footer-below-links'>
                <div><p>Terms & Conditions</p></div>
                <div><p>Privacy</p></div>
                <div><p>Security</p></div>
                <div><p>Cookie Declaration</p></div>
            </div>
        </div>
    </div>
  )
}

export default Footer