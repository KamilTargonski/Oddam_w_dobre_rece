import {IndexHomeHeader} from "./HomeHeader/indexHomeHeader";
import {IndexHome3Col} from "./Home3Col/indexHome3Col";
import {IndexHome4Steps} from "./Home4steps/indexHome4Steps";
import {IndexHomeAboutUs} from "./HomeAboutUs/indexHomeAboutUs";
import {IndexHomeWhoWeHelp} from "./HomeWhomHelp/indexHomeWhoWeHelp";

export function Home() {
    return (
        <div className="home">
            <IndexHomeHeader />
            <IndexHome3Col />
            <IndexHome4Steps />
            <IndexHomeAboutUs />
            <IndexHomeWhoWeHelp />
        </div>
    )
}