import React from "react";
const Dashboard = (props) => {
    return (
        <>
            <header className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#"> <strong>Ginni Prediction System</strong></a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <input className="form-control form-control-light" type="text" placeholder="Search" aria-label="Search" /> */}
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <a className="nav-link px-3" href="#">
                            <button className="btn btn-success" type="button">
                                <strong>Login</strong>
                            </button>
                        </a>
                    </div>
                </div>
            </header>
            <div className="container-fluid">

                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        <span data-feather="home"></span>
                                        Dashboard
                                    </a>
                                </li>

                            </ul>

                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Earthquake Reports</span>
                                <a className="link-secondary" href="#" aria-label="Add a new report">
                                    <span data-feather="plus-circle"></span>
                                </a>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Previous Years
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <br></br>
                        <h2>Year Wise Presiction</h2>
                        <br></br>
                        <div className="table-responsive">
                            <h4>Predict Earthquake</h4>
                            <form action="http://localhost:9000/year" method="POST">
                                <div className="form-group">
                                    <label>Year</label>
                                    <input  type='number' required  className="form-control" name="year_id" pattern="{1985-2020}" />
                                </div>
                                <br></br>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <br></br>
                            </form>

                        </div>
                    </main>
                
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <br></br>
                        <h2>Future Prediction</h2>
                        <br></br>
                        <div className="table-responsive">
                            <h4>Predict Earthquake</h4>
                            <form action="http://localhost:9000/future" method="POST">
                                <div className="form-group">
                                    <label>Enter Future Year</label>
                                    <input type='number' required  className="form-control" name="year_id" />
                                </div>
                                <br></br>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <br></br>
                            </form>

                        </div>
                    </main>
                    
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <br></br>
                        <h2>Custom Prediction</h2>
                        <br></br>
                        <div className="table-responsive">
                            <h4>Predict Future Custom Earthquake</h4>
                            <form action="http://localhost:9000/prediction" method="POST">
                                <div className="col-auto">
                                    <div class="form-group">
                                        <label for="ISBN">Year</label>
                                        <input type='number' required class="form-control" name="year" />
                                    </div>
                                    <div class="form-group">
                                        <label for="Title">Temperature</label>
                                        <input type='number' requiredtype='number' required class="form-control" name="temp" />
                                    </div>

                                    <div class="form-group">
                                        <label for="Title">Pressure</label>
                                        <input type='number' required class="form-control" name="pressure" />
                                    </div>

                                    <div class="form-group">
                                        <label for="Title">Static Reservoir</label>
                                        <input type='number' required class="form-control" name="rstatic" />
                                    </div>

                                    <div class="form-group">
                                        <label for="Title">Flowing Reservoir</label>
                                        <input type='number' required class="form-control" name="rflow" />
                                    </div>

                                    <div class="form-group">
                                        <label for="Title">Sediments</label>
                                        <input type='number' required class="form-control" name="sediment" />
                                    </div>

                                    <div class="form-group">
                                        <label for="Title">Energy Released</label>
                                        <input type='number' required class="form-control" name="erelease" />
                                    </div>

                                    <div class="form-group">
                                        <label for="Title">RainFall</label>
                                        <input type='number' required class="form-control" name="rain" />
                                    </div>

                                    <div class="form-group">
                                        <label for="Title">Year Of Last Earth Quake</label>
                                        <input type='number' required class="form-control" name="lastEarthQuake" />
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>

                                </div>
                            </form>

                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
export default Dashboard;