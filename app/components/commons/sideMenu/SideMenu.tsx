import Link from "next/link";
import styles from "./SideMenu.module.scss";

interface SideMenuProps {
  className: string;
}

interface Menu {
  label: string;
  icon?: string;
  link: string;
}

const menus: Menu[] = [
  {
    label: "タスク",
    link: "#",
  },
  {
    label: "グループ",
    link: "#",
  },
];

export const SideMenu = (props: SideMenuProps) => {
  return (
    <div className={`bg-sky-900 h-screen lg:block fixed z-20 ${props.className}`}>
      <div className="h-20 text-2xl text-orange-500 flex justify-center items-center border-slate-400 border-b-2">
        SHOULDo
      </div>
      {menus.map((menu) => {
        return (
          <div className="text-white border-slate-400 hover:bg-sky-800 border-b-2 px-8 py-4 flex justify-center cursor-pointer">
            <Link href={'#'}>
              <a className="cursor-pointer">{menu.label}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
