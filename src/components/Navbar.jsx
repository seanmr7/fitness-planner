import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='navbar flex bg-neutral w-full text-base-content'>
        <div className='flex-1'>
          <Link to='/'>
            <div className='font-semibold text-2xl'>
              <p className='inline'>Fitness Planner</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
