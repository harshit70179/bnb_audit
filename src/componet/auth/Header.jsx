import React from "react";

function Header() {
  return (
    <>
    <header>
      <div className="container-fuild">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img src="assets/img/logo-main.png" />
                  BNB Verify
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                      Explorer
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">
                      Tokens
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                      NFTs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                      DApps
                      </a>
                    </li>
                    
                    
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header;
