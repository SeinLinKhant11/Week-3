function App() {
  return (
    <div className="login-container">
      <h1>Welcome Back</h1>
      <p>Please login to your account</p>

      <form>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default App