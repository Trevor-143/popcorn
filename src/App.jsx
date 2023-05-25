import Search from "./components/search"
import Types from "./components/Types"
import Pages from "./pages/Pages"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="genreMenu" >
          <Types />
        </div>
        <main>
            <div className="side" >
              
            </div>
            <div className="display">
              <Search />
              <Pages />
            </div>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
