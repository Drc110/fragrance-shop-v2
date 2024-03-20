import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { selectCart } from "../services/slices/cartSlice.ts"
import CardInDrawer from "../widgets/CardInDrawer.tsx"


function CartDrawer() {
  const {items, price} = useSelector(selectCart)

  return (
    <>
      <Box sx = {{ width: {xs : "100%", md: "35vw"}, height: "100%"}}>
        <Typography>
          Корзина!
        </Typography>

        {items.length ? (
          <>
            {items.map(el => (
              <CardInDrawer key={el.id + "-" + el.price} {...el} />
            ))}
          </>
        ) : (
          <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}> {/* widther than fullfilled */}
            <Typography variant='h4' align="center">
              Корзина пуста!
            </Typography>
            <Typography variant='h5' align="center">
              Похоже вы ничего не добавили!
            </Typography>
          </Box>
        )}
        Итого: {price} руб.
      </Box>
    </>
  )
}

export default CartDrawer