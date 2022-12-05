import {HomeHeaderHeroImage} from "./HomeHeaderHeroImage";
import {HomeHeaderTopMenu} from "./HomeHeaderTopMenu";
import {HomeHeaderIntro} from "./HomeHeaderIntro";
import {IndexHome3Col} from "../Home3Col/indexHome3Col";

export function IndexHomeHeader() {
    return (
        <section className="header-section" id='section1'>
            <div className="header-aside">
                <HomeHeaderHeroImage />
            </div>
            <div className="header-main">
                <HomeHeaderTopMenu />
                <HomeHeaderIntro />
            </div>
        </section>
    )
}