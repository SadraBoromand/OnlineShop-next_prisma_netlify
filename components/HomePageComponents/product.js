import React from 'react';

const Product = ({title, price, colors, image}) => {

    const colorsHandler = () => {
        const colorsArray = colors.split(',');
        let colorsJSX = [];
        for (let i = 0; i < colorsArray.length; i++) {
            let color = colorsArray[i];
            if (color === 'r')
                colorsJSX.push(<div key={i} className='bg-danger rounded-pill pe-1'
                                    style={{width: '15px', height: '15px'}}></div>)
            else if (color === 'g')
                colorsJSX.push(<div key={i} className='bg-success rounded-pill pe-1'
                                    style={{width: '15px', height: '15px'}}></div>)
            else if (color === 'b')
                colorsJSX.push(<div key={i} className='bg-primary rounded-pill pe-1'
                                    style={{width: '15px', height: '15px'}}></div>)
            else if (color === 'bk')
                colorsJSX.push(<div key={i} className='bg-dark rounded-pill pe-1'
                                    style={{width: '15px', height: '15px'}}></div>)
        }
        return colorsJSX;
    }

    return (

        <div className="col-md-3 col-sm-4 col-6">
            <div className="card border-0 border-bottom rounded-0 mb-3">
                {image && !image > 0 ? (
                    <img src={image} className="card-img-top rounded-3"
                         alt="..."/>
                ) : (
                    <img src="/assets/images/explore-image-02.jpg" className="card-img-top rounded-3"
                         alt="..."/>
                )}
                <div className="card-body">
                    <h5 className="card-title">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-12">
                                {title}
                            </div>
                            <div className="col-sm-12 col-md-6 col-12">
                                <div className='text-muted float-start'>${price}</div>
                            </div>
                        </div>


                    </h5>
                    <small className='text-muted d-flex justify-content-between align-items-center mt-2'>
                        رنگ ها:{colorsHandler()}
                    </small>
                </div>
            </div>
        </div>
    )
}

export default Product;