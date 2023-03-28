import Button from "./components/Button/Button"
import FetchData from "./components/FetchData"
import Header from "./components/Header"

function App() {

  return (
    <div className="text-center">
      <Header></Header>
      <Button>Sort By Date</Button>
      <FetchData></FetchData>
    </div>
  )
}

export default App
