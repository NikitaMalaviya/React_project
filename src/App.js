import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import AccordianData from "./Components/AccordianData";



function App() {
  return (
    <>

      <Navbar />
      <div className="row new-form"><Form /></div>
      <AccordianData />
    </>
  );
}

export default App;