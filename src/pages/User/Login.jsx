import { Link } from 'react-router-dom'

export default function Login() {
	return (
		<section className="auth-section">
			<div className="auth-card">
				<span className="eyebrow">Welcome back</span>
				<h1>Log in to ShopMee</h1>
				<p>Access your account and continue shopping.</p>

				<form className="auth-form">
					<label htmlFor="login-email">Email address</label>
					<input id="login-email" name="email" type="email" placeholder="you@example.com" required />

					<label htmlFor="login-password">Password</label>
					<input id="login-password" name="password" type="password" placeholder="Enter your password" required />

					<button type="submit" className="auth-button">Log in</button>
				</form>

				<p className="auth-footer">
					Don't have an account? <Link to="/register">Create one</Link>
				</p>
			</div>
		</section>
	)
}
