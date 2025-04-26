import NavigationBar from "../NavigationBar";
import Sidebar from "../sidebar/Sidebar";

type WrapperType = {
    children: React.ReactNode,
    currentPage: string
}
export const WithNavbar = ({children, currentPage}:WrapperType) => {
    return (
        <div>
            <NavigationBar current={currentPage} />
            {children}
        </div>
        );
}


export const WithNavbarAndSidebar = ({children,currentPage}:WrapperType) => {
    
    return (
        <div>
            <NavigationBar current={currentPage} />
            <div className="box-content flex cursor-default pt-14">
                <Sidebar />
                <div className="w-full m-4 ml-76"  style={{ whiteSpace: "break-spaces" }}>
                        {children}
                </div>
            </div>
        </div>
    );
}