const ProjectCard = () => {
    return (
        <div className="max-w-sm p-6 bg-white border border-grey rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="mb-2 text-2xl font-bold tracking-tight text-blue">project name</div>
            {/* <Image src="https://dummyimage.com/640x360/fff/aaa" alt="image" height={300} width={300}></Image> */}
            <div className="mb-3 text-sm font-normal">description</div>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue rounded-lg">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>
    );
}

export default ProjectCard;