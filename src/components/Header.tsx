const Header = () => {
    return (
        <header className="sticky top-0 bg-primary/20 backdrop-blur-xl text-white z-40">
            <div className="container m-auto flex gap-4 p-6  justify-between items-center">
                <h1 className="title-lg font-bold">THIRDY</h1>
                <nav >
                    <ul className="flex gap-4 body-lg cursor-pointer">
                        <li>
                            <a href="#who-am-i" className="hover:text-secondary hover:font-extrabold">
                                Who Am I
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:text-secondary hover:font-extrabold">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#project" className="hover:text-secondary hover:font-extrabold">
                                Project
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
