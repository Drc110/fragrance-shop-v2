import { ChangeEvent, useState } from "react"

function rangeInput({ setParentState, defaultAmount } : {setParentState: (num: number) => void; defaultAmount : number}){
    const [initAmount, setInitAmount] = useState(String(defaultAmount))

    const changeAmountEvt = (evt : ChangeEvent<HTMLInputElement>) => {
        const num = Number(evt.target.value)
        if(num < 1){
            setInitAmount('1')
            setParentState(1)
            return
        }else if (num > 99){
            setInitAmount('99')
            setParentState(99)
            return
        }else{
            setInitAmount(evt.target.value.split('.')[0])
            setParentState(Math.floor(num))
            return
        }
    }
    
    return (
        <input type="number" min="1" max="99" value={initAmount} onChange={(evt) => {setInitAmount(evt.target.value)}} onBlur={changeAmountEvt}/>
    )
}

export default rangeInput

/* if(num >= 1 && num <= 99){
            setAmount(evt.target.value)
        }else{
            setAmount('1')
        }
        setParentState(num) */