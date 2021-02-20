import Layouts from "componentes/Layouts"

export default function App({ Component, pageProps }) {
    return (
        <Layouts>
            <Component {...pageProps} />
        </Layouts>
    )
}