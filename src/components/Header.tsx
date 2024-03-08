import { Box, Button, Drawer } from "@mui/material"
import { useState } from "react";
import CartDrawer from "./CartDrawer.tsx";

function Header() {
  const [open, setOpen] = useState(false); //лишнее
/*   const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  }; */

  return (
    <>
      <Box sx={{minHeight: "100px", bgcolor: "GrayText", mb: "20px"}}>
        Sigma Fragrance
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
          <CartDrawer />
        </Drawer>
      </Box>
    </>
  )
}

export default Header