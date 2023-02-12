import Clock from "./Clock"
export default function ClkList({quan = []}){   // default value of array for safety purpose
    return(
        <div>
            { quan.map(() => <Clock key={Math.random()} />) }
        </div>
    )
} 