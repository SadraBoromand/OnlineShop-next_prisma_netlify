import React from 'react';

const Header = ({categories}) => {
    // console.log('Header', categories[0].title)

    return (
        <>
            {/*header*/}
            <div className="container my-3">
                <div className="row">
                    <div className='col-md-6 mb-3'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src="/assets/images/left-banner-image.jpg" className="d-block w-100 rounded-3"
                                 style={{height: '80vh'}}
                                 alt="main image"/>
                            <span className='position-absolute text-white display-4'>
                                فروشگاه{' '}
                                <span style={{color:'#FF728B'}}>گل</span>
                                <img src="/assets/flower.png" alt="logo" width={32} height={32}/>
                            </span>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="row h-50">
                            <div className="col px-1 mb-2">
                                <div className='d-flex justify-content-center align-items-center h-100'>
                                    {(categories[0].image).toString().length > 0 ? (
                                        <img src={categories[0].image}
                                             className="d-block w-100 h-100 rounded-3"
                                             alt={categories[0].title}/>
                                    ) : (
                                        <img src="/assets/images/left-banner-image.jpg"
                                             className="d-block w-100 h-100 rounded-3"
                                             alt={categories[0].title}/>
                                    )}
                                    <span className='position-absolute text-white text-center'>{categories[0].title}
                                        <br/>
                                        {categories[0].desc}</span>
                                </div>
                            </div>
                            <div className="col px-1 mb-2">
                                <div className='d-flex justify-content-center align-items-center h-100'>
                                    {(categories[1].image).toString().length > 0 ? (
                                        <img src={categories[1].image}
                                             className="d-block w-100 h-100 rounded-3"
                                             alt={categories[1].title}/>
                                    ) : (
                                        <img src="/assets/images/left-banner-image.jpg"
                                             className="d-block w-100 h-100 rounded-3"
                                             alt={categories[1].title}/>
                                    )}
                                    <span className='position-absolute text-white text-center'>{categories[1].title}
                                        <br/>
                                        {categories[1].desc}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row h-50">
                            <div className="col px-1 mb-2">
                                <div className='d-flex justify-content-center align-items-center h-100'>
                                    {(categories[4].image).toString().length > 0 ? (
                                        <img src={categories[4].image}
                                             className="d-block w-100 h-100 rounded-3"
                                             alt={categories[4].title}/>
                                    ) : (
                                        <img src="/assets/images/left-banner-image.jpg"
                                             className="d-block w-100 h-100 rounded-3"
                                             alt={categories[4].title}/>
                                    )}
                                    <span className='position-absolute text-white text-center'>{categories[4].title}
                                        <br/>
                                        {categories[4].desc}
                                    </span>
                                </div>
                            </div>
                            <div className="col px-1 mb-2">
                                <div className='d-flex justify-content-center align-items-center h-100'>
                                    {(categories[3].image).toString().length > 0 ? (
                                        <img src={categories[3].image}
                                             className="d-block w-100 h-100 rounded-3"
                                             alt={categories[3].title}/>
                                    ) : (
                                        <img src="/assets/images/left-banner-image.jpg"
                                             className="d-block w-100 h-100 rounded-3"
                                             alt={categories[3].title}/>
                                    )}
                                    <span className='position-absolute text-white text-center'>{categories[3].title}
                                        <br/>
                                        {categories[3].desc}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*end header*/}
        </>
    )
}

export default Header;