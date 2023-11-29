import React from 'react';
import Link from "next/link";

const Navbar = ({categories}) => {
    return (
        <>
            {/*navbar*/}
            <nav className="navbar navbar-expand-lg bg-white border-bottom">
                <div className="container-sm ">
                    <Link className="navbar-brand" href="/">
                        <img src="/assets/flower.png" className='ms-2' alt="logo" width={32} height={32}/>
                        فروشگاه گل
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {
                                categories.map((cat, i) => (
                                    <li className="nav-item" key={i}>
                                        <a className="nav-link" href="#">{cat.title}</a>
                                    </li>
                                ))
                            }
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link disabled" aria-disabled="true">Disabled</a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item dropdown">*/}
                            {/*    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"*/}
                            {/*       aria-expanded="false">*/}
                            {/*        Link*/}
                            {/*    </a>*/}
                            {/*    <ul className="dropdown-menu">*/}
                            {/*        <li><a className="dropdown-item" href="#">Action</a></li>*/}
                            {/*        <li><a className="dropdown-item" href="#">Another action</a></li>*/}
                            {/*        <li>*/}
                            {/*            <hr class="dropdown-divider"/>*/}
                            {/*        </li>*/}
                            {/*        <li><a class="dropdown-item" href="#">Something else here</a></li>*/}
                            {/*    </ul>*/}
                            {/*</li>*/}
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="جستجو کنید"
                                   aria-label="Search"/>
                            <button className="btn btn-sm btn-outline-dark rounded-3" type="submit">جستجو</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/*end navbar*/}
        </>
    )
}

export default Navbar;