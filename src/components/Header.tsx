

const Header = () => {
    return(
        <header className="bg-primary text-white">
            <div className="container m-auto flex gap-4  flex-col p-6 md:flex-row  md:justify-between md:items-center ">
                <h1 className="title-lg font-bold">THIRDY</h1>
                <nav>
                    <ul className="flex gap-4 body-lg cursor-pointer">
                        <li className="hover:text-secondary hover:font-extrabold">Who Am I</li>
                        <li className="hover:text-secondary hover:font-extrabold">Skills</li>
                        <li className="hover:text-secondary hover:font-extrabold">Project</li>
                    </ul>
                </nav>
            </div>
        </header>

    );
}

export default Header;