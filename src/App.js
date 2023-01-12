import { createGlobalStyle } from "styled-components";
import Router from "./Router/Router";

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyled />
      <Router />
    </div>
  );
}

export default App;
