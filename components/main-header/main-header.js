import Link from "next/link";
import logoImg from "../../assets/logo.png";
import headerClass from "../main-header/main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

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
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
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
