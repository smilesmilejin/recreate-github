import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';
import LoginControls from './components/LoginControls';
import HeroSection from './components/HeroSection';
import NewsletterForm from './components/NewsletterForm';
import StatsBar from './components/StatsBar';
import './App.css';

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
      <div className="top-bar">
        <NavigationBar />
        <div className="site-tools">
          <SearchBar />
          <LoginControls />
        </div>
      </div>
      <HeroSection />
      <NewsletterForm />
      <StatsBar />
    </div>
  );
}


export default App;

