import Image from "next/image"
import projects from '../data/projects_content.json'

const Projects = () => {
    const Projects = projects.projects
    return (
        <div className="container mx-auto flex flex-col flex-wrap justify-center items-center pb-20">
            <div className="m-2 text-2xl font-bold tracking-tight text-blue">projects</div>
            <div className="text-4xl font-bold tracking-tight text-grey">what occupies my time</div>
            <div className="m-5 flex flex-col flex-wrap justify-center gap-5 sm:flex-row">
                {Projects.map((project) => (
                    <div key="id" className="max-w-sm p-6 bg-card border border-grey rounded-md shadow-2xl overdlow-hidden">
                        <div className="justify-center items-center mb-2 text-2xl font-bold tracking-wide text-blue text-center">{project.name}
                            <Image className="ml-6" src={project.image} alt="image" height={250} width={250}></Image>
                        </div>
                        <div className="inline-flex justify-center mb-2 text-lg tracking-tight font-normal">{project.description}</div>
                        <a href={project.link} className="inline-flex items-center py-2 text-sm font-medium text-blue overflow-hidden">
                            Visit
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Projects