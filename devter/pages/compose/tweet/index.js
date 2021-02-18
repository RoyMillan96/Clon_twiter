import { useState } from "react"
import { addDevit } from 'firebase/client'
import { useRouter } from "next/router"
import styles from "./styles.module.css"
import Layouts from "componentes/Layouts"
import Button from "componentes/Button"
import useUser from "hooks/useUser"

const COMPOSE_STATES = {
    USER_NOT_KNOWN: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,
}

export default function ComposeTweet() {
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState(COMPOSE_STATES)
    const user = useUser()
    const router = useRouter()

    const handleChange = (event) => {
        const { value } = event.target
        setMessage(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setStatus(COMPOSE_STATES.LOADING)
        addDevit({
            avatar: user.avatar,
            content: message,
            userId: user.uid,
            userName: user.username,
        })
            .then(() => {
                router.push("/home")
            })
            .catch((err) => {
                console.error(err)
                setStatus(COMPOSE_STATES.ERROR)
            })
    }

    const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

    return (
        <>
            <Layouts>
                <form onSubmit={handleSubmit}>
                    <textarea onChange={handleChange} className={styles.textarea} placeholder="¿Qué está pasando?" value={message}>
                    </textarea>
                    <div>
                        <Button disabled={isButtonDisabled}>Devitear</Button>
                    </div>
                </form>
            </Layouts>
        </>
    )
}