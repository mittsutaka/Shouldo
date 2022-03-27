import Link from "next/link";
import styles from "./SideMenu.module.scss";

interface SideMenuProps {
  className: string;
}

interface Menu {
  label: string;
  icon?: string;
  link: string;
  id: number;
}

const menus: Menu[] = [
  {
    id: 1,
    label: "タスク",
    link: "#",
  },
  {
    id: 2,
    label: "グループ",
    link: "#",
  },
];

export const SideMenu = (props: SideMenuProps) => {
  return (
    <div className={`bg-neutral-50 h-screen z-20 ${props.className}`}>
      <div className="h-20 text-3xl text-orange-500 flex justify-center items-center">SHOULDo</div>
      <div className="text-neutral-900">
        {menus.map((menu) => {
          return (
            <div className=" hover:bg-neutral-200 px-8 py-4 flex justify-center cursor-pointer" key={menu.id}>
              <Link href={"#"}>
                <a className="cursor-pointer">{menu.label}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
