import { AppRoutes } from "./Routes";
import GlobalStyle from "./styles/global";
import { Main } from "./styles/main";

function App() {
    return (
        <Main>
            <GlobalStyle />
            <AppRoutes />
        </Main>
    );
}

export default App;
