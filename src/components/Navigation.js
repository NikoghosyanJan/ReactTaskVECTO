import {extraMenuData, navData} from "../data/data";
import userImage from "../assets/https_specials-4.png"
import "./style.scss";

export default function Navigation() {

    return (
        <nav
            onMouseEnter={(event) => {
                if (event.currentTarget.classList.contains("unhovered")) {
                    event.currentTarget.classList.remove("unhovered")
                }
                event.currentTarget.classList.add("hovered");
            }}
            onMouseLeave={(event) => {
                event.currentTarget.classList.add("unhovered");
                event.currentTarget.classList.remove("hovered")

            }}
        >
            {/*  ON MOUSE ENTER SET CLASS NAME FOR OPEN MENU ANIMATION,  AND REMOVE ON MOUSE LEAVE*/}
            <div className="user-info">
                <div><img src={userImage}/></div>
                <h1>Daniel</h1>
            </div>
            <div className="navigation">
                {navData.map((item, index) => (
                    <div
                        className={`nav-item ${item.name === "Home" ? "active" : ""}`}
                        key={index}
                    >
                        {/*  IN THE FILE, WHERE IS "navData", I HAVE ALREADY IMPORTED IMAGES*/}
                        <div className="image"><img src={item.icon} alt="sdf"/></div>
                        <div className="item-name">{item.name}</div>
                    </div>
                ))}
            </div>
            <div className="extra-menu">
                {extraMenuData.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </nav>
    )
}