import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <div className="bg-secondary-0 py-4 px-12 border-b border-secondary-200 flex items-center justify-between">
      <UserAvatar />
      <HeaderMenu />
    </div>
  );
}
export default Header;
