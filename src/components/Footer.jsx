const footerSection = {
    textAlign: "center",
    marginTop: "2rem",
};

const footerButtonMain = {
    textAlign: "center",
};

const footerButton = {
    width: "7rem",
    height: "2rem",
    marginTop: "2rem",
    // textTransform: "uppercase",
    // borderRadius: "10px",
    border: "none",
    backgroundColor: "#EDC84B",
    cursor: "pointer",
    marginBottom: "5rem",
};

function Footer() {
    return (
        <div>
            <p style={footerSection}>
                We&apos;r Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Consectetur, sit.
            </p>

            <div style={footerButtonMain}>
                <button style={footerButton}>Order Now</button>
            </div>
        </div>
    );
}

export default Footer;
