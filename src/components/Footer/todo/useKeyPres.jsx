import { useEffect } from "react";
import { useState } from "react"
import { useDispatch } from "react-redux";

export const useKeyPress = (keyTarget) => {
    const [isKeyPressed, setIsKeyPressed] = useState(false);

    const downHandler = ({key}) => {
        if(key === keyTarget) setIsKeyPressed(true)
        console.log('enter');
    }

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        return () => {
            window.removeEventListener('keydown', downHandler);
        }
    }, [])

    
}