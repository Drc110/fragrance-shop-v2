import { Box, Button, Drawer } from "@mui/material"
import { useState } from "react"
import CartDrawer from "./CartDrawer.tsx"
import { Link } from "react-router-dom"

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Box sx={{minHeight: "100px", bgcolor: "GrayText", mb: "20px"}}>
        <Link to="/main">
          Sigma Fragrance
        </Link>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
          <CartDrawer />
        </Drawer>
        <Link to="/user">
          Вход
        </Link>
      </Box>
    </>
  )
}

export default Header