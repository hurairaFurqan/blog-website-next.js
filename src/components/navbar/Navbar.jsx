import Image from "next/image";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image
          src="/facebook.png"
          alt="facebook"
          width={24}
          height={24}
        ></Image>
        <Image
          src="/instagram.png"
          alt="instagram"
          width={24}
          height={24}
        ></Image>
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24}></Image>
        <Image src="/youtube.png" alt="youtube" width={24} height={24}></Image>
      </div>
      <div className={styles.logo}>Blogilates</div>

      <div className={styles.links}></div>
    </div>
  );
};

export default Navbar;
