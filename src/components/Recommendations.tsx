import recommendations from '../data/recommendation_content.json'
const Recommendations = () => {

    return (
        <div className="container mx-auto flex flex-col flex-wrap justify-center items-center">
            <div className="m-4 text-2xl font-bold tracking-tight text-blue">recommendations</div>
            <div className="text-4xl font-bold tracking-tight text-grey p-4">what do my mentors say</div>
            <div className="m-5 p-4 bg-card border border-grey rounded-lg shadow">
                <div className="mb-3 p-3 text-lg tracking-tighter font-normal">{recommendations.content}</div>
                <div className="mb-3 p-3 text-lg text-blue font-semibold">~ {recommendations.author}</div>

            </div>
        </div>
    )
}
export default Recommendations