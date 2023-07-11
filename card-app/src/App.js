import { BrowserRouter } from "react-router-dom";
import UserProvider from "./users/providers/UserProvider";
import SnackbarProvider from "./providers/SnackbarProvider";
import ThemeProvider from "./providers/ThemeProvider";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <SnackbarProvider>
          <ThemeProvider>
            <Layout>
              <Router />
            </Layout>
          </ThemeProvider>
        </SnackbarProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
