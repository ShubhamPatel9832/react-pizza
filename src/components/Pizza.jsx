const cardStyle = {
    // backgroundColor: "grey",
    display: "flex",
    gap: "1rem",
    boxShadow: "box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;",
    padding: "1rem",
};

const imgStyle = {
    height: "9rem",
};

const detailsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
};

function Pizza() {
    return (
        <div style={cardStyle}>
            <div className="pizza__img">
                <img
                    style={imgStyle}
                    src=".\pizzas\focaccia.jpg"
                    alt="pizza01"
                />
            </div>
            <div style={detailsStyle}>
                <span className="name">PizzaName</span>
                <p className="ingredients"> ing01 , ing02 , ing03</p>
                <p style={{ marginTop: "auto" }}>0 </p>
            </div>
        </div>
    );
}

export default Pizza;
