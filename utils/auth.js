
import { useCookies } from "react-cookie";
import { redirect } from "next/navigation";

export const redirToSignInIfNoToken = () => {
  if (typeof window !== "undefined") {
    const userData = localStorage.getItem("UserDetails");
    const [cookie, setCookie] = useCookies(["token"]);
    if (!cookie.token || userData == null || !userData) {
      return redirect("/login");
    }
  }
};

export const redirectToHome = () => {
  if (typeof window !== "undefined") {
  const userData = localStorage.getItem("UserDetails");
  const [cookie, setCookie] = useCookies(["token"]);
  if (cookie.token || userData) {
    return redirect("/home");
  }
  }
}
