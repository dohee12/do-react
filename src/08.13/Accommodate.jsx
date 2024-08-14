import React,{ useState, useEfect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("========================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });
    
}