import SignUpForm from '../components/forms/SignUpForm'

function LandingPage() {
  return (
    <div
      id='landing-page'
      className='h-full font-mono py-3 bg-cover bg-no-repeat bg-center md:bg-left'>
      <div className='bg-slate-800/30 p-2 flex flex-col'>
        <h1 className='text-3xl text-center m-2 font-bold'>Start Your Fitness Journey</h1>
        <p className='text-md'>Choose from preset, proven workout plans.</p>
        <p className='text-md mb-2'>
          Or create your own plan and tailor it to your needs and schedule.
        </p>
        <h2 className='text-xl font-bold'>
          This planner makes tracking your workouts easy and lets you focus on the gym
        </h2>
      </div>
      <SignUpForm />
    </div>
  )
}

export default LandingPage
