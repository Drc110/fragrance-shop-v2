import { Box, Breadcrumbs, Link } from "@mui/material"
import Header from "./components/Header.tsx"
import { Route, Routes } from 'react-router-dom'
import MainPage from "./pages/MainPage.tsx"
import FavoritePage from "./pages/FavoritePage.tsx"
import { Provider } from "react-redux"
import { store } from './services/store.js'

function App() {
  return (
    <>
      <Provider store={store}>
        <Header/>
          <Box sx={{mx: "50px"}}>
            <Breadcrumbs sx={{mb: "10px"}}>
              <Link underline="hover" color="inherit" href="/">
                Каталог
              </Link>
              <Link underline="hover" color="inherit" href="/favorite">
                Любимые 
              </Link>
            </Breadcrumbs>
            
            <Routes>
              <Route path="/" Component={MainPage}/>
              <Route path="/favorite" Component={FavoritePage}/>
            </Routes>
          </Box>
      </Provider>
    </>
  )
}

export default App
