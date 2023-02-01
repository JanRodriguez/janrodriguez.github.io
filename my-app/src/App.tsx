import logo from "./logo.svg";
import "./App.css";
import { Grid } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Grid>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            My first page
          </a>
        </header>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
