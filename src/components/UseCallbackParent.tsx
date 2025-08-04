import {memo, useCallback, useState} from "react";
import {getRandomHexColor} from "../utils/getRandomHexColor.ts";
import {Container} from "./Container.tsx";

export const UseCallbackParentComponent = () => {
    const [count, setCount] = useState(0)
    const randomNumber = Math.random()
    const [prop, setProp] = useState(Math.random().toFixed(2))
    const bg = getRandomHexColor()
    // const handleClick = () => {
    //     console.log(`Yay!`)
    // }
    // const handleClick = useCallback(() => {console.log(`Yay!${randomNumber}`)}, [randomNumber])

    return <section style={{backgroundColor: bg}}>
        <h1>UseCallback Parent Component</h1>
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
        <UseCallbackChildComponent/>
        <UseCallbackChildComponentWithProp
            prop={prop}
            handleClick={() => {
                console.log(`Yay!`)
            }}
        />
    </section>
}

const UseCallbackChildComponent = memo(() => {
    const rand = Math.random()
    const bg = getRandomHexColor()
    return <Container>
        <article style={{backgroundColor: bg}}>
            <h2>Child Component A (no props)</h2>
            <p>Random value: {rand}</p>
        </article>
    </Container>
})


const UseCallbackChildComponentWithProp = memo(({prop, handleClick}: { prop: string, handleClick?: () => void }) => {
    const randomNumber = Math.random()
    const bg = getRandomHexColor()
    return <Container>
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
})
// TODO: use a function to check the props?
//     , (prevProps, nextProps) => {
//     return prevProps.prop === nextProps.prop
// }
