import { Minus } from "lucide-react"
import { ReactNode } from "react"

type BlogHeadingProps = {
    heading: string,
    children: ReactNode
}

export type ScrollLinks = {
    text: string,
    href: string,
    type?: "CLICK_OPEN" | "",
    notes?:string
}

export type BlogPageProps = {
    heading: string,
    children: ReactNode,
    rightSidebarItem: ScrollLinks[]
}

type SubHeadingProps = {
    text: string
}
export const WithHeading = ({heading, children}: BlogHeadingProps) => {
    return (
        <div className="font-sans text-gray-600" style={{whiteSpace: "pre-line"}}>
            <p className="text-2xl mb-2 text-black font-semibold font-sans underline">{heading}</p>
            {children}
        </div>
    );

}
const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
  
    const y = section.getBoundingClientRect().top + window.pageYOffset - 60;
  
    window.scrollTo({ top: y, behavior: "smooth" });
};

export const WithHeadingAndRightSidebar = ({ heading, children, rightSidebarItem }: BlogPageProps) => {
    return (
      <div className="flex gap-10 font-sans text-sm">
        {/* Main content */}
        <div className="flex-1">
          <p className="text-2xl mb-2 text-black font-semibold underline">{heading}</p>
          {children}
        </div>
  
        {/* Right sidebar */}
        {rightSidebarItem && rightSidebarItem.length>0 && <div className="w-64 shrink-0 sticky top-20 self-start">
          <div className="p-4 border-2 font-serif text-sm bg-gray-50 rounded shadow">
            <p className="text-black mb-4 font-sm">On This Page</p>
            {rightSidebarItem.map((x,y) => {

                if(x.text == "HIGHLIGHT"){
                    return <hr key={`blog-key-highlight-${y}`} className="text-blue-900 my-2 bg-blue-900" />
                }

                return <div key={`blog-key-content-${x.href}`} className="text-blue-900 cursor-pointer hover:underline py-1 flex gap-1 items-center" onClick={() => {
                
                if(x?.type == "CLICK_OPEN"){
                    if(document.getElementById(x.href)?.getAttribute("data-state") == "closed"){
                        document.getElementById(x.href)?.click();
                    }
                }
                scrollToSection(x.href)
            }}> <Minus size={10} className="mr-2 text-blue-500" /> {x.text}</div>})}
          </div>
        </div>}
      </div>
    );
  };
  
export const SubHeading = ({text}:SubHeadingProps) => {
    return <div className=' underline mt-4 mb-2 text-lg text-black font-medium'>{text}</div>;
}

export const AccordingSubHeading = ({text}:SubHeadingProps) => {
    return <div className="underline mt-4 mb-2 text-lg text-black font-medium cursor-pointer">{text}</div>
}