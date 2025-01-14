import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';



const Navbar = ({isMobile}) => {
    const [open, setOpen] = useState(false);
    const [offset, setOffset] = useState(0);

    const handleToggleHambuger = ()=>{
        setOpen(!open);
    }

    useEffect(()=>{
        if (open){
            // console.log('hamburger open');
            let elements = document.getElementsByClassName('menu-overlay');
            if (elements.length > 0) {
                elements[0].classList.add('show-menu');
            }
        }
        else{
            // console.log('hamburger closed');
            let elements = document.getElementsByClassName('menu-overlay');
            if (elements.length > 0) {
                elements[0].classList.remove('show-menu');
            }
        }
    }, [open]);


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
        <>
        <header>
            <Link to="home" smooth={true} duration={200} offset={offset}>
                <img src="https://see.fontimg.com/api/rf5/9Y2DK/N2YzOWQ5NTNjNzdhNDYwMTk1NTdhYmMwNmJiYzZjYjUudHRm/U2h5YW0/nature-beauty-personal-use.png?r=fs&h=93&w=1250&fg=FFFFFF&bg=000000&tb=1&s=74" alt="Calligraphy fonts"/>
                <span style={{pointerEvents:'none', textDecoration:'none', color:'#6F82FF', fontSize:'2.5rem', fontWeight:'bold', position:'relative', top:'-7px', backgroundColor:'transparent'}}>.</span>
            </Link>
            {!isMobile &&
                <nav>
                    <Link to="home" smooth={true} duration={200} offset={offset}>Home</Link>
                    <Link to="services" smooth={true} duration={200} offset={offset*1.5}>Services</Link>
                    <Link to="projects" smooth={true} duration={200} offset={offset*1.5}>Projects</Link>
                    <Link to="github-stats" smooth={true} duration={200} offset={offset*2}>Stats</Link>
                    <Link to="about" smooth={true} duration={200} offset={offset*1.5}>About</Link>
                </nav>
            }

            <div style={{display: 'flex', gap:'10px', alignItems:'center'}}>
            <Link to="contact" smooth={true} duration={200} offset={offset*1.5}><button>Contact</button></Link>
            {isMobile && (
                <>
                    <input hidden="" className="check-icon" id="check-icon" name="check-icon" type="checkbox" checked={open} onChange={handleToggleHambuger}/>
                    <label className="icon-menu" for="check-icon">
                        <div className="bar bar--1"></div>
                        <div className="bar bar--2"></div>
                        <div className="bar bar--3"></div>
                    </label>
                </>
            )}
            </div>
                    


        </header>


        {open && isMobile &&
            <div className='menu-overlay'>
                <Link to="home" smooth={true} duration={200} offset={offset} className='menu-item' onClick={(ev)=>{setOpen(false);}}>
                    <svg x="0px" y="0px" width="19" height="19" viewBox="0 0 24 24">
                        <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
                    </svg>
                        Home
                </Link>
                <Link to="services" smooth={true} duration={200} offset={offset*1.5} className='menu-item' onClick={(ev)=>{setOpen(false);}}>
                    <svg aria-hidden="true" width="20" height="20" style={{fill:'none'}} viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v3c0 .5523.44772 1 1 1h8v-8m-9 4v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 11h11m6.25 5c0 1.2426-1.0073 2.25-2.25 2.25M20.25 16c0-1.2426-1.0073-2.25-2.25-2.25M20.25 16H21m-3 2.25c-1.2426 0-2.25-1.0074-2.25-2.25M18 18.25V19m-2.25-3c0-1.2426 1.0074-2.25 2.25-2.25M15.75 16H15m3-2.25V13m-1.591 1.409-.5303-.5303m4.2426 4.2426-.5303-.5303m-3.182 0-.5303.5303m4.2426-4.2426-.5303.5303"/>
                    </svg>
                    Services
                </Link>
                <Link to="projects" smooth={true} duration={200} offset={offset*1.5} className='menu-item' onClick={(ev)=>{setOpen(false);}}>
                    <svg aria-hidden="true" width="20" height="20" style={{fill:'none'}} viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/>
                    </svg>
                    Projects
                </Link>
                <Link to="github-stats" smooth={true} duration={200} offset={offset*2} className='menu-item' onClick={(ev)=>{setOpen(false);}}>
                    <svg aria-hidden="true"  width="21" height="21" style={{fill:'none'}} viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="1.75" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    Stats
                </Link>
                <Link to="about" smooth={true} duration={200} offset={offset*1.5} className='menu-item' onClick={(ev)=>{setOpen(false);}}>
                    <svg aria-hidden="true" width="20" height="20" style={{fill:'none'}}viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M21 12a28.076 28.076 0 0 1-1.091 9M7.231 4.37a8.994 8.994 0 0 1 12.88 3.73M2.958 15S3 14.577 3 12a8.949 8.949 0 0 1 1.735-5.307m12.84 3.088A5.98 5.98 0 0 1 18 12a30 30 0 0 1-.464 6.232M6 12a6 6 0 0 1 9.352-4.974M4 21a5.964 5.964 0 0 1 1.01-3.328 5.15 5.15 0 0 0 .786-1.926m8.66 2.486a13.96 13.96 0 0 1-.962 2.683M7.5 19.336C9 17.092 9 14.845 9 12a3 3 0 1 1 6 0c0 .749 0 1.521-.031 2.311M12 12c0 3 0 6-2 9"/>
                    </svg>
                    About
                </Link>
            </div>
        }
        {open && isMobile && <div className='cover-screen'></div>}
    </>
    )
}

export default Navbar;