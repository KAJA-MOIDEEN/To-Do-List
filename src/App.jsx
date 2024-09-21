import Homepage from "./pages/Homepage"
import ToDoprovider from "./context/ToDoContext"

function App() {
  return (
    <div className="w-full min-h-[100vh] bg-gradient-to-b from-[#bd3ffb] to-[#fc46ef]">
    <ToDoprovider>
    <Homepage/>
    </ToDoprovider>
    </div>
  )
}

export default App