import Link from "next/link";
import logoImg from "../../assets/logo.png";
import headerClass from "../main-header/main-header.module.css";
import MainHeaderBackground from "./main-header-background";

export default function HeaderDetails() {
  return (
    <>
      <MainHeaderBackground />
      <header className={headerClass.header}>
        <Link className={headerClass.logo} href="/">
          <img src={logoImg.src}></img>NextLevel Food
        </Link>
        <nav className={headerClass.nav}>
          <ul>
            <li>
              <Link href="/meals">Meals</Link>
            </li>
            <li>
              <Link href="/community">Community</Link>
            </li>
            <li>
              <Link href="/meals/share">Share Meal</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
