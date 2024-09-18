export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full  flex flex-col lg:flex-row py-20 
                       align-center bg-purple-200 max-w-5xl mx-auto">
            <div className="flex-1">
                <img src="https://cdn.sanity.io/images/tlr8oxjg/production/1ca7b34a8d5308a03ae186dfe72caabce0327fe2-1456x816.png?w=3840&q=100&fit=clip&auto=format"
                    alt="About"
                    className="w-full h-full bg-cover"/>
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-purple-500 
                                   text-5xl font-bold">
                        About Me :
                    </h2>
                </div>
                <p class="align-text">
                I'm a developer with a passion for crafting visually appealing and user-friendly websites and applications. Proficient in front-end development and possessing a solid understanding of back-end processes, I leverage my skills to create websites that precisely meet client requirements. 
                </p><p class="align-text">
                With strong organizational abilities, adept time management and experience in team leadership, I ensure smooth project execution. Committed to staying abreast of the latest technologies, I continuously enhance my skill set to deliver cutting-edge solutions.
                </p>
            </div>
        </section>
    );
}
