import CategoryChart from "./CategoryChart";
import FileUpload from "./FileUpload";
import "./styles.css";

function App() {

  return (

    <div className="container">

      <h1 className="title">
        Pet Service Dashboard
      </h1>

      <FileUpload />

      <CategoryChart />

    </div>

  );

}

export default App;