import { useEffect, useState } from "react"
import { fetchLatestDevits } from "firebase/client"
import styles from "./styles.module.css"
import Link from "next/link"
import Devit from "componentes/Devit"
import useUser from "hooks/useUser"
import Create from "componentes/Icons/Create"
import Home from "componentes/Icons/Home"
import Search from "componentes/Icons/Search"
import Head from "next/head"

export default function HomePage() {
    const [timeline, setTimeline] = useState([])
    const user = useUser()

    useEffect(() => {
        user && fetchLatestDevits().then(setTimeline)
    }, [user])

    return (
        <>
            <Head>
                <title>Inicio / Devter</title>
            </Head>
            <header className={styles.header}>
                <h2 className={styles.h2}>Inicio</h2>
            </header>
            <section className={styles.section}>
                {timeline.map(({ id, userName, avatar, content, userId, createdAt, img }) => (
                    <Devit
                        avatar={avatar}
                        createdAt={createdAt}
                        id={id}
                        img={img}
                        key={id}
                        content={content}
                        userName={userName}
                        userId={userId}
                    />
                ))}
            </section>
            <nav className={styles.nav}>
                <Link href="/home">
                    <a>
                        <Home width={32} height={32} stroke="#09f" />
                    </a>
                </Link>
                <Link href="/search">
                    <a>
                        <Search width={32} height={32} stroke="#09f" />
                    </a>
                </Link>
                <Link href="/compose/tweet">
                    <a>
                        <Create width={32} height={32} stroke="#09f" />
                    </a>
                </Link>
            </nav>
        </>
    )
}