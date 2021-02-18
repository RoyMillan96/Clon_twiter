import { useEffect, useState } from "react"
import { fetchLatestDevits } from "firebase/client"
import styles from "./styles.module.css"
import Layouts from "componentes/Layouts"
import Devit from "componentes/Devit"
import useUser from "hooks/useUser"

export default function HomePage() {
    const [timeline, setTimeline] = useState([])
    const user = useUser()

    useEffect(() => {
        user && fetchLatestDevits().then(setTimeline)
    }, [user])

    return (
        <>
            <Layouts>
                <header className={styles.header}>
                    <h2 className={styles.h2}>Inicio</h2>
                </header>
                <section className={styles.section}>
                    {timeline.map(({ id, userName, avatar, content, userId, createdAt }) => (
                        <Devit
                            avatar={avatar}
                            createdAt={createdAt}
                            id={id}
                            key={id}
                            content={content}
                            userName={userName}
                            userId={userId}
                        />
                    ))}
                </section>
                <nav className={styles.nav}></nav>
            </Layouts>
        </>
    )
}