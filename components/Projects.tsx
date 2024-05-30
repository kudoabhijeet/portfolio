import Image from "next/image"
import ProjectCard from "./utilities/ProjectCard"
const Projects = () => {
    return (
        <div className="container mx-auto flex flex-col flex-wrap justify-center items-center pb-20">
            <div className="m-2 text-2xl font-bold tracking-tight text-blue">projects</div>
            <div className="text-4xl font-bold tracking-tight text-grey">what occupies my time</div>
            <div className="m-5 flex flex-col justify-center gap-5 sm:flex-row">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />

            </div>
        </div>

    )
}

export default Projects