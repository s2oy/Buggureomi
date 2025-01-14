export const tokenCookie = {
  setCookie: (name: string, value: string, day: number) => {
    if (typeof window === "object") {
      const date = new Date();
      date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000);
      document.cookie =
        name + "=" + value + ";expires=" + date.toUTCString() + "; path=/;";
    }
  },
  getCookie: (name: string) => {
    if (typeof window === "object") {
      const value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
      return value ? value[2] : null;
    }
  },
  deleteCookie: (name: string) => {
    document.cookie =
      name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT; path=/;";
  },
};
