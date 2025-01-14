import React from 'react'
import { useEffect } from 'react';
import CountUp from 'react-countup';
import StatsCounter from '../components/StatsCounter';

function GithubStats() {

    // Scroll event listener
    window.addEventListener('scroll', function() {
        const statCards = document.querySelectorAll('.stat-card');
        
        statCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            card.classList.add('visible');
        }
        });
    });



  return (
    <div id="github-stats">
        <h2 className='heading purple'>My <span>Stats</span></h2>
        
        <div className='my-grid-1'>
            <div className='stat-card blue'>
                <p>In the world of code, Shyam is a force to be reckoned with. With Python, I conquer data, crafting intelligent algorithms and powerful systems. In Java, I build robust, scalable applications that stand the test of time. JavaScript fuels my dynamic web creations, while React brings engaging, seamless user interfaces to life. Mastering these tools, I transform ideas into reality, shaping the future of technology with every line of code.</p>
            </div>
            <div className='stat-card pink'>
                <StatsCounter/>
            </div>
        </div>
        <div className='my-grid'>
            <div className='stat-card pink'>
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=shemzegem200&theme=transparent&hide_border=true&title_color=FF5F82&text_color=edf0f1&text_bold=false&show_icons=true&icon_color=FF5F82" alt="Shyam's Github Stats"/>
            </div>
            <div className='stat-card purple'>
                <img src="https://github-readme-stats.vercel.app/api?username=shemzegem200&theme=transparent&hide_border=true&title_color=E268F3&text_color=edf0f1&text_bold=false&show_icons=true&icon_color=E268F3" alt="Shyam's Github Stats"/>
            </div>
        </div>
        
        {/* <div className='my-grid'> */}
            {/* <div className='stat-card blue'>
                <img src="https://github-readme-streak-stats.herokuapp.com?user=shemzegem200&theme=dark&hide_border=true&type=png&background=EB545400&ring=EBCF58&currStreakLabel=EBCF58" alt="GitHub Streak" loading='lazy'/>
            </div> */}
            <div className='stat-card purple'>
                <img src="https://github-readme-stats.vercel.app/api/pin/?username=shemzegem200&repo=Blog-Site&theme=transparent&hide_border=true&title_color=E268F3&text_color=edf0f1&text_bold=false&show_icons=true&icon_color=E268F3" alt="Shyam's Github Stats"/>
            </div>
        {/* </div> */}
        
        <div className='stat-card pink'>
            <img src="https://skillicons.dev/icons?i=html,css,js,py,java,c,mongodb,mysql,react,replit,netlify,stackoverflow,nodejs,npm,yarn,vite,express,figma,postman,materialui,opencv,git,github,linux,ubuntu,windows,azure,visualstudio,vscode,bootstrap" alt="Shyam's Skills"/>
        </div>
    </div>
  )
}

export default GithubStats