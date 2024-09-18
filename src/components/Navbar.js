// Navbar.js
export default function Navbar() {
    return (
        <nav className="w-full px-5 sm:px-10 py-5 shadow-xl 
                        backdrop-blur-lg fixed top-0 z-10">
            <div className="container flex flex-col lg:flex-row
                            gap-5 justify-between w-full 
                            items-center max-w-5xl mx-auto">
                <h3 className="text-3xl text-purple-500 font-bold">Welcome to My Portfolio  </h3>
                <ul className="flex gap-3 align-center p-1 flex-wrap">
                    
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 
                                      py-2 transition rounded hover:text-white 
                                      hover:bg-purple-500"
                           href="#about">
                        About
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 
                                      transition rounded hover:text-white 
                                      hover:bg-purple-500"
                            href="#skills">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 
                                      transition rounded hover:text-white 
                                      hover:bg-purple-500"
                            href="#projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5 py-2 
                                      transition rounded hover:text-white 
                                      hover:bg-purple-500"
                            href="#contact">
                            Contact
                        </a>
                    </li>
                    <li>
                    <a href="https://drive.google.com/uc?export=download&id=1qzMgnj08EUZjeSlMGhMbet2MXfOMe0ng" download class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Download Resume
                    </a>
                    </li>

                </ul>
            </div>
        </nav>
    );
}
