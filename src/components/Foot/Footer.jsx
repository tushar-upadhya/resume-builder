import React from "react";

import styles from "./footer.module.css";

import { GitHub, Linkedin } from "react-feather";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <div className={styles.footer}>
            <div className={styles.social}>
                <a
                    href="https://github.com/tushar-upadhya/resume-builder"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHub />
                </a>
                <a
                    href="https://www.linkedin.com/in/tusharupadhya/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Linkedin />
                </a>
            </div>
            <div className={styles.info}>
                <p>
                    Copyright © {year}{" "}
                    <a
                        href="https://tusharupadhyay.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Tushar Upadhyay
                    </a>{" "}
                </p>
            </div>
        </div>
    );
};

export default Footer;
