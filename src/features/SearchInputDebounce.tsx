import { useState, useRef, ChangeEvent, useEffect } from "react";
import { debounce } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeStateSearch } from "../services/slices/optionsSlice.ts";

function DebouncedInput() {
  const [initValue, setInitValue] = useState("");
  const onChangeRef = useRef<any>();
  const dispatch = useDispatch()

  function targetFunction(value : string){
    dispatch(changeStateSearch({searchPromt: value}))
    //console.log("INPUT TARGET FUNC TRIGGERED WITH:", value)
  }

  useEffect(() => {
    onChangeRef.current = debounce(targetFunction, 250)
  }, [])

  function handleInputChange(evt : ChangeEvent<HTMLInputElement>){
    setInitValue(evt.target.value)
    onChangeRef.current?.(evt.target.value)
  }

  return (
    <input type="text" value={initValue} onChange={handleInputChange} />
  );
}

export default DebouncedInput;