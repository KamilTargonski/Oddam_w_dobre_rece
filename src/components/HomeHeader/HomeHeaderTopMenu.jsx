import {HomeHeaderTopMenuLog} from "./HomeHeaderTopMenuLog";
import {HomeHeaderTopMenuNav} from "./HomeHeaderTopMenuNav";

export function HomeHeaderTopMenu() {
    return (
        <div className="nav-panel">
            <HomeHeaderTopMenuLog />
            <HomeHeaderTopMenuNav />
        </div>
    )
}