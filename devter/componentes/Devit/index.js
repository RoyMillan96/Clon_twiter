import styles from "./styles.module.css"
import Avatar from "componentes/Avatar"
import useTimeAgo from "hooks/useTimeAgo"
// import useDateTimeFormat from "hooks/useDateTimeFormat"


export default function Devit({ avatar, userName, content, id, createdAt, img }) {
    const timeago = useTimeAgo(createdAt)

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
                        <time className={styles.date}>{timeago}</time>
                    </header>
                    <p className={styles.p}>{content}</p>
                    {img && <img className={styles.img} src={img} />}
                </section>
            </article>
        </>
    )
}