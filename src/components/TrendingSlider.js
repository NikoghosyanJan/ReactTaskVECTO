import Slider from "react-slick";
import {addIDToSessionStorage, sliderSettings} from "../helpers";

export default function TrendingSlider({data, setFeatured, setPlay}) {

    const handleSelectMovie = (movie) => {
        //  ADD LAST SELECTED MOVIE TO SECCTION STORAGE
        addIDToSessionStorage(movie.Id);
        setPlay(false);
        //  MAKE THIS MOVIE TO FEATURED
        setFeatured(movie);
        setTimeout(() => {
            //PLAY VIDEO AT 2s
            setPlay(true)
        }, 2000)
    }

    return (
        <div className="treding-now-section">
            <h1>Trending Now</h1>
            <Slider {...sliderSettings}>
                {data.map((movie, index) => (
                    <div
                        key={movie.Id}
                        onClick={()=>{handleSelectMovie(movie)}}
                    >
                        {/*  WE DON'T HAVE THE IMAGE URL, WE NEED TO IMPORT IMAGE */}
                        <img
                            src={require(`../assets/${movie.CoverImage}`)}
                            alt={movie.name}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}