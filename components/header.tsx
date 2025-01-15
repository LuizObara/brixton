import Logo from "./logo";
import NavigationBar from "./navigation-bar";
import ContactButton from "./contact-button";
import OffcanvasButton from "./offcanvas-button";

export default function Header() {
    
    return (
        <header className="w-full sticky z-40 bg-background top-0 flex justify-center border-b border-b-foreground/10 ">
            <nav className="w-full max-w-7xl flex justify-between items-center px-5 text-sm my-3">
                <div className="flex gap-5 items-center font-semibold">
                    <Logo/>                
                </div>
                <div className="flex gap-5 items-center font-semibold hidden lg:block">
                    <NavigationBar/>                                   
                </div>
                <div className="flex gap-5 items-center font-semibold hidden lg:block">
                    <ContactButton type="whatsapp"/>
                </div>
                <div className="block lg:hidden">
                    <OffcanvasButton/>
                </div>
            </nav>
        </header>
    );
}