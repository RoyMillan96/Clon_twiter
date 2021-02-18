import Avatar from "componentes/Avatar"
import styles from "./styles.module.css"

export default function Devit({ avatar, userName, content, id, createdAt }) {
    return (
        <>
            <article className={styles.article}>
                <div className={styles.div}>
                    <Avatar alt={userName} src={avatar} />
                </div>
                <section>
                    <header>
                        <strong>{userName}</strong>
                        <span className={styles.span}>·</span>
                        <date className={styles.date}>{createdAt}</date>
                    </header>
                    <p className={styles.p}>{content}</p>
                </section>
            </article>
        </>
    )
}