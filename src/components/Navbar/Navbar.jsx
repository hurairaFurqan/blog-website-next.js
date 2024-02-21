import React from "react";
import styles from "./navbar.module.css"
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
    return <div className={styles.container}>
        <div className={styles.social}>
            <Image src="/facebook.png" alt="facebook icon" width={24} height={24}></Image>
            <Image src="/tiktok.png" alt="tiktok icon" width={24} height={24}></Image>
            <Image src="/instagram.png" alt="instagram icon" width={24} height={24}></Image>
            <Image src="/youtube.png" alt="youtube icon" width={24} height={24}></Image>
        </div>
        <div className={styles.logo}>Bitchy Blogs</div>
        <div className={styles.links}>
            <ThemeToggle />
            <Link href="/" className={styles.link}>Homepage</Link>
            <Link href="/" className={styles.link}>Contact</Link>
            <Link href="/" className={styles.link}>About</Link>
            <AuthLinks />

        </div>
    </div>
}

export default Navbar;