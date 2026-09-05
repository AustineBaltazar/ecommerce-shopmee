import { Link } from 'react-router-dom'

export default function Register() {
	return (
		<section className="auth-section">
			<div className="auth-card">
				<span className="eyebrow">Join ShopMee</span>
				<h1>Create your account</h1>
				<p>Register to save your details and shop with us.</p>

				<form className="auth-form">
					<label htmlFor="register-name">Full name</label>
					<input id="register-name" name="name" type="text" placeholder="Your full name" required />

					<label htmlFor="register-email">Email address</label>
					<input id="register-email" name="email" type="email" placeholder="you@example.com" required />

					<label htmlFor="register-password">Password</label>
					<input id="register-password" name="password" type="password" placeholder="Create a password" required />

					<button type="submit" className="auth-button">Create account</button>
				</form>

				<p className="auth-footer">
					Already have an account? <Link to="/login">Log in</Link>
				</p>
			</div>
		</section>
	)
}
