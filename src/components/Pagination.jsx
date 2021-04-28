import React from 'react';

const Pagination = ({page, total_pages, handleBtnPagination}) => {
   
    const pages = [];

    for(var i = 1; i <= total_pages; i++) {
        pages.push(<a  data-index={i} onClick={e => handleBtnPagination(e)} className="cdp_i">{i}</a>)
    }

    return (
        <div className="content_detail__pagination cdp" actpage={page}>
            <a data-index={parseInt(page)-1} onClick={e => handleBtnPagination(e)} className="cdp_i">Anterior</a>
            {pages}
            <a data-index={parseInt(page)+1} onClick={e => handleBtnPagination(e)} className="cdp_i">Próximo</a>
        </div>
    );
};

export default Pagination;