import { Box, Button, Drawer, Grid, List, ListItem, MenuItem, Select, SelectChangeEvent, Slider, Stack, Typography } from "@mui/material"
import { useState } from "react"
import DebouncedInput from "./SearchInputDebounce.tsx"

function OptionsDrawer() {
    const [openDrawer, setOpenDrawer] = useState(false)
    const [price, setPrice] = useState([0, 100])
    const [sortFunc, setSortFunc] = useState('popularity')
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
    const categories = ['Все ароматы', 'Мужские', 'Женские', 'Унисекс']
    
    function handleChange(_: Event, newValue: number | number[]) {
        setPrice(newValue as number[]);
    }

    function toggleBalls(){
        setOpenDrawer(!openDrawer)
    }

    function changeCategory(index : number) {
        setActiveCategoryIndex(index)
    }

    function handleChangeSort(evt: SelectChangeEvent<string>) {
        setSortFunc(evt.target.value as string);
    }

    return (
        <>
        <Grid container>
          
          <Button onClick={toggleBalls}>Open</Button>
          <Drawer open={openDrawer} onClose={toggleBalls} anchor="left">
            <Box sx={{minWidth: "30vw"}}>
              <List sx = {{padding: "0", maxWidth: "100%", mb: 2}}>
                {categories.map((el, index) => (
                  <ListItem key={el} sx = {{height: 40, bgcolor: "rgba(216, 216, 216, 1)", mr: 3}} style = {index == activeCategoryIndex ? {color: "white", backgroundColor : "rgb(54, 54, 54)"} : {}} onClick={() => changeCategory(index)}>
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

              <Slider label = 'price' value={price} onChange={handleChange} />  {/* valueLabelDisplay = {() => func to disp} */}

              {/* list for brand  */}
            </Box>
          </Drawer>

          <Select  labelId="sort" id="demo-simple-select" value={sortFunc} label="sort" onChange={handleChangeSort}>
            <MenuItem value={'popularity'}>По популярности</MenuItem>
            <MenuItem value={'price'}>По возрастанию цены</MenuItem>
            <MenuItem value={'-price'}>По убыванию цены</MenuItem>
            <MenuItem value={'discount'}>По скидке</MenuItem>
          </Select>
          
          <Grid item>
            <DebouncedInput/>
          </Grid>
          {/* all items <number> */}

        </Grid>
        </>
    )
}

export default OptionsDrawer
