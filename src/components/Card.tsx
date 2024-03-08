import { Box, Button, Typography } from '@mui/material';
import Iitem from '../services/Iitems.ts';
import { useDispatch } from "react-redux"
import { addtoCart } from "../services/slices/cartSlice.ts"

function MultiActionAreaCard({title, brand, price, imageUrl, volume, gender, description} : Iitem) {
  const dispatch = useDispatch()
  
  return (
    <Box sx={{width: "80%", padding: 2, bgcolor: "rgba(239, 236, 231, 1)", maxHeight: "20em", mb: 2}}>
      <Box sx={{width: "100%", height: "60%", bgcolor: "white", mb: 1}}>
        <img src = {imageUrl} alt="" style={{objectFit: "scale-down", width: "100%", height: "100%"}}/>
      </Box>
      <Typography variant='h5' align='center'>
        {brand}
      </Typography>
      <Typography variant='h6' align='center'>
        {title}
      </Typography>
      <Box sx={{display: "flex", mt: 1, justifyContent: "space-between"}}>
        <Box>
          <Typography>
            Парфюмерная вода
          </Typography>
          <Typography>
            От: {price[0]}
          </Typography>
        </Box>
        <Button onClick={() => dispatch(addtoCart({title : title, brand : brand, price : price, imageUrl : imageUrl, volume : volume, gender : gender, description : description}))}>
          Купить
        </Button>
      </Box>
    </Box>
  );
}

export default MultiActionAreaCard
