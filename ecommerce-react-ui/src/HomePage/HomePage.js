const HomePage = () => {
  return (
    <div className="homepage_container">
      <hr/>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href={'/'}>
                    ទំព័រដើម
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={'/products'}>
                    មុខទំនិញ
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href={'/customers'}
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    អតិថិជន
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="ស្វែងរក"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  ស្វែងរក
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <hr/>

      <main className="content p-4">
        ទំព័រ <strong>ដើម</strong>
      </main>
    </div>
  );
};

export default HomePage;
