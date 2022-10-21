import { useEffect, useState } from "react";
import bgImage from "../assets/FeaturedCoverImage.png";
import TrendingSlider from "../components/TrendingSlider";
import { getData } from "../helpers";
// import data from "../data/data.json"
import "./style.scss"

const data = getData()

export default function Home() {
    const [featured, setFeatured] = useState(data.Featured);
    const [play, setPlay] = useState(false);
    // const [data, setData] = useState({})
console.log(data, "data");

    // const  getDuration = (msc)=> {
    //     const time = (msc/3600).toString().split(".")

    //     const hours = time[0];
    //     const min = Math.round("0." + time[1])
    //      return hours + "h" + min + "m"
    // }

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
                        {featured.Duration}
                    </span>
                </div>
                <p className="description">{featured.Description}</p>
                <div className="buttons">
                    <button>▶ Play</button>
                    <button>More Info</button>
                </div>
            </div>
            <TrendingSlider
                data={[...data.TendingNow]}
                setFeatured={setFeatured}
                setPlay={setPlay}
            />
        </main>
    )
}