
import { useEffect, useState } from "react";
import io from 'socket.io-client'
let socket:any;

const useNote = () => {
    const [input, setInput] = useState('')

    useEffect(() => {
        socketInitializer()
    }, [])

    const socketInitializer = async () => {
        await fetch('/api/socket');
        socket = io()

        socket.on('connect', () => {
            console.log('connected')
        })

        socket.on('update-input', (message:any) => {
            console.log(message)
            setInput(message)
        })
    }

    const onChangeHandler = (e:any) => {
        setInput(e.target.value)
        socket.emit('input-change', e.target.value)
    }

    return {input, onChangeHandler}
}   

export default useNote;