import React from 'react'

const Services = () => {

    // Scroll event listener
    window.addEventListener('scroll', function() {
        const statCards = document.querySelectorAll('.services-box');
        
        statCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            card.classList.add('visible');
        }
        });
    });


  return (
    <section className='services active'>
        <h2 className='heading'>My <span>Services</span></h2>

        <div className='services-container'>
            <div className='services-box'>
                <div className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" style={{transform: 'msFilter:'}}><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
                </div>
                <h3>Web Development</h3>
                <p>I build full-stack web applications using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js, handling everything from the database to the user interface.</p>
            </div>

            <div className='services-box'>
                <div className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{transform: "msFilter:"}}><path d="M20 17V7c0-2.168-3.663-4-8-4S4 4.832 4 7v10c0 2.168 3.663 4 8 4s8-1.832 8-4zM12 5c3.691 0 5.931 1.507 6 1.994C17.931 7.493 15.691 9 12 9S6.069 7.493 6 7.006C6.069 6.507 8.309 5 12 5zM6 9.607C7.479 10.454 9.637 11 12 11s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2V9.607zM6 17v-2.393C7.479 15.454 9.637 16 12 16s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2z"></path></svg>                
                </div>
                <h3>Backend Developer</h3>
                <p>Expert at server-side logic, database management, API creation, and ensuring smooth integration between frontend and backend systems, while optimizing performance, security, and scalability.</p>
            </div>

            <div className='services-box'>
                <div className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{transform: "msFilter:"}}><path d="M7.061 22c1.523 0 2.84-.543 3.91-1.613 1.123-1.123 1.707-2.854 1.551-4.494l8.564-8.564a3.123 3.123 0 0 0-.002-4.414c-1.178-1.18-3.234-1.18-4.412 0l-8.884 8.884c-1.913.169-3.807 1.521-3.807 3.919 0 .303.021.588.042.86.08 1.031.109 1.418-1.471 2.208a1.001 1.001 0 0 0-.122 1.717C2.52 20.563 4.623 22 7.061 22c-.001 0-.001 0 0 0zM18.086 4.328a1.144 1.144 0 0 1 1.586.002 1.12 1.12 0 0 1 0 1.584L12 13.586 10.414 12l7.672-7.672zM6.018 16.423c-.018-.224-.037-.458-.037-.706 0-1.545 1.445-1.953 2.21-1.953.356 0 .699.073.964.206.945.475 1.26 1.293 1.357 1.896.177 1.09-.217 2.368-.956 3.107C8.865 19.664 8.049 20 7.061 20H7.06c-.75 0-1.479-.196-2.074-.427 1.082-.973 1.121-1.989 1.032-3.15z"></path></svg>
                </div>
                <h3>UI Design</h3>
                <p>I'm skilled in UI design, with a focus on creating intuitive, visually appealing interfaces. I ensure a seamless user experience by balancing aesthetics with functionality, optimizing design for responsiveness and usability.</p>
            </div>

            <div className='services-box'>
                <div className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{transform: "msFilter:"}}><path d="M13.4 2.096a10.08 10.08 0 0 0-8.937 3.331A10.054 10.054 0 0 0 2.096 13.4c.53 3.894 3.458 7.207 7.285 8.246a9.982 9.982 0 0 0 2.618.354l.142-.001a3.001 3.001 0 0 0 2.516-1.426 2.989 2.989 0 0 0 .153-2.879l-.199-.416a1.919 1.919 0 0 1 .094-1.912 2.004 2.004 0 0 1 2.576-.755l.412.197c.412.198.85.299 1.301.299A3.022 3.022 0 0 0 22 12.14a9.935 9.935 0 0 0-.353-2.76c-1.04-3.826-4.353-6.754-8.247-7.284zm5.158 10.909-.412-.197c-1.828-.878-4.07-.198-5.135 1.494-.738 1.176-.813 2.576-.204 3.842l.199.416a.983.983 0 0 1-.051.961.992.992 0 0 1-.844.479h-.112a8.061 8.061 0 0 1-2.095-.283c-3.063-.831-5.403-3.479-5.826-6.586-.321-2.355.352-4.623 1.893-6.389a8.002 8.002 0 0 1 7.16-2.664c3.107.423 5.755 2.764 6.586 5.826.198.73.293 1.474.282 2.207-.012.807-.845 1.183-1.441.894z"></path><circle cx="7.5" cy="14.5" r="1.5"></circle><circle cx="7.5" cy="10.5" r="1.5"></circle><circle cx="10.5" cy="7.5" r="1.5"></circle><circle cx="14.5" cy="7.5" r="1.5"></circle></svg>
                </div>
                <h3>Painting</h3>
                <p>I'm an adept painter, skilled in various techniques and mediums. I express creativity through vibrant compositions, focusing on detail, emotion, and storytelling to create visually impactful and thought-provoking artworks.</p>
            </div>

            <div className='services-box'>
                <div className='icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{transform: "msFilter:"}}><path d="M8.293 6.293 2.586 12l5.707 5.707 1.414-1.414L5.414 12l4.293-4.293zm7.414 11.414L21.414 12l-5.707-5.707-1.414 1.414L18.586 12l-4.293 4.293z"></path></svg>
                </div>
                <h3>Competitive Programming</h3>
                <p>I'm skilled in competitive programming, with a strong focus on problem-solving and algorithm optimization. I regularly practice on platforms like LeetCode, refining my skills in data structures and efficient coding techniques.</p>
            </div>

            <div className='services-box'>
                <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{transform: "msFilter:"}}><path d="M18.944 11.112C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5h11c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888zM18 17H7c-1.654 0-3-1.346-3-3 0-1.404 1.199-2.756 2.673-3.015l.581-.102.192-.558C8.149 8.274 9.895 7 12 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2z"></path></svg>
                </div>
                <h3>Exploring Cloud</h3>
                <p>I'm exploring Azure, learning to leverage its cloud services for building scalable applications. I'm gaining hands-on experience with virtual machines, storage solutions, and other tools to optimize performance and deployment.</p>
            </div>
        </div>
        
    </section>
  )
}

export default Services