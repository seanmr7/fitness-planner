import { useAuthStatus } from '../hooks/useAuthStatus'

function Home() {
  const { loggedIn, checkingStatus } = useAuthStatus()

  return loggedIn ? <p>User Logged In</p> : <p>Not logged in</p>
}

export default Home
