import Pizza from "./Pizza";
import data from "../data/data";
console.log(data);
const menuBoxStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2 , 1fr)",
};

const menuHeaderStyleMain = {
    textAlign: "center",
};

const menuHeaderStyle = {
    textTransform: "uppercase",
    padding: "1rem 0",
    borderTop: "3px solid #27272a",
    borderBottom: "3px solid #27272a",
    display: "inline-block",
    marginBottom: "2rem",
    lineHeight: ".5rem",
    height: "auto",
};

function Menu() {
    return (
        <div>
            <div>
                <div style={menuHeaderStyleMain}>
                    <h2 style={menuHeaderStyle}> Our Menu </h2>
                </div>
                <p style={{ textAlign: "center" }}>
                    Authentic Italin cuisine . 6 Creative to chose from. All
                    from stone oven , all organic . Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Non eos ut beatae voluptates
                    dolor eligendi accusantium ex at, aspernatur voluptatem.
                </p>
            </div>

            <div style={menuBoxStyle}>
                {/* <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza /> */}

                {data.map(function (pizzaData) {
                    return (
                        <Pizza
                            pizzaData={pizzaData}
                            key={pizzaData.name}
                        ></Pizza>
                    );
                })}
            </div>
        </div>
    );
}

export default Menu;
