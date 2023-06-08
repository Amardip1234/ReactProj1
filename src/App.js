import Cards from "./Cards";
import Sdata from "./Sdata";
function App() {
  return (
    <>
      <h1>List of Top 5 Netflix Series</h1>
      <div className="container">
        
        
      </div>
      {Sdata.map(function (val){
        return  <Cards
          key = {val.id}
          img={val.img}
          Title={val.Title}
          Sname={val.Sname}
          link={val.link}
        />
      })}
    </>
  );
}
export default App;
