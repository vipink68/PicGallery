import { Link } from "react-router-dom"
import './signup.css'
import logo from '../images/logo.png'

export default function Signup() {

    return(
      <>
    <div id="signup_div" class="p-5">
        <div id="innerDiv" style={mystyle1} class="m-auto rounded p-5 text-center">
            <main>     
                <form method="POST" class="form-signin w-100">
                    <img class="mb-4" style={mystyle2} src={logo} alt="Logo" width="50" height="50" />
                    <h1 class="h3 mb-3 font-weight-normal">Signup</h1>
                    
                    
                    <input type="text" name="fname" id="fname" class="form-control " placeholder="First Name" required autofocus />
                    <input type="text" id="lname" name="lname" class="form-control " placeholder="Last Name" required autofocus />
                    <input type="email" name="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                    <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required />
                    <input type="password" name="cpassword" id="confirmPassword" class="form-control" placeholder="Confirm Password" required />
                    
                    <button class="btn btn-lg btn-primary btn-block" id="submitbtn" type="submit">Signup</button>
                </form>
                <p class="text-center">Already have an account, <Link class="link" to="/login">login</Link></p>
            </main>
        </div>
    </div>
      </>
    )
  }
  
  const mystyle1 = {
    border: '1px solid gray',
    backgroundColor: 'rgb(190, 190, 190)',
    width: '30vw'
  };
  
  const mystyle2 = {
    margin: '0 auto 0 auto',
    display: 'block'
  };
  