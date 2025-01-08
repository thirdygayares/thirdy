
const HeroSection = () => {

    return(
        <section id="who-am-i"
                 className="container  m-auto flex flex-col gap-4 p-5 items-center text-center scroll-mt-24">
            <img className="rounded-full w-28 sm:w-36 md:w-40 lg:w-52" src="/image/thirdy.png" alt="thirdy"/>

            <div className="flex flex-col">
                <h1 className="title-lg font-bold">Mr. Thirdy Gayares</h1>
                <h2 className="title-md text-secondary font-extrabold"> Software Engineer</h2>
            </div>

            <p className="text-md m-auto leading-relaxed max-w-[1200px]">
                Hi, my real name is <strong>Jose Gayares III </strong>, but I go by Thirdy. I&#39;m a Filipino from San Jose Del Monte City, Bulacan. As the third child in my family, I grew up in this vibrant city.

                I graduated with a Bachelor of Science in Computer Science, majoring in Application Development, from the University of Makati. 
            </p>


            <p className="text-lg m-auto leading-relaxed">
                I have 4 years of experience in building systems and solving problems with technology. I work mostly on
                backend systems using <span className="font-bold"> Python Flask </span> and <span className="font-bold"> FastAPI</span>, and I use <span className="font-bold"> PostgreSQL</span> and <span className="font-bold"> MySQL</span> for databases.

                I also know how to set up <span className="font-extrabold text-secondary">CI/CD pipelines</span>, and I
                have deployed apps on <span className="font-bold"> AWS</span>, like API services. For mobile, I create Android
                apps using <span className="font-bold"> Java</span>. I also use Firebase tools like<span className="font-bold"> Hosting</span>,<span className="font-bold"> Firestore</span>, and<span className="font-bold"> Authentication</span>.

                Right now, I work full-time as a<span className="font-bold"> Junior Front-End Developer</span> at <span className="font-bold"> Labrador Company</span>. I use <span className="font-bold"> React</span> and  <span className="font-bold"> TailwindCSS</span>, and I’ve learned a lot about best
                practices and clean code in this job.

                In the future, I want to be a <span className="font-bold"> Software Engineer</span> and work on building apps from start
                to finish, combining my backend and front-end skills.

                On weekends, I work as a <span className="font-bold"> Part-Time Instructor</span>. I teach students about
                programming, and I feel happy when I see them learning and improving.

                During college, I joined <span className="font-bold"> hackathons</span> and <span className="font-bold"> tech competitions</span>. Sometimes we won, sometimes we lost,
                but I always enjoyed the experience and learned something new.

                I am also a <span className="font-bold"> co-founder and Director for Technology at HWORK</span>. I take
                care of the backend, database, and server setup for our app. My teammates are very talented, and we are
                working hard to keep improving the app.

                Now, I am also <span className="font-bold text-secondary"> learning and practicing SEO</span>. As you can see, this
                description is long because I am experimenting to see if it will help with SEO. My goal is that one day,
                if you search for  <span className="font-bold"> &#34;Software Engineer in the Philippines&#34;</span> in a search
                engine, my site will be the first one to appear!
            </p>


        </section>
    );

}

export default HeroSection;