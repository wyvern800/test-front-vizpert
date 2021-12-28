import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import ShelvesProvider from "./context/shelves";

function App() {
  return (
    <>
      <BrowserRouter>
        <ShelvesProvider>
          <Routes />
        </ShelvesProvider>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
