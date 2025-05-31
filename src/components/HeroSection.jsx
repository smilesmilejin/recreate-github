// HeroSection
// This component should include the following text:
// Where the world builds software
// Millions of developers and companies build, ship, 
// and maintain their software on GitHub—the largest and most advanced development platform in the world.

// self
// const HeroSection = () => {
//     return (
//         <section>
//             <p>
//                 Where the world builds software
//             </p>
//             <p>
//                 Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.
//             </p>
//         </section>
//     )
// }

// solution
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <h2>Where the world builds software</h2>
      <h3>Millions of developers and companies build, ship, and maintain their
        software on GitHub—the largest and most advanced development platform
        in the world.</h3>
    </div>
  );
};

export default HeroSection