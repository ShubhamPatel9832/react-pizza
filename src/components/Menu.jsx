import Pizza from "./Pizza";
const menuBoxStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2 , 1fr)",
};

const menuHeaderStyle = {
    textTransform: "uppercase",
    padding: "1rem 0",
    borderTop: "3px solid #27272a",
    borderBottom: "3px solid #27272a",
    display: "inline-block",
    margin: "0px auto",
};

function Menu() {
    return (
        <div>
            <div>
                <h2 style={menuHeaderStyle}> Our Menu </h2>
                <p>
                    Authentic Italin cuisine . 6 Creative to chose from. All
                    from stone oven , all organic . Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Omnis aliquam quos eveniet
                    corrupti amet temporibus blanditiis obcaecati dolore ad
                    sapiente reiciendis quaerat qui velit atque esse eaque
                    deserunt dolorum, quo expedita similique culpa.
                </p>
            </div>

            <div style={menuBoxStyle}>
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
            </div>
        </div>
    );
}

export default Menu;
