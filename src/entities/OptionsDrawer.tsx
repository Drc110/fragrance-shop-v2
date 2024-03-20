import { Box, Button, Drawer, Grid, List, ListItem, MenuItem, Select, SelectChangeEvent, Slider, Stack, Typography } from "@mui/material"
import { useState } from "react"
import DebouncedInput from "../features/SearchInputDebounce.js"
import { useDispatch } from "react-redux"
import { changeStateSort, changeStateGender } from "../services/slices/optionsSlice.js"


function OptionsDrawer({setFirstPage} : {setFirstPage: () => void}) {
    const [openDrawer, setOpenDrawer] = useState(false)
    const [price, setPrice] = useState([0, 100])
    const [sortFunc, setSortFunc] = useState(' ')
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
    const categories = ['Все ароматы', 'Мужские', 'Женские', 'Унисекс']

    //const {gender, search, sortOption} = useSelector(selectOptions)
    const dispatch = useDispatch()

    function handleChangePrice(_: Event, newValue: number | number[]) {
      setPrice(newValue as number[])
    }

    function toggleDrawer(){
      setOpenDrawer(!openDrawer)
    }

    function handleChangeCategory(index : number) {
      setActiveCategoryIndex(index)
      dispatch(changeStateGender({gender: index}))
      setFirstPage()
    }

    function handleChangeSort(evt: SelectChangeEvent<string>) {
        setSortFunc(evt.target.value as string);
        dispatch(changeStateSort({sortOption: evt.target.value as string}))
    }

    return (
        <>
        <Grid container>
          
          <Button onClick={toggleDrawer}>Open</Button>
          <Drawer open={openDrawer} onClose={toggleDrawer} anchor="left">
            <Box sx={{minWidth: "30vw"}}>
              <List sx = {{padding: "0", maxWidth: "100%", mb: 2}}>
                {categories.map((el, index) => (
                  <ListItem key={el} sx = {{height: 40, bgcolor: "rgba(216, 216, 216, 1)", mr: 3}} style = {index == activeCategoryIndex ? {color: "white", backgroundColor : "rgb(54, 54, 54)"} : {}} onClick={() => {handleChangeCategory(index)}}>
                    {el}
                  </ListItem>
                ))}
              </List>

              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography>
                  от {price[0]}
                </Typography>
                <Typography>
                  до {price[1]}
                </Typography>
              </Stack>

              <Slider arial-label = 'price' step = {10} marks value={price} onChange={handleChangePrice} component={"span"}/>  {/* valueLabelDisplay = {() => func to disp} // onChangeCommitted*/}

              {/* list for brand  */}
            </Box>
          </Drawer>

          <Select  labelId="sort" id="demo-simple-select" value={sortFunc} label="sort" onChange={handleChangeSort}>
            <MenuItem value={' '}>По популярности</MenuItem>
            <MenuItem value={'price'}>По возрастанию цены</MenuItem>
            <MenuItem value={'-price'}>По убыванию цены</MenuItem>
            <MenuItem value={'discount'}>По скидке</MenuItem>
          </Select>
          
          {/* all items <number> */}

          <Grid item>
            <DebouncedInput/>
          </Grid>
          
        </Grid>
        </>
    )
}

export default OptionsDrawer
