// SearchBar
// Controls allowing visitors to search GitHub
// Components can be small! 
// This component should include a text input field with the placeholder text "Search GitHub."

// self
// const SearchBar = () => {
//     return (
//         <input type="search" placeholder="Search GitHub" />
//     )
// }

// solution
const SearchBar = () => {
  return (
    <form className="SearchBar">
      <input type="text" placeholder="Search GitHub"></input>
    </form>
  );
};


export default SearchBar