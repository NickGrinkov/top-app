import { useState, createContext, PropsWithChildren } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.interface";

export interface IAppCotext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}


export const AppContext = createContext<IAppCotext>({ menu: [], firstCategory: TopLevelCategory.Courses });


export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IAppCotext> ): JSX.Element => {
	const [menuState, setMenuState] = useState<MenuItem[]>(menu);

	const setMenu = (newMenu: MenuItem[]) => {
		setMenuState(newMenu);
	};

	return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};