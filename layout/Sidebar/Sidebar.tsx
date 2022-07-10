import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import { Search } from "../../components";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import Logo from "../logo.svg";

export const Sidebar = ({className, ...props }: SidebarProps): JSX.Element => {
  return (
    <aside className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo}/>
      <Search/>
      <Menu />
    </aside>
  );
};