
const HeroSection = () => {

    return(
      <div className="container  m-auto flex flex-col gap-4 p-5 items-center text-center">
            <img className="rounded-full w-28 sm:w-36 md:w-40 lg:w-52" src="/image/thirdy.png" alt="thirdy" />

            <div className="flex flex-col">
                <h1 className="title-lg font-bold">Mr. Thirdy Gayares</h1>
                <h2 className="title-md text-secondary font-extrabold">Software Engineer</h2>
            </div>

            <p className="body-md m-auto max-w-[1200px]">I have 4 years of experience developing systems, interfaces, bots, and technological solutions to make the web a better place. I focus on writing and refactoring clean, reusable, and scalable code in Python and Java, applying good practices and development standards.</p>

      </div>
    );

}

export default HeroSection;