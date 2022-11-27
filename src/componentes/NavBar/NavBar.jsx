import React from "react";
import CartWidget from "./CartWidget";

const styles = {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    fontStyle: "italic",
    marginLeft: "50px",
    justifyContent:"end"
}
const styles2 = {
    display: "flex",
    flexDirection: "row",
    margin: "15px 80px",
    color: "pink",
}
function NavBar() {
    return (
        <div style={styles}>
            <h1>FOOTING</h1>
            <ul style={styles}>
                <a style={styles2}>ZAPATILLAS DEPORTIVAS</a>
                <a style={styles2}>SANDALIAS</a>
                <a style={styles2}>BOTAS</a>
            </ul>
            <CartWidget/>
        </div>

    )
}

export default NavBar;