import { SideMenu } from "../sideMenu/SideMenu"

interface LayoutProps {
    children?: JSX.Element | string;
  }
export const Layout=(props:LayoutProps)=>{
    return (
        <div className="">
            <SideMenu className='w-48'/>
            <main className="pl-48">{props.children}</main>
        </div>
    )
}