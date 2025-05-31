// NewsletterForm
// Controls allowing visitors to sign up for GitHub
// This component should include:
// a text input field for an email address
// a button that says "Sign up for GitHub."

// self
// const NewsletterForm = () => {
//     return (
//         <section>
//             <input type="email" placeholder="Email address"/>
//             <button>Sign up for GitHub.</button>
//         </section>
//     )
// }


// solution
import './NewsletterForm.css';

const NewsletterForm = () => {
  return (
    <form className="NewsletterForm">
      <input type="text" placeholder="Email address"></input>
      <input type="submit" value="Sign up for GitHub"></input>
    </form>
  );
};



export default NewsletterForm