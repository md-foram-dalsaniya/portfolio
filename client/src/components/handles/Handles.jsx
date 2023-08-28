import React from 'react'
import './Handles.css'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

const Handles = () => {
  return (
    <section className='socials'>
      <a href="https://www.linkedin.com/in/dalsaniya-foram-223a2624b/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
      {/* <a href="https://twitter.com/kshitijweb3?lang=en" target='_blank' rel="noopener noreferrer"><AiFillTwitterSquare className='icon' /></a> */}
      <a href="https://github.com/md-foram-dalsaniya" target='_blank' rel="noopener noreferrer"><FaGithubSquare className='icon' />
      </a>


    </section>
  )
}

export default Handles
