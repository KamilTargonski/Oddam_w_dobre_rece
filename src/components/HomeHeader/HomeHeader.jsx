import {HomeHeaderHeroImage} from "./HomeHeaderHeroImage";
import {HomeHeaderTopMenu} from "./HomeHeaderTopMenu";
import {HomeHeaderIntro} from "./HomeHeaderIntro";

export function HomeHeader() {
    return (
        <section className="header-section">
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