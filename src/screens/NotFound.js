import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";



const NotFound = () => {
    return (
        <div
            style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center"

            }}>

            <h1>Page Not found</h1>
            <Link to="/">
                <Button>HOME</Button>
            </Link>

        </div>
    )
}

export default NotFound