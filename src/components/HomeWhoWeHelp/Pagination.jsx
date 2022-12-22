export function Pagination({postsPerPage, totalPosts, paginate, currentPage}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    if (pageNumbers.length > 1) {
        return (
            <nav>
                <ul className='pagination-list'>
                    {pageNumbers.map((number, index) => (
                        <li key={index}>
                            <button onClick={() => {
                                paginate(number);
                            }}
                                    style={number === currentPage ? {border: '0.75px solid #3C3C3C'} : null}
                            >
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}

