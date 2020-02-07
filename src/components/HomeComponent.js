import React from 'react';

function Home() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row row-content">
                    <div className="col-md-10 mx-auto">
                        <div id="homeCarousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#homeCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#homeCarousel" data-slide-to="1"></li>
                                <li data-target="#homeCarousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="./img/mountainviews2.jpg" alt="Mountain Views" />
                                    <div className="carousel-caption">
                                        <h3 className="carouselHeading">Mountain Views</h3>
                                        <p className="d-none d-sm-block">Our standard rooms all feature a king bed, built-in gas fireplace, and mountain views.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src=".img/remotecabin.jpg" alt="Remote Cabins" />
                                    <div className="carousel-caption">
                                        <h3 className="carouselHeading">Remote Cabins</h3>
                                        <p className="d-none d-sm-block">For the adventurous sort, there are private cabins deep in the woods, away from the crowds.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src=".img/rusticlodge.jpg" alt="Rustic Lodge &amp; Brewery" />
                                    <div className="carousel-caption">
                                        <h3 className="carouselHeading">Rustic Lodge</h3>
                                        <p className="d-none d-sm-block">Whether you're returning from skiing or a day of soaking up the sun, a fresh brew always sounds right.</p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            <button className="btn btn-danger btn-sm" id="carouselButton">
                                <i className="fa fa-pause"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row row-content mt-2">
                    <div className="col-md-6 col-lg-7 col-xl-8 order-2 order-md-1">
                        <h2>Year-Round Outdoor Recreation Hotspot</h2>
                        <img src="../img/insta.png" className="img-fluid" width="704" height="812" />
                    </div>
                    <div className="col order-1 order-md-2 mb-2">
                        <div className="card border-secondary">
                            <h4 className="card-header">Check Room Availability</h4>
                            <div className="card-body">
                                <form id="reserveForm">
                                    <div className="row form-group">
                                        <label for="date" className="col-lg-6 col-form-label">Check in:</label>
                                        <div className="col-lg-6">
                                            <input type="date" name="date" id="date" className="form-control" placeholder="Date"/>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <label for="date" className="col-lg-6 col-form-label">Check out:</label>
                                        <div className="col-lg-6">
                                            <input type="date" name="date" id="date" className="form-control" placeholder="Date"/>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-6">
                                            <label for="roomType" className="col-form-label">Room Type</label>
                                        </div>
                                        <div className="col-6 btn-group btn-group-toggle" data-toggle="buttons">
                                            <label className="btn btn-success">
                                                <input type="radio" name="roomType" id="roomHotel" value="hotel" autocomplete="off" checked /> Hotel
                                            </label>
                                            <label className="btn btn-primary">
                                                <input type="radio" name="roomType" id="roomCabin" value="cabin" autocomplete="off" /> Cabin
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                            <button type="submit" className="btn btn-primary">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-content mt-2">
                    <div className="col">
                        <h2>Legendary Breakfast</h2>
                        <p></p>
                        <img src="../img/breakfast.jpg" className="img-fluid" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;