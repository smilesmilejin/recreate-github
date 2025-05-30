import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';
import LoginControls from './components/LoginControls';
import HeroSection from './components/HeroSection';
import NewsletterForm from './components/NewsletterForm';
import StatsBar from './components/StatsBar';

// self
// function App() {
//   return (
//     <main>
//         <NavigationBar></NavigationBar>
//         <SearchBar></SearchBar>
//         <LoginControls></LoginControls>
//         <HeroSection></HeroSection> 
//         <NewsletterForm></NewsletterForm>
//         <StatsBar></StatsBar>     
//     </main>
//   );
// }

// solution
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <SearchBar />
      <LoginControls />
      <HeroSection />
      <NewsletterForm />
      <StatsBar />
    </div>
  );
}


export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
