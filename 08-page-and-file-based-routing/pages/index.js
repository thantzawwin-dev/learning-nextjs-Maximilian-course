import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  console.log("router.query", router.query);
  return (
    <div className={styles.container}>
      <h1>Hello Next World!</h1>
      <ul>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}
