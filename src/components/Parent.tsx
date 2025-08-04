import {useState} from "react";
import {getRandomHexColor} from "../utils/getRandomHexColor.ts";
import {Container} from "./Container.tsx";

export const ParentComponent = () => {
    const [count, setCount] = useState(0)
    const randomNumber = Math.random()
    const [prop, setProp] = useState(Math.random().toFixed(2))
    const bg = getRandomHexColor()
    return <section style={{backgroundColor: bg}}>
        <h1>Parent Component</h1>
        <p>This is a parent component</p>
        <p>Random value: {randomNumber}</p>
        <button onClick={() => {
            setCount((count) => count + 1)
        }}>
            count is {count}
        </button>
        <button onClick={() => {
            console.log('nothing is happening')
        }}>
            Do nothing
        </button>
        <button onClick={() => {
            setProp(() => Math.random().toFixed(2))
        }}>
            change prop (current: {prop})
        </button>
        <ChildComponent />
        <ChildComponentWithProp prop={prop}></ChildComponentWithProp>
    </section>
}

const ChildComponent = () => {
    const rand = Math.random()
    const bg = getRandomHexColor()
    return <Container>
        <article style={{backgroundColor: bg}}>
            <h2>Child Component A (no props)</h2>
            <p>Random value: {rand}</p>
        </article>
    </Container>
}


const ChildComponentWithProp = ({prop, handleClick}: {prop: string, handleClick?: () => void}) => {
    const randomNumber = Math.random()
    const bg = getRandomHexColor()
    return  <Container>
        <article style={{backgroundColor: bg}}>
            <h2>Child Component B (with props)</h2>
            <p>Prop value: {prop}</p>
            <p>Random inner value: {randomNumber}</p>
            {
                handleClick && (
                    <button onClick={handleClick}>Do something</button>
                )
            }
        </article>
    </Container>
}

;
