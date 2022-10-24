import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Pagination = () => {
    return (
        <div className="d-flex mt-4 flex-wrap">
                            <p class="text-muted">Showing 1 to 10 of 57 entries</p>
                            <nav className="ml-auto">
                                <ul class="pagination separated pagination-info">
                                    <li class="page-item"><a href="#" class="page-link"><i
                                                class="icon-arrow-left" style={{color:'black'}}></i></a></li>
                                    <li class="page-item active"><a href="#" class="page-link">1</a></li>
                                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                                    <li class="page-item"><a href="#" class="page-link">3</a></li>
                                    <li class="page-item"><a href="#" class="page-link">4</a></li>
                                    <li class="page-item"><a href="#" class="page-link"><i
                                                class="icon-arrow-right"></i></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        
    );
};

export default Pagination;