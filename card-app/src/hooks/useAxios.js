import axios from "axios";
import { useSnack } from "../providers/SnackbarProvider";
import { useUser } from "../users/providers/UserProvider";
import { useEffect } from "react";

export default function useAxios() {
  const snack = useSnack();

  const { token } = useUser();

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] = token;
    const requestInterceptor = axios.interceptors.request.use((data) => {
      console.log("this log came from interceptor request");
      return Promise.resolve(data);
    }, null);
    const responseInterceptor = axios.interceptors.response.use(
      null,
      (error) => {
        console.log(error.message);
        snack("error", error.message);
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [snack, token]);
}
