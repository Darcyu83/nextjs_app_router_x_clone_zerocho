import Image from "next/image"
import styles from "@/app/page.module.css"
import Link from "next/link"
import zLogo from "../../../public/zlogo.png"

export default function Home() {
  return (
    <>
      <div className={styles.left}>
        <Image src={zLogo} alt="logo" />
      </div>

      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link
          href="/i/flow/signup"
          className={[styles.signup, "blue_btn"].join(" ")}
        >
          계정만들기
        </Link>
        <Link
          href="/i/flow/login"
          className={[styles.login, "white_btn"].join(" ")}
        >
          {/* <Link href="/login" className={[styles.login, "white_btn"].join(" ")}> */}
          로그인하기
        </Link>
      </div>
    </>
  )
}