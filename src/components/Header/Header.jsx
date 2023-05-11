import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
    //   A CV That Gets Noticed!

    // Prepare your own résumé. It is completely free.
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <p className={styles.heading}>
                    A <span>CV </span> That Gets Noticed!
                </p>
                <p className={styles.heading}>
                    Prepare your own résumé. <span>It's completely free</span>
                </p>
            </div>
            <div className={styles.right}>
                <img src={resumeSvg} alt="Resume" />
            </div>
        </div>
    );
}

export default Header;
