import React from 'react'

export default function Register() {
  return (
    <>
    <div className="global-container">
	<div className="card login-form">
	<div className="card-body">
		<h3 className="card-title text-center">Register </h3>
		<div className="card-text">
			
			{/* <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div>  */}
			<form>
				
				<div className="form-group">
					<label htmlfor ="name">Name</label>
					<input type="text" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				</div>
                <div className="form-group">
					<label htmlfor="exampleInputEmail1">Email address</label>
					<input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				</div>
                <div className="form-group">
					<label htmlfor="exampleInputPassword1">Password</label>
					{/* <a href="#" style="float:right;font-size:12px;">Forgot password?</a> */}
					<input type="password" className="form-control form-control-sm" id="exampleInputPassword1"/>
				</div>
				<div className="form-group">
					<label htmlfor="confirm-password"> Conform Password</label>
					{/* <a href="#" style="float:right;font-size:12px;">Forgot password?</a> */}
					<input type="password" className="form-control form-control-sm" id="exampleInputPassword1"/>
				</div>
				<button type="submit" className="btn btn-primary btn-block">Sign in</button>
				
				<div className="sign-up">
					Don't have an account? <a href="#">Create One</a>
				</div>
			</form>
		</div>
	</div>
</div>
</div></>
  )
}
