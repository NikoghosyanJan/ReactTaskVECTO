import Slider from "react-slick";
import { addIDToSessionStorage, sliderSettings } from "../helpers";

export default function TrendingSlider({ data, setFeatured, setPlay }) {

    // const playMovie = 

    return (
        <div className="treding-now-section">
            {/* <h1>Trending Now</h1> */}
            <Slider {...sliderSettings}>
                {data.map((movie, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            addIDToSessionStorage(movie.Id)
                            setPlay(false)
                            setFeatured(movie);
                            setTimeout(() => {
                                setPlay(true)
                            }, 2000)
                        }}
                    >
                        <img
                            src={require(`../assets/${movie.CoverImage}`)}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}