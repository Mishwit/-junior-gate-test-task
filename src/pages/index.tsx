import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";

import { Card } from "../components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Card</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <Card />
        </div>
      </main>
    </>
  );
}
