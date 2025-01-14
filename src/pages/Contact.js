import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Slide, toast } from 'react-toastify';
// import toast, { ToastBar, Toaster } from 'react-hot-toast';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p512n45', 'template_c0nvbwh', form.current, {
        publicKey: '4QCcjpIbF5CjT6Okg',
      })
      .then(
        () => {
            console.log('Successfully Sent!');
            toast.success('Successfully Sent!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Slide,
              });
            form.current.reset(); // This will clear the form after success
        },
        (error) => {
            console.log(error);
            toast.error('Failed to send', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Slide,
              });
        },
      );
    };


  return (
<section id="contact" className='contact active'>
      <h2 className='heading blue'>Let's Work <span>Together!</span></h2>
  <div className='contact-container'>
    <div className='contact-box'>

      <div className='contact-detail'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{transform: 'msFilter:'}}><path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path></svg>
        <div className='detail'>
          <p>Phone</p>
          <p>(+91) 6379132828</p>
        </div>
      </div>

      <div className='contact-detail'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{transform: 'msFilter:'}}><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg>
        <div className='detail'>
          <p>Email</p>
          <p>shyamvaradharajan200@gmail.com</p>
        </div>
      </div>

      <div className='contact-detail'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{transform: 'msFilter:'}}><path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></svg>
        <div className='detail'>
          <p>Address</p>
          <p>Block 9, apt#303, Bollineni Hillside, Perumbakkam main Rd, Sithalapakkam Post, Nookampalayam, Chennai-600126, Tamil Nadu, India</p>
        </div>
      </div>
      
    </div>



    <div className='contact-box'>
        <div class="form-card1">
        <div class="form-card2">
            <form ref={form} onSubmit={sendEmail} className='form'>
                <p class="form-heading">Get In Touch</p>

                <div class="form-field">
                    <input required="" placeholder="Name" className="input-field" type="text" name="user_name"/>
                </div>

                <div class="form-field">
                    <input
                        required=""
                        placeholder="Email"
                        class="input-field"
                      type="email"
                      name='user_email'
                    />
                </div>

                <div class="form-field">
                    <input
                        required=""
                        placeholder="Subject"
                        class="input-field"
                        type="text"
                        name='subject'
                    />
                </div>

                <div class="form-field">
                    <textarea
                        required=""
                        placeholder="Message"
                        cols="30"
                        rows="3"
                        class="input-field"
                        name='message'
                    ></textarea>
                </div>

                <input type="submit" value="Send" className="sendMessage-btn"/>
            </form>        
    </div>
</div>
    </div>
  </div>
</section>


  )
}

export default Contact