import { useState } from "react";
import TrendingSlider from "../components/TrendingSlider";
import { getData } from "../helpers";
import "./style.scss"

//  👇️ GET DATA WITH SPECIAL FUNCTION
const data = getData()

export default function Home() {
    const [featured, setFeatured] = useState(data.Featured);
    const [play, setPlay] = useState(false);

    const  getDuration = (time)=> {
        // CONVERT SECONDS TO HOURS AND MINUTES
        let seconds = time;
        let minutes = Math.floor(time / 60);
        let hours = Math.floor(minutes / 60);

        seconds = seconds % 60;
        minutes = seconds >= 30 ? minutes + 1 : minutes;
        minutes = minutes % 60;

        hours = hours % 24;

        return hours + "h" + " " + minutes + "m"
    }

    return (
        <main className="page-main">
            <div className="bgc"></div>
            <div className="about-movie">
                {play ?
                    <div className="bg video">
                        <video 
                            autoPlay
                            loop={false}
                             muted 
                              controls = ''
                            
                        >
                            <source src={featured.VideoUrl} />
                         </video>
                    </div> :
                    <div
                        style={{ backgroundImage: `url(${require(`../assets/${featured.CoverImage}`)})` }}
                        className="bg"
                    ></div>
                }
                <span className="category">{featured.Category}</span>
                <h1>{featured.Title}</h1>
                <div className="short">
                    <span>{featured.ReleaseYear}</span>
                    <span>{featured.MpaRating}</span>
                    <span>
                        {/* 👇️  CONVERT SECONDS TO HOURS AND MINUTES  */}
                        {getDuration(featured.Duration)}
                    </span>
                </div>
                <p className="description">{featured.Description}</p>
                <div className="buttons">
                    <button>▶ Play</button>
                    <button>More Info</button>
                </div>
            </div>
            {/*  👇️ PASS WITH SPREED OPERATOR, BECAUSE THE DATA IS A SET */}
            <TrendingSlider
                data={[...data.TendingNow]}
                setFeatured={setFeatured}
                setPlay={setPlay}
            />
        </main>
    )
}