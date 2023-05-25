import Popular from "../components/Popular";
import Upcoming from "../components/Upcoming"
import Rated from "../components/Rated";
import Playing from "../components/Playing";
import Trending from "../components/Trending";
import HomeMovie from "../components/HomeMovie";

const Home = () => {
    return (
        <>
            <div>
                <HomeMovie />
                <h2 className="homHeading" >Trending</h2>
                <Trending />
                <h2 className="homHeading" >Now Playing</h2>
                <Playing />
                <h2 className="homHeading" >Popular Picks</h2>
                <Popular />
                <h2 className="homHeading" >Top Rated</h2>
                <Rated />
                <h2 className="homHeading" >Up Coming</h2>
                <Upcoming />
            </div>
        </>
    )
}

export default Home