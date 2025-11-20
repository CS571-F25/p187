import PageNavbar from "./PageNavbar"

export default function FilmDetails (props) {
    return <div>
        <PageNavbar />
        <h1>Film Details</h1>

        {
            //<iframe width="560" height="315" src="https://www.youtube.com/embed/eHM1K1JByBI" title="YouTube video player" allowFullScreen></iframe>

            // currently, I'm getting weird errors for the video that make troubleshooting other components difficult. 
            // the video does work, but for the time being, I'm going to keep it commented out until i have time to fix it
        }
    </div>
}