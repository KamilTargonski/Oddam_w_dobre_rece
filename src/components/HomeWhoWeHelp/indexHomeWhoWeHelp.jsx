import React, {useState} from "react";
import {WhoDataFundations, WhoDataOrganizations, WhoDataLocal} from "./WhoData";
import decoration from "../../assets/Decoration.svg"
import {Pagination} from "./Pagination";

export function IndexHomeWhoWeHelp() {
    const fndInfo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.';
    const orgInfo = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto dicta doloribus eligendi explicabo fugiat molestiae possimus recusandae temporibus voluptatem!';
    const locInfo = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eos exercitationem iste quos totam. Beatae ducimus fugit modi quibusdam quo tempora, ullam!';

    const [posts,setPosts] = useState([WhoDataFundations]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(3);
    const [info, setInfo] = useState(fndInfo)

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.map(item => item.slice(indexOfFirstPost,indexOfLastPost));

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

        return (
            <section className='who' id='section4'>
                <div className="who-header">
                    <div className="who-title">
                        <h2>Komu pomagamy?</h2>
                        <img className='deco' src={decoration} alt="underline-decoration" />
                    </div>

                    <div className="who-header-buttons">
                        <button onClick={() => {
                            setPosts([WhoDataFundations]);
                            setInfo(fndInfo);
                            setCurrentPage(1);
                        }}
                                style={info === fndInfo ? {border: '0.75px solid #3C3C3C'} : null}
                        >
                            Fundacjom
                        </button>
                        <button onClick={() => {
                            setPosts([WhoDataOrganizations]);
                            setInfo(orgInfo);
                            setCurrentPage(1);
                        }}
                                style={info === orgInfo ? {border: '0.75px solid #3C3C3C'} : null}
                        >
                            Organizacjom <br/> pozarządowym
                        </button>
                        <button onClick={() => {
                            setPosts([WhoDataLocal]);
                            setInfo(locInfo);
                            setCurrentPage(1);
                        }}
                                style={info === locInfo ? {border: '0.75px solid #3C3C3C'} : null}
                        >
                            Lokalnym <br/> zbiórkom
                        </button>
                    </div>
                </div>

                <div className='who-text-info'>
                    <div className='who-info'>
                        {info}
                    </div>

                    <ul className='who-list'>
                        {currentPosts.map(item => item.map(post => (
                            <li key={post.id}>
                                <div className="main-info">
                                    <h3>
                                        {post.title}
                                    </h3>
                                    <p>{post.text}</p>
                                </div>
                                <div className='aside-info'>
                                    {post.aside}
                                </div>
                            </li>
                        )))}
                    </ul>
                    <Pagination postsPerPage={postPerPage} totalPosts={posts.map(item => item.length)} paginate={paginate} currentPage={currentPage}/>
                </div>
            </section>
        )
}