import beach_BG from '../images/beach_BG3.png';
import beach_BG1 from '../images/beach_BG4.png'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import timeline from '../resources/timeline';
gsap.registerPlugin(ScrollTrigger);


const About = () => {
    const bg1 = useRef(null);
    const img_container = useRef(null);
    const img = useRef(null);
    const text1 = useRef(null);
    const text2 = useRef(null);
    const timelineRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const scrollRefText = useRef(null);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);


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


    useLayoutEffect(()=>{
        if (isVisible){
            // ScrollTrigger.refresh();
            let ctx = gsap.context(()=>{
                ScrollTrigger.create({
                    trigger: bg1.current,
                    pin: bg1.current,
                    pinSpacing: false,
                    start:"top top",
                    endTrigger:'.last',
                    end:'bottom bottom',
                    // markers:true,
                    anticipatePin: 1
                });
            
                gsap.timeline({
                    scrollTrigger:{
                        trigger:img_container.current,
                        pin: img_container.current,
                        scrub: 1,
                        start: "0% 0%",
                        anticipatePin: 1,


                        // pinSpacing: false
                    }
                })
                .to(img.current, {transform: "translateZ(2200px)", duration: 2}, 0)
                .to(text1.current, {y:-1000}, 0.33, "<")
                .to(text2.current, {y:-1000}, 0.36, "<")
                .to(scrollRefText.current, {
                  opacity:0.7,
                  duration: 1
                }, 0.4);


                // Add a continuous bounce effect
                gsap.to(scrollRefText.current, {
                  y: "-=35", // Move 20px upwards
                  duration: 2, // Duration for one direction
                  repeat: -1, // Infinite loop
                  yoyo: true, // Reverse the animation
                  ease: "power1.inOut" // Smooth easing
                });
            })
            
            return ()=> ctx.revert();
        }
    }, [isVisible]);

  return (
    <>
        <div id="about" ref={componentRef} style={{backgroundColor:'black'}}>
            <div ref={bg1} style={{backgroundColor:'black', position:'absolute', height:'100vh', width:'100vw', zIndex:'-1'}}></div>

            <section>
                <div ref={img_container} className='img-container perspective' style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh', width:'100vw',    position:'relative'}}>
                    {(screenWidth<600)? <img ref={img} className='image' src={beach_BG1} alt=''/> : <img ref={img} className='image' src={beach_BG} alt=''/> }
                    
                    
                    <div style={{color:'white', position:'absolute', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', backgroundColor:'transparent', fontFamily:'ICA Rubrik'}}>
                        <h1 ref={text1} style={{fontSize: screenWidth >= 768 ? '10rem' : '5rem', backgroundColor:'transparent'}}>
                            <span className='stroke'>About</span> Me
                        </h1>
                        <p ref={text2} style={{opacity:0.5, width:'12rem', fontSize:screenWidth >= 768? '1.1rem' : '0.8rem', textAlign:'center', backgroundColor:'transparent'}}> 
                            Get to know me better!
                        </p>
                    </div>

                    <p ref={scrollRefText} className='scroll-ref-text'>SCROLL DOWN</p>
                </div>

                <div className='container' ref={timelineRef} style={{paddingBottom:'2', display:'flex', alignItems:'center', justifyContent:'space-around', flexWrap:'wrap'}}>
                    <section class="timeline-section">
                      
                      <div class="timeline-items">
                        {timeline.map((obj, i)=>(
                            <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-date">{obj.date}</div>
                            <div class="timeline-content">
                              <h3>{obj.title}</h3>
                              <p>{obj.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                </div>
            </section>
        </div>
    </>
  )
}

export default About