import { HashLink } from "react-router-hash-link";
import { useActiveSection } from "../context/ActiveSectionContext";

export default function NavElement({ id }: { id: string }) {
  const { isActive, setIsActive, setIsOpenMenu } = useActiveSection();
  return (
    <HashLink
      smooth
      to={`#${id}`}
      className={`border-y-2 border-y-transparent ${
        isActive === id
          ? "text-accent border-b-accent"
          : "hover:text-accent hover:border-b-accent"
      }`}
      onClick={() => {
        setIsActive(id);
        setIsOpenMenu(false);
      }}
    >
      <li>{id.toUpperCase()}</li>
    </HashLink>
  );
}
