import {HomeHeaderHeroImage} from "./HomeHeaderHeroImage";
import {HomeHeaderTopMenu} from "./HomeHeaderTopMenu";
import {HomeHeaderIntro} from "./HomeHeaderIntro";

export function HomeHeader() {
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