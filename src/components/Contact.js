import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <input type='text' className='border border-black p-2 m-2' placeholder='name' />
        <input type='text' className='border border-black p-2 m-2' placeholder='message' />
        <button className='border border-black p-2 m-2 rounded-lg bg-gray-100'>Submit</button>
      </form>

    </div>
  )
}

export default Contact;