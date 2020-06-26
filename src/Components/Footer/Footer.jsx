import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    const onMouseOut = (e) => {
        e.target.style.color = "#cccccc";
    };

    const SocialWidget = [{


            SocialMediaName: "GitHub",
            ProfileLink: "https://github.com/amaben2020/Amara-Benneth-Uzochukwu",
            fontAwesomeIconName: "fab fa-github",
            OnMouseOverColor: "#211F1F",
        },

    ];

    return ( <
        React.Fragment >
        <
        div className = {
            styles.container
        } >
        <
        h6 style = {
            {
                display: "block",
                marginBottom: "0px",
                fontSize: 30,
                marginTop: "40px",
                textAlign: "center",
            }
        } >
        This App was developed by {
            " "
        } <
        a href = "https://github.com/amaben2020/Amara-Benneth-Uzochukwu"
        target = "_blank"
        rel = "noopener noreferrer"
        style = {
            {
                color: "rgba(0,0,255,0.6)",
                textDecoration: "none"
            }
        } >
        Uzochukwu Amara Benneth using REACT and Mathdroid API <
        /a> < /
        h6 > <
        /div> <
        div className = {
            styles.container
        } >
        <
        br / >
        <
        ul className = "list"
        style = {
            {
                listStyleType: "none"
            }
        } > {
            SocialWidget.map((data, key) => {
                return ( <
                    li key = {
                        key
                    }
                    style = {
                        {
                            display: "inline-block",
                            marginRight: "17px"
                        }
                    } >
                    <
                    a onMouseOver = {
                        (e) => {
                            e.target.style.color = `${data.OnMouseOverColor}`;
                        }
                    }
                    onMouseOut = {
                        onMouseOut
                    }
                    href = {
                        data.ProfileLink
                    }
                    target = "_blank"
                    rel = "noopener noreferrer"
                    style = {
                        {
                            color: "#cccccc",
                            fontSize: "40px"
                        }
                    } >
                    <
                    i className = {
                        `${data.fontAwesomeIconName}`
                    } > < /i> < /
                    a > <
                    /li>
                );
            })
        } <
        /ul> < /
        div > <
        div className = {
            styles.container
        } >
        <
        h6 style = {
            {
                display: "block",
                marginBottom: "0px",
                fontSize: 16,
                marginTop: "20px",
                textAlign: "center",
            }
        } >
        Data provided💖 by {
            " "
        } <
        a href = "https://github.com/mathdroid/covid-19-api"
        target = "_blank"
        rel = "noopener noreferrer"
        style = {
            {
                color: "rgba(0,0,255,0.6)",
                textDecoration: "none"
            }
        } >
        Mathdroid <
        /a> < /
        h6 > <
        /div> < /
        React.Fragment >
    );
};

export default Footer;