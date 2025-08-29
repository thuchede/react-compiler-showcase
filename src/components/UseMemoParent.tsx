import {memo, useCallback, useMemo, useState} from "react";
import {getRandomHexColor} from "../utils/getRandomHexColor.ts";
import {Container} from "./Container.tsx";

export const UseMemoParentComponent = () => {
    const [count, setCount] = useState(0)
    const randomNumber = Math.random()
    const [prop, setProp] = useState(Math.random().toFixed(2))
    const bg = getRandomHexColor()
    const handleClick = useCallback(() => {console.log(`Yay!`)}, [])
    const result = useMemo(() => mightComputeForQuiteSomeTime(), [])

    return <section style={{backgroundColor: bg}}>
        <h1>UseMemo Parent Component</h1>
        <p>This is a parent component</p>
        <p>Random value: {randomNumber}</p>
        <p><b>Result: {result}</b></p>
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
        <MemoChildComponent/>
        <UseMemoChildComponentWithProp
            prop={prop}
            handleClick={handleClick}
        />
    </section>
}

const MemoChildComponent = memo(() => {
    const rand = Math.random()
    const bg = getRandomHexColor()
    return <Container>
        <article style={{backgroundColor: bg}}>
            <h2>Child Component A (no props)</h2>
            <p>Random value: {rand}</p>
        </article>
    </Container>
})


const UseMemoChildComponentWithProp = memo(({
        prop,
        handleClick
    }: {
        prop: string,
        handleClick?: () => void
    }) => {
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


const mightComputeForQuiteSomeTime = () => {
    console.log('Computing for quite some time...')
    // Simulate a heavy computation
    let result = 0
    for (let i = 0; i < 1e9; i++) {
        result += Math.sqrt(i)
    }
    console.log('Computation done.')
    // return result + Math.random()
    return result
}
