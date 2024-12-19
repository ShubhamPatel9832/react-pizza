// import PropTypes from "prop-types";
import pizzaData from "../data/data";

const cardStyle = {
    // backgroundColor: "grey",
    display: "flex",
    gap: "1rem",
    boxShadow: "box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px",
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

function Pizza(props) {
    // console.log();
    const { name, ingredients, price, photoName, soldOut } = props.pizzaData;

    return (
        <div
            style={
                !soldOut ? cardStyle : { ...cardStyle, filter: "grayScale(1)" }
            }
        >
            <div className="pizza__img">
                <img style={imgStyle} src={`./${photoName}`} alt={`${name}`} />
            </div>
            <div style={detailsStyle}>
                <p>{name}</p>
                <p className="ingredients"> {ingredients}</p>
                <p style={{ marginTop: "auto" }}>
                    {soldOut ? "SOLDOUT" : `${price}`}
                </p>
            </div>
        </div>
    );
}

export default Pizza;
