const Recommendations = () => {
    const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget mattis arcu. Nulla vehicula augue laoreet condimentum pellentesque. Phasellus vehicula gravida nunc, at consectetur risus gravida a. Suspendisse tempus gravida dolor, non lobortis purus rutrum ac. Curabitur posuere, nunc at vulputate dignissim, justo sapien malesuada arcu, fermentum scelerisque elit neque sit amet lectus. Donec tincidunt consequat nisl, ac vehicula ante placerat quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam lobortis luctus metus, vitae imperdiet ipsum blandit nec. Proin mattis nibh a tellus placerat pretium."
    return (
        <div className="container mx-auto flex flex-col flex-wrap justify-center items-center">
            <div className="m-4 text-2xl font-bold tracking-tight text-blue">recommendations</div>
            <div className="text-4xl font-bold tracking-tight text-grey">what do my mentors say</div>
            <div className="m-5 p-4 bg-card border border-grey rounded-lg shadow">
                <div className="mb-3 text-sm font-normal">{paragraph}</div>
            </div>
        </div>
    )
}
export default Recommendations