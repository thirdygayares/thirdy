import Icon from "@/components/Icon";

const Footer = () => {
    return (
        <footer className="container m-auto p-8">
            <div className="flex flex-col gap-3 items-center justify-center">
                <h5 className="text-white title-sm">gayaresthird@gmail.com</h5>
                <div className="flex gap-4">
                    <a href="https://www.github.com/thirdygayares" target="_blank" rel="noreferrer">
                        <Icon path="github.svg" alt="github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/thirdygayares" target="_blank" rel="noreferrer">
                        <Icon path="linkedin.svg" alt="linkedin"/>
                    </a>
                    <a href="https://thirdygayares.com" target="_blank" rel="noreferrer">
                        <Icon path="web.svg" alt="linkedin"/>
                    </a>
                </div>
                <p className="text-center body-sm text-light">Copyright © thirdygayares 2024, All rights reserved</p>

            </div>
        </footer>
    );
}

export default Footer;