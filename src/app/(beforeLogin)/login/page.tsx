"use client"

import { useRouter } from "next/navigation"
import Main from "../_component/Main"

// import { redirect } from "next/navigation"

/**
 *
 * <Link/> 태그로 /login 이동 후 redirect(/i/flow/login) 할 시
 * 의도한 화면(백그라운드 홈 페이지 + 모달 창)과 다르게 뜨는 이유 : 서버사이드 렌더링
 *
 * 해결안 : 'use client' 클라이언트 사이드 렌더링으로 바꿔주고
 * redirect(서버 용)를 router를 사용 = useRouter ("nest/navigation")
 *
 * @returns
 */
export default function Login() {
  const router = useRouter()
  router.replace("/i/flow/login")
  // redirect("/i/flow/login")

  return <Main />
}
