import React from 'react'

const Contact = ({ viewContact }) => {
  return (
    <div className={`contact ${viewContact && 'visible'}`}>
      <p>
        instagram
        <a
          className='insta-link'
          href='https://www.instagram.com/paula_durinova/'
        >
          {' '}
          @pauladurinova
        </a>
      </p>
      <p>pauladurinova (at) gmail.com</p>
    </div>
  )
}

export default Contact
