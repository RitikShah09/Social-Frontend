'use client';
import { useCookies } from "react-cookie";
import { redirect } from "next/navigation";
export default function redirToSignInIfNoToken() {
  if (typeof window !== "undefined") {
    const userData = localStorage.getItem("UserDetails");
    const [cookie, setCookie] = useCookies(["token"]);
    if (!cookie.token || !userData) {
      return redirect("/login");
    }
  }
} 

export const redirectToHome = () => {
  if (typeof window !== "undefined") {
  const userData = localStorage.getItem("UserDetails");
  const [cookie, setCookie] = useCookies(["token"]);
  if (cookie.token || userData) {
    return redirect("/home");
  }
  }
}
