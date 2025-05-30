// LoginControls
// Controls allowing visitors to Sign In to GitHub or Sign Up for GitHub
// This component should include these links:
// Sign in
// Sign up

// self
// const LoginControls = () => {
//     return (
//         <section>
//             <p>Sign in</p>
//             <p>Sign up</p>           
//         </section>
//     )
// }

// solution
const LoginControls = () => {
  return (
    <ul className="LoginControls">
      <li><a href="#">Sign in</a></li>
      <li><a href="#">Sign up</a></li>
    </ul>
  );
};


export default LoginControls