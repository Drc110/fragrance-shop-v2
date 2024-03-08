import { useState, useMemo, useRef, ChangeEvent, ChangeEventHandler, useCallback, useEffect } from "react";
import { debounce } from "@mui/material";

function DebouncedInput() {
  const [value, setValue] = useState("");
  const onChangeRef = useRef<any>();

  function targetFunction(value : string){
    console.log(value)
  }

  useEffect(() => {
    onChangeRef.current = debounce(targetFunction, 250)
  }, [])

  function handleInputChange(evt : ChangeEvent){
    setValue(evt.target.value)
    onChangeRef.current?.(evt.target.value)
  }

  return (
    <input type="text" value={value} onChange={handleInputChange} />
  );
}

export default DebouncedInput;