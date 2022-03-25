import { SideMenu } from "../sideMenu/SideMenu"

interface LayoutProps {
    children?: JSX.Element | string;
  }
export const Layout=(props:LayoutProps)=>{
    return (
        <div className="flex">
            <SideMenu className='w-48'/>
            <main className="flex-1">{props.children}</main>
        </div>
    )
}