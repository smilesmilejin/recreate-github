// StatsBar
// Assorted statistics about GitHub
// This component should include the following text:
// 65+ million Developers
// 3+ million Organizations
// 200+ million Repositories
// 72% Fortune 50

// self
// const StatsBar = () => {
//     return (
//         <section>
//             <p>65+ million Developers</p>
//             <p>3+ million Organizations</p>
//             <p>200+ million Repositories</p>
//             <p>72% Fortune 50</p>
//         </section>
//     )
// }

// solution
const StatsBar = () => {
  return (
    <div className="StatsBar">
      <p><span>65+ million</span> <span>Developers</span></p>
      <p><span>3+ million</span> <span>Organizations</span></p>
      <p><span>200+ million</span> <span>Repositories</span></p>
      <p><span>72%</span> <span>Fortune 50</span></p>
    </div>
  );
};


export default StatsBar