import './App.css';
import Navbar from './components/navbar';
import ProjectsCarousel from './pages/ProjectsCarousel';
import GithubStats from './pages/GithubStats';
import my_pic1 from './images/my_pic1.png'
import About from './pages/About';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Reviews from './pages/Reviews';
import ProjectsBar from './pages/ProjectsBar';
import resume from './resources/resume.pdf';


function App() {
  
  useGSAP(() => {
  const tl = gsap.timeline({ repeat: -1});

    tl.fromTo(
      ".first-desc",
      { opacity: 0, visibility: 'hidden' },
      {
        opacity: 1,
        visibility: 'visible',
        duration: 3,
        onComplete: () => {
          gsap.set(".first-desc", { opacity: 0, visibility: 'hidden' });
        }
      }
    )
    .fromTo(
      ".second-desc",
      { opacity: 0, visibility: 'hidden' },
      {
        opacity: 1,
        visibility: 'visible',
        duration: 3,
        onComplete: () => {
          gsap.set(".second-desc", { opacity: 0, visibility: 'hidden' });
        }
      }
    )
    .fromTo(
      ".third-desc",
      { opacity: 0, visibility: 'hidden' },
      {
        opacity: 1,
        visibility: 'visible',
        duration: 3,
        onComplete: () => {
          gsap.set(".third-desc", { opacity: 0, visibility: 'hidden' });
        }
      }
    )
    .fromTo(
      ".fourth-desc",
      { opacity: 0, visibility: 'hidden' },
      {
        opacity: 1,
        visibility: 'visible',
        duration: 3,
        onComplete: () => {
          gsap.set(".fourth-desc", { opacity: 0, visibility: 'hidden' });
        }
      }
    );
  }, []);

    const [isVisible, setIsVisible] = useState(false);
    const [carousel, setCarousel] = useState(false);
    const componentRef = useRef(null);


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
              setIsVisible(true); // The component is in view
              observer.disconnect(); // Stop observing after loading
            }
          },
          { threshold: 0.1 } // Trigger when 10% of the element is visible
        );
    
        if (componentRef.current) {
          observer.observe(componentRef.current);
        }
    
        // Cleanup the observer on component unmount
        return () => {
          if (componentRef.current) {
            observer.unobserve(componentRef.current);
          }
        };
      }, []);

    //used for the subtitle animiation :=> CODER, ENGINEER, ARTIST, etc.
    document.addEventListener('DOMContentLoaded', function() {
      // Get all the spans inside .sub-title
      const spans = document.querySelectorAll('.outer-container.left-content.sub-title span');
      // console.log(spans)
    
      // Loop through each span and set the --i property
      spans.forEach((span, index) => {
        // Set the --i CSS custom property for each span
        // console.log('im here!')
        span.style.setProperty('--i', spans.length - index);
      });
    });

    // Function to handle checkbox changes
    const handleCheckboxChange = () => {
      setCarousel(!carousel);
    };


        //choose the screen size 
        const handleResize = () => {
            if (window.innerWidth < 850) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
    
        // create an event listener
        useEffect(() => {
            if (window.innerWidth < 850) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
            window.addEventListener("resize", handleResize);
        }, []);


  return (
  <>
    <div className="App">
      <Navbar isMobile={isMobile}/>
      <div id="home" className='outer-container'>
        <div className='left-content'>
          <p className='title'>Shyam S Varadharajan</p>
          <h2 className='sub-title'>
            I'm a
            <span className="first-desc" dataText="Coder"> Coder</span>
            <span className="second-desc" dataText="Artist"> Artist</span>
            <span className="third-desc" dataText="Web Developer"> Web Developer</span>
            <span className="fourth-desc" dataText="Engineer"> Engineer</span>
          </h2>
          <p className='desc'>{!isMobile? "I'm a web developer passionate about exploring emerging technologies. Focused on innovation, I strive to create seamless user experiences and stay ahead of trends in web development, AI, and cutting-edge tools. My goal is to build efficient, scalable, and future-ready solutions that meet the evolving needs of users and businesses." : "I'm a web developer driven by innovation, dedicated to creating seamless user experiences. With a passion for emerging technologies like AI, I focus on building scalable, future-ready solutions that meet the evolving needs of users and businesses."}</p>
          

          <div className='details-buttons'>
            <a className='dwnld-cv' href={resume} download={'Shyam\'s Resume'}>Download CV</a>
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

        <div className='img-outer'><img src={my_pic1}/></div>
      </div>

      <Services id="services"/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div id="projects" style={{display: 'flex', gap: '30px', width: '100%', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
            <h2 className='heading blue'>My <span>Projects</span></h2>
            <label className="switch2">
                <input type="checkbox" checked={carousel} onChange={handleCheckboxChange}/>
                <span className="slider2"></span>
            </label>
       </div>
       {carousel? <ProjectsCarousel/> : <ProjectsBar/>}
      
       <br/>
       <br/>
       <br/>

      <GithubStats/>

      <br/>
      <About ref={componentRef} key={carousel}/>

      <Reviews/>
      
      <br/>
      <br/>
      <br/>
      <br/>
      
      <Contact/>

      <Footer/>
      
    </div>
  </>
  );
}

export default App;
