import { Box, Button, Typography } from '@mui/material';
import Iitem from '../services/interfaces/Iitems.ts'
import { Link } from 'react-router-dom';

function CardWidget({id, title, brand, price, imageUrl, volume, gender, description} : Iitem) {
  
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

        <Link to={`/main/${id}`}>
          <Button>
            Купить
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default CardWidget
