import React from "react";


function Footer(){


    var year = new Date().getFullYear();

    return(
        <footer>
            copyright @{year}
        </footer>
    );
}


export default Footer;