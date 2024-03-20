import { Box } from "@mui/material"
import Header from "./entities/Header.tsx"
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from "./pages/MainLayout.tsx"
import FavoritePage from "./pages/FavoritePage.tsx"
import { Provider } from "react-redux"
import { store } from './services/store.tsx'
import UserPage from "./pages/UserPage.tsx"

function App() {
  return (
    <>
      <Provider store={store}>
        <Header/>
          <Box sx={{mx: "50px"}}>
            <Routes>
              <Route path='/' element={<Navigate to='/main'/>}/>
              <Route path="/main/*" Component={MainLayout}/>
              <Route path="/favorite" Component={FavoritePage}/>
              <Route path="/user" Component={UserPage}/>
            </Routes>
          </Box>
      </Provider>
    </>
  )
}

export default App
