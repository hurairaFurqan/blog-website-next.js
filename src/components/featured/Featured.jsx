import React from "react";
import styles from "./featured.module.css"
import Image from "next/image";

const Featured = () => {
    return <div className={styles.container}>
        <h1 className={styles.title}><b>Quis non sunt deserunt veniam!</b> pariatur ea dolor aliqua.</h1>

        <div className={styles.post}>
            <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.postTitle}>Adipisicing consequat cillum laboris non eiusmod ex Lorem.</h1>
                <p className={styles.postDesc}>Nulla voluptate esse labore sint. Id mollit minim do elit aliquip Lorem do ullamco consequat ullamco qui. Minim pariatur aute sint duis duis officia reprehenderit. Esse qui incididunt ut cupidatat in ad labore sunt deserunt sunt. Occaecat excepteur culpa ex ut nostrud aliqua exercitation velit irure.</p>
                <button className={styles.button}>Read More</button>
            </div>

        </div>
    </div>
}

export default Featured;