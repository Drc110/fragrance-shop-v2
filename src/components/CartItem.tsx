import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Iitem from '../services/Iitems.ts';

function CardItem({title, brand, price, imageUrl, volume, gender, description} : Iitem) {

  return (
    <Box sx={{width: "80%", height: "16vh", padding: 2, bgcolor: "rgba(239, 236, 231, 1)", mb: 2, display: "flex"}}>
        <Box sx={{height: "100%", aspectRatio: "1/1", bgcolor: "white", mr: 2}}>
            <img src = {imageUrl} alt="" style={{objectFit: "scale-down", width: "100%", height: "100%"}}/>
        </Box>
        <Grid container sx={{width: "100%", bgcolor : "red"}}>
            <Grid item xs={12}>
                Парфюмерная вода
            </Grid>
            <Grid item xs={12}>
                {brand}
            </Grid>
            <Grid item xs={12}>
                {title}
            </Grid>
            <Grid item xs={12}>
            <Stack direction={"row"} spacing={"50px"} alignSelf={"end"} justifyContent={"space-between"}> {/* spacing = unit ("px") */}
                <Stack>
                    <Typography>
                        $volume$
                    </Typography>
                    <Typography>
                        $price$
                    </Typography>
                </Stack>
                <Typography>
                    +-
                </Typography>
            </Stack>
            </Grid>
            
        </Grid>
    </Box>
  );
}

export default CardItem
