import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ContextProps {
  isActive: string;
  setIsActive: Dispatch<SetStateAction<string>>;
  isOpenMenu: boolean;
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
}

const ActiveSectionContext = createContext<ContextProps | undefined>(undefined);

function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [isActive, setIsActive] = useState<string>("home");
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <ActiveSectionContext.Provider
      value={{ isActive, setIsActive, isOpenMenu, setIsOpenMenu }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === undefined)
    throw new Error("Context was used outside of Provider");
  return context;
}

export { ActiveSectionProvider, useActiveSection };
