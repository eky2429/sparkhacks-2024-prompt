import React, {useRef,useState} from 'react'
import{ useAuth } from '../contexts/AuthContxt'


export default function LogInPage() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {loginUser, currentUser} = useAuth()
  const [error,setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    try{
        setError('')
        setLoading(true)

        await loginUser(emailRef.current.value, passwordRef.current.value);
        console.error('User created', currentUser)

    } catch(error) {
      console.error('Error logging user', error)
        setError('Cant log in')
    } finally{
      setLoading(false);
    }
  }

  return (
    <>
      <h1>Log In</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit} className="Login">
        <label>Email: </label>
        <input type = "email" ref ={emailRef} required/> <br/>
        <label>Password: </label>
        <input type = "password" ref ={passwordRef} required/> <br/>
        <button disabled={loading} type="submit">{loading ? 'Logging In...' : 'Log In'}</button>
      </form>

    </>
  )
}