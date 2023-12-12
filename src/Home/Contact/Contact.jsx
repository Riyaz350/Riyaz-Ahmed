import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [from_name, setName] = useState('');
    const [email_id, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const links = "bg-white text-sm lg:text-base  text-[#f71735] border-2 border-[#f71735] p-2 rounded-lg hover:bg-[#f71735] hover:text-white lg:w-1/4 flex justify-center items-center lg:gap-2"

  
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
        <div className="lg:grid grid-cols-2 max-w-5xl mx-auto md:border-4 mt-2  border-[#f71735] p-2 lg:p-10">
            <div className="col-span-1 flex flex-col justify-center text-xl lg:text-3xl gap-10 ">
                <p className='text-center lg:text-left'>{"I'm"} always up for a conversation</p>
                <div className='flex flex-col gap-2  '>
                    <div className='flex gap-2 items-center justify-center lg:justify-start'><img className='w-fit' src="https://i.ibb.co/2ZDZ2kW/icons8-email.gif" alt="" /><p>Email: skriyaz3582@gmail.com</p></div>
                    {/* <a target="_blank" href="https://icons8.com/icon/2FxDGcmY6mE9/letter">Email</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                    <div className='flex gap-2 items-center justify-center lg:justify-start '><img className='w-fit' src="https://i.ibb.co/K9G5Cw5/icons8-address.gif" alt="" /><p>Address: Brahmanbaria, Bangladesh</p></div>
                    {/* <a target="_blank" href="https://icons8.com/icon/YKWkIGwDeMJg/address">Address</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                    <div className='flex gap-2 items-center justify-center lg:justify-start'><img className='w-fit' src="https://i.ibb.co/MNL6VT3/icons8-call.gif" alt="" /><p>Phone: +880724439967</p></div>
                    {/* <a target="_blank" href="https://icons8.com/icon/uiCge755lurb/phonelink-ring">Call</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
                </div>
            </div>


            <div className="col-span-1">
                <div>
                    <h1 className='text-xl lg:text-3xl'>Send me a Message...</h1>
                    <form className='flex flex-col items-start text-xl gap-2' onSubmit={handleSubmit}>
                        <label>Name:</label>
                        <input className='border-2 border-[#f71735] w-full  h-[40px] rounded-lg' type="text" value={from_name} onChange={(e) => setName(e.target.value)} />

                        <label>Email:</label>
                        <input className='border-2 border-[#f71735] w-full  h-[40px] rounded-lg' type="email" value={email_id} onChange={(e) => setEmail(e.target.value)} />

                        <label>Message:</label>
                        <textarea className='border-2 border-[#f71735] w-full  rounded-lg' value={message} onChange={(e) => setMessage(e.target.value)} />

                        <button className={links} type="submit">Send Email</button>
                    </form>
                </div>
                <div></div>
            </div>

        </div>
    );
    }

export default Contact;