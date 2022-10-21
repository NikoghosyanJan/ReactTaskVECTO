import { navData } from "../data/data";
import "./style.scss"

export default function Navigation() {

    return (
        <nav>
            <div className="navigation">
                {navData.map((item, index) => (
                    <div 
                    className={`nav-item ${item.name === "Home" ? "active" : ""}`}
                    key={index}
                    >
                        <div className="image"><img src={item.icon} alt="sdf" /></div>
                        <div className="item-name">{item.name}</div>
                    </div>
                ))}
            </div>
        </nav>
    )
}