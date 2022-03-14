import { SideMenu } from "../sideMenu/SideMenu"

interface LayoutProps {
    children?: JSX.Element | string;
  }
export const Layout=(props:LayoutProps)=>{
    return (
        <div className="container mx-auto">
            <SideMenu className='pt-8'/>
            <main className="pl-24">{props.children}</main>
        </div>
    )
}