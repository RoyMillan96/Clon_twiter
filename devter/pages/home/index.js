import Layouts from "componentes/Layouts"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"
import Devit from "componentes/Devit"

export default function HomePage() {
    const [timeline, setTimeline] = useState([])

    useEffect(() => {
        fetch("/api/statuses/home_timeline")
            .then((res) => res.json())
            .then(setTimeline)
    }, [])

    return (
        <>
            <Layouts>
                <header className={styles.header}>
                    <h2 className={styles.h2}>Inicio</h2>
                </header>
                <section className={styles.section}>
                    {timeline.map(({ id, username, avatar, message }) => (
                        <Devit
                            avatar={avatar}
                            id={id}
                            key={id}
                            message={message}
                            username={username}
                        />
                    ))}
                </section>
                <nav className={styles.nav}></nav>
            </Layouts>
        </>
    )
}