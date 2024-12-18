import Pizza from "./Pizza";

function Menu() {
    return (
        <div>
            <div>
                <h2> Our Menu </h2>
                <p>
                    Authentic Italin cuisine . 6 Creative to chose from. All
                    from stone oven , all organic .
                </p>
            </div>

            <div>
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
