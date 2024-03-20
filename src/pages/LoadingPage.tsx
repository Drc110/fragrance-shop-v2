import { Box, CircularProgress } from "@mui/material"

function LoadingPage() {
    return (
      <>
        <Box sx={{width: "100%", minHeight: "80vh", textAlign: "center"}}>
            <CircularProgress size={75} sx={{mt: "30vh"}}/>
        </Box>
      </>
    )
  }
  
export default LoadingPage