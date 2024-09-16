import { useState } from "react"

export function useInput(initialVal, validateFn) {
    const [inputVal, setInputVal] = useState(initialVal)
    const [isEdited, setIsEdited] = useState(false)

    function onchangeVal(e) {
        setInputVal(e.target.value)
    }
    function onBlur() {
        setIsEdited(true)
    }

    const isInvalid = isEdited && !validateFn(inputVal)

    return {
        inputVal,
        onchangeVal,
        onBlur,
        isInvalid
    }
}