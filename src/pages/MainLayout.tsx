import { Route, Routes } from "react-router-dom"
import DisplayItems from "../entities/DisplayItems.tsx"
import CardPage from "./CardPage.tsx"

function MainLayout() {

  return (
    <>
      <Routes>
        <Route path="/" Component={DisplayItems}/>
        <Route path="/:id" Component={CardPage}/>
      </Routes>
    </>
  )
}

export default MainLayout
