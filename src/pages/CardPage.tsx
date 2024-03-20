import { Link, useLocation } from "react-router-dom"
import { useFetchOneItemQuery } from "../services/api/api.ts"
import { Box, Stack, Typography, RadioGroup, Radio, FormControl, FormControlLabel } from "@mui/material"
import { ChangeEvent, useState } from "react"
import RangeInput from "../features/RangeInput.tsx"
import { useDispatch } from "react-redux"
import { addtoCart } from "../services/slices/cartSlice.ts"
import LoadingPage from "./LoadingPage.tsx"

function CardPage(){ //no Exclamation marks but data.length? 
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const { data, error, isLoading } = useFetchOneItemQuery({"id": id})
    const [amount, setAmount] = useState(1)
    const [activeIndex, setActiveIndex] = useState(0)
    const dispatch = useDispatch()

    function handleChange(evt : ChangeEvent<HTMLInputElement>, value: string){ /* !!!!!! */
        setActiveIndex(Number(evt.target.value))
        console.log(value)
    }

    return (
        <>
            {isLoading ? (
                    <>
                        <LoadingPage/>
                    </>
                ) : (
                    <>
                    <Box>
                        <Link to="/main">
                            НА ГЛАВНУЮ
                        </Link>
                    </Box>
                    <Stack direction={"row"}>
                        <Box>
                            <img src={data!.imageUrl} alt="" />
                        </Box>
                        <Box width={"100%"}>
                            <Typography>{data!.brand + " " + data!.title}</Typography>
                            <Stack direction={"row"} minHeight={400}>
                                <Box width={"50%"}>
                                    {/* кружки аромата */}
                                </Box>
                                <Box width={"50%"}>
                                    <FormControl sx={{width: "100%"}}>
                                        <RadioGroup defaultValue={0} onChange={handleChange}> {/* вынести в дочерний */}
                                            {data!.volume.map((el, index) => 
                                                <FormControlLabel key = {index} value={index} control={<Radio />} disableTypography={true} label={
                                                    <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
                                                        <Typography>
                                                            {el}, мл.
                                                        </Typography>
                                                        <Typography>
                                                            {data!.price[index]}, руб.
                                                        </Typography>
                                                    </Stack>
                                                } />
                                            )}
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                            </Stack>
                            <Box padding={2}>
                                <Box bgcolor={"gray"} minHeight={50}>
                                    <RangeInput setParentState={(num : number) => setAmount(num)} defaultAmount={amount} />
                                    <button onClick={() => dispatch(addtoCart({...data, "price": data?.price[activeIndex], "volume": data?.volume[activeIndex], "amount": amount}))}> {/* not data */}
                                        В корзину
                                    </button>
                                </Box>
                            </Box>
                        </Box>
                    </Stack>
                    <Box>
                        <Typography>
                            {data!.description}
                        </Typography>
                    </Box>
                    </>
                )
            }
        </>
    )
}

export default CardPage