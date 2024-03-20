import { useState } from "react"
import CardWidget from "../widgets/Card.tsx"
import { Box, Stack} from "@mui/material"
import { useFirstFetchQuery } from "../services/api/api.ts"
import OptionsDrawer from "./OptionsDrawer.tsx"
import { selectOptions } from "../services/slices/optionsSlice.ts"
import { useSelector } from "react-redux"

function DisplayItems() {
  const [currentPage, setcurrentPage] = useState(1)
  const {gender, search, sortOption} = useSelector(selectOptions)

  const { data, error, isLoading } = useFirstFetchQuery({"page": currentPage, "gender": gender, "sort" : sortOption, "searchPromt" : search})

  //console.log("MAIN RENDERED") //rerendered on addtocart btn on card

  function loadNextPage(){
    setcurrentPage(currentPage + 1)
  }

  return (
    <>
      <Stack direction={"column"} spacing={"50px"}>
        
        <OptionsDrawer setFirstPage = {() => setcurrentPage(1)}/>

        <Box>
          <Box sx={{ //mixin
            display: "grid",
            gridTemplateColumns: {xs : "50% 50%", sm : "33% 33% 33%", md : "25% 25% 25% 25%", lg : "20% 20% 20% 20% 20%"},
            justifyItems: "center",
            minHeight: "600px"
          }}>
            {data?.map(el => (
              <CardWidget key={el.title}
                {...el}
              />))
            }
          </Box>
          <button onClick={loadNextPage}>Загрузить ещё</button>
        </Box>
      </Stack>
    </>
  )
}

export default DisplayItems
