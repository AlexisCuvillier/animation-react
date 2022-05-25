import React, { useEffect, useRef, useState } from 'react'
import { useTransition, animated } from 'react-spring'
import './StateAnim.css'
import { v4 as uuidv4 } from 'uuid'

export default function StateAnim() {

    const [firstDisplay, setFirstDisplay] = useState(true)

    /* A timer that will set the firstDisplay state to false after 1 second. */
    useEffect(() => {
        setTimeout(() => {
            setFirstDisplay(false)
        }, 1000)
    }, [])

    const [inputData, setInputData] = useState([
        {
            id: uuidv4(),
            txt: "Chopin"
        },
        {
            id: uuidv4(),
            txt: "Mozart"
        },
        {
            id: uuidv4(),
            txt: "Bach"
        },
    ]);

    const inputRef = useRef()

    const handleData = e => {

        e.preventDefault()

        const newObj = {
            id: uuidv4,
            txt: inputRef.current.value
        }

        setInputData([...inputData, newObj])


        inputRef.current.value = ""
    }

    const listTransitions = useTransition(inputData, {
        from: { opacity: 0, tranform: 'translateY(10px)' },
        enter: { opacity: 1, tranform: 'translateY(0px)' },
        key: inputData.map((item) => item.id)
    })

    // useEffect(() => {
    //     console.log(inputRef);
    // }, [])

    return (
        <form onSubmit={handleData}>
            <label htmlFor="piano">Renseignez vos pianistes favoris.</label>
            <input ref={inputRef} type="text" id='piano' />

            {firstDisplay ? (
                <ul>
                    {inputData.map((item) => (
                        <li key={item.id}>{item.txt}</li>

                    ))}
                </ul>
            ) : (
            <ul>
                {listTransitions((styles, item) => {
                    return <animated.li style={styles}>
                        {item.txt}
                    </animated.li>
                })}
            </ul>
            )}


        </form>
    )
}
