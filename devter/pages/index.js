import { useEffect } from "react";
import Head from "next/head";

import Layouts from "componentes/Layouts";
import Button from "componentes/Button";
import GitHub from "componentes/Icons/GitHub";
import Logo from "componentes/Icons/logo"

import { colors } from "styles/theme";

import { loginWithGitHub } from "firebase/client";

import { useRouter } from "next/router"
import useUser, { USER_STATES } from "hooks/useUser"

export default function Home() {
  const user = useUser();

  const router = useRouter()

  useEffect(() => {
    user && router.replace("/home")
  }, [user])

  const handleClick = () => {
    loginWithGitHub().catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <Head>
        <title>Devter Inicio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layouts>
        <section>
          <Logo width="100" />
          <h1>Devter!</h1>
          <h2>
            Talk about development
            <br />
            with developers
          </h2>
          <div>
            {user === USER_STATES.NOT_LOGGED && (
              <Button onClick={handleClick}>
                <GitHub fill="#fff" width={24} height={24} />
                Login with GitHub
              </Button>
            )}
            {user === USER_STATES.NOT_KNOWN && <img src="/spinner.gif" />}
          </div>
        </section>
      </Layouts>

      <style jsx>
        {`
          img {
            width: 120px;
          }

          section {
            display: grid;
            height: 100%;
            place-content: center;
            place-items: center;
          }

          h1 {
            color: ${colors.primary};
            font-weight: 800;
            font-size: 32px;
            margin-bottom: 16px;
          }

          h2 {
            color: ${colors.secondary};
            font-size: 21px;
            margin: 0;
          }
        `}
      </style>
    </div>
  );
}
