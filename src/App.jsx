import "./global.css";
import Header from "./components/header";
import Menu from "./components/menu";
import Footer from "./components/footer";

const appStyle = {
    padding: "0 9rem",
    backgroundColor: "#f7f2e9",
    color: "#27272a",
    paddingTop: "4rem",
};

function App() {
    // 1. Header
    // 2. Menu
    //    2.a. PizzaCard
    // 3. Footer
    return (
        <div style={appStyle}>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
