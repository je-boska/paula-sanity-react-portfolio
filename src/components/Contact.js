import React from 'react'

const Contact = ({ viewContact }) => {
  return (
    <div className={`contact ${viewContact && 'visible'}`}>
      <p>
        instagram
        {/* <i className='insta-link fab fa-instagram'></i> */}
        <a
          className='insta-link'
          href='https://www.instagram.com/paula_durinova/'
        >
          {' '}
          @pauladurinova
        </a>
      </p>
      <p>pauladurinova (at) gmail.com</p>
      {/* <a
        className='resume-button'
        href='https://res.cloudinary.com/dpguh80ki/image/upload/v1600757206/paula_durinova_resume_0762bbf911.pdf'
        download=''
      >
        <div>
          resumé&nbsp;
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='15'
            height='15'
            viewBox='1 -2 20 20'
            fill='#ffffff'
          >
            <title>download</title>
            <path d='M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z'></path>
            <path d='M10 15l5-6h-4V1H9v8H5l5 6z'></path>
          </svg>
        </div>
      </a> */}
    </div>
  )
}

export default Contact
