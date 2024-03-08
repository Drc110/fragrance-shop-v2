import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { selectCart } from "../services/slices/cartSlice.ts"
import CardItem from "./CartItem.tsx"

function CartDrawer() {
  const items = useSelector(selectCart)

  return (
    <>
      <Box sx = {{ width: {xs : "100%", md: "35vw"}, height: "100%"}}>
        <Typography>
          Корзина!
        </Typography>

        {items.length ? (
          <>
            {items.map(el => (
              <CardItem key={el.title} {...el}></CardItem>
            ))}
          </>
        ) : (
          <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}> {/* widther than fullfilled */}
            <Typography variant='h4' align="center">
              Корзина пуста!
            </Typography>
            <Typography variant='h5' align="center">
              Похоже вы ничего не добавили, ебло
            </Typography>
          </Box>
        )}
      </Box>
    </>
  )
}

export default CartDrawer