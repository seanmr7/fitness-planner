import { FaGithub } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer items-center bg-neutral p-4 justify-self-end'>
      <div className='items-center grid-flow-col'>
        <Link to='/about'>About this project</Link>
      </div>
      <div className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        <a
          href='https://github.com/seanmr7'
          target='_blank'
          rel='noreferrer'
          className='flex mx-2'>
          <FaGithub className='self-center' />
          <p className='ml-1'>Github</p>
        </a>
        <a
          href='https://seanrportfolio.com'
          target='_blank'
          rel='noreferrer'
          className='flex mx-2'>
          <FaLink className='self-center' />
          <p className='ml-1'>Portfolio</p>
        </a>
      </div>
    </footer>
  )
}

export default Footer
