import styles from "./SideMenu.module.scss";

interface SideMenuProps {
  className:string;
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

export const SideMenu = (props:SideMenuProps) => {
  return (
    <div className={`lg:block fixed z-20 px-2 py-3 ${props.className}}`}>
      {menus.map((menu) => {
        return (
          <div className="px-8 py-2 flex justify-center cursor-pointer">
            <label className="cursor-pointer">{menu.label}</label>
          </div>
        );
      })}
    </div>
  );
};
