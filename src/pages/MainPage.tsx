import {useEffect, useState } from "react"
import Card from "../components/Card.tsx"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setItems } from "../services/slices/itemsSlice.ts"
import { selectItems } from "../services/slices/itemsSlice.ts"
import { Box, Stack} from "@mui/material"
import OptionsDrawer from "../components/OptionsDrawer.tsx"

function MainPage() {
  const dispatch = useDispatch()
  const items = useSelector(selectItems) 
  const [currentPage, setcurrentPage] = useState(1)

  async function fetchPageOfItems(page : number) {
    return await axios.get(`https://cdf7fb39c6b61866.mokky.dev/items?page=${page}`).then((response) => response.data.items)
  }
  
  /* function changeCategory(index : number) {
    fetchPageOfItems(1, index).then(data => dispatch(setItems(data)))
    setActiveCategoryIndex(index)
    setcurrentPage(1)
  }

  function changePage() {
    fetchPageOfItems(currentPage + 1, activeCategoryIndex).then(data => dispatch(setItems(data)))
    setcurrentPage(currentPage + 1)
  } */
  
  useEffect(() => {
    fetchPageOfItems(currentPage).then(data => dispatch(setItems(data)))
  }, [])

  return (
    <>
      <Stack direction={"column"} spacing={"50px"}>
        
        <OptionsDrawer/>

        <Box>
          <Box sx={{ //mixin
            display: "grid",
            gridTemplateColumns: {xs : "50% 50%", sm : "33% 33% 33%", md : "25% 25% 25% 25%", lg : "20% 20% 20% 20% 20%"},
            justifyItems: "center",
            minHeight: "600px"
          }}>
            {items.map(el => (
              <Card key={el.title}
                {...el}
              />))
            }
          </Box>
        </Box>
      </Stack>
    </>
  )
}

export default MainPage
