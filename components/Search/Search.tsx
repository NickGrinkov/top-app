import { useState } from "react";
import { SearchProps } from "./Search.props";
import GlassIcon from "./glass.svg"
import styles from "./Search.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search
      }
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter") {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input onKeyDown={handleKeyDown}  
             className={styles.input} 
             value={search} 
             placeholder="Поиск..." 
             onChange={(e) => setSearch(e.target.value)}/>
      <Button appearance="primary" className={styles.button} onClick={goToSearch}>
        <GlassIcon />
      </Button>
    </div>
  );
};