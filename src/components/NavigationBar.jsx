// # NavigationBar
// # The navigation region of the GitHub landing page
// # This component should list the following navigation items:
// # Why GitHub?
// # Team
// # Enterprise
// # Explore
// # Marketplace
// # Pricing

// import './StudentList.css';
// import './NavigationBar.css';

// Self
// const NavigationBar = () => {
//     return (
//         <section className="nav-section">
//             <p>Why Github?</p>
//             <p>Team</p>
//             <p>Enterprise</p>
//             <p>Explore</p>
//             <p>Marketplace</p>
//             <p>Pricing</p>
//         </section>
//     )
// }

// Solution
const NavigationBar = () => {
  return (
    <nav className="NavigationBar">
      <ul>
        <li><a href="#">Why Github?</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Enterprise</a></li>
        <li><a href="#">Explore</a></li>
        <li><a href="#">Marketplace</a></li>
        <li><a href="#">Pricing</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar