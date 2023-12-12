import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [from_name, setName] = useState('');
    const [email_id, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await emailjs.send('service_2xxhd3m', 'template_mt9dggc',
          { from_name, email_id, message },'QnQYR25vUAQhCK0Rn'
        );
  
        console.log('Email sent:', response);
      } catch (error) {
        console.error('Error sending email:', error);
      }
    };



    return (
        <div className="grid grid-cols-2 max-w-5xl mx-auto">
            <div className="col-span-1">
                <div>
                    <form className='flex flex-col text-xl' onSubmit={handleSubmit}>
                        <label>Name:</label>
                        <input className='border-2 border-[#f71735] w-1/2 rounded-lg' type="text" value={from_name} onChange={(e) => setName(e.target.value)} />

                        <label>Email:</label>
                        <input className='border-2 border-[#f71735] w-1/2 rounded-lg' type="email" value={email_id} onChange={(e) => setEmail(e.target.value)} />

                        <label>Message:</label>
                        <textarea className='border-2 border-[#f71735] w-1/2 rounded-lg' value={message} onChange={(e) => setMessage(e.target.value)} />

                        <button type="submit">Send Email</button>
                    </form>
                </div>
                <div></div>
            </div>
            <div className="col-span-1"></div>
        </div>
    );
    }

export default Contact;