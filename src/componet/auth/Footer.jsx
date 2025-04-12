import React from 'react'

function Footer() {
  return (
    <>
    <footer>
      <div className='container-fuild'>
        <div className='row'>
            <div className='col-lg-3'>
                <div className='footer-one'>
                    <a className="navbar-brand" href="#">
                        <img src="assets/img/logo-main.png" />
                        BNB Verify
                    </a>
                    <p>The most trusted verification platform for BNB Chain assets and smart contracts.</p>
                    <div className='social-icon'>
                        <a href='javascript:void(0);'><img src="assets/img//tiwter.svg" /></a>
                        <a href='javascript:void(0);'><img src="assets/img//s-icon.svg" /></a>
                    </div>
                </div>
            </div>

            <div className='col-lg-3'>
                <div className='footer-two'>
                    <h3>Resources</h3>
                    <ul>
                        <li>
                            <a href='javascript:void(0);'>Documentation</a>
                        </li>
                        <li>
                            <a href='javascript:void(0);'>API Reference</a>
                        </li>
                        <li>
                            <a href='javascript:void(0);'>BNB Chain Explorer</a>
                        </li>
                        <li>
                            <a href='javascript:void(0);'>Security Guide</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='col-lg-3'>
                <div className='footer-two'>
                    <h3>Company</h3>
                    <ul>
                        <li>
                            <a href='javascript:void(0);'>About Us</a>
                        </li>
                        <li>
                            <a href='javascript:void(0);'>Careers</a>
                        </li>
                        <li>
                            <a href='javascript:void(0);'>Blog</a>
                        </li>
                        <li>
                            <a href='javascript:void(0);'>Press</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='col-lg-3'>
                <div className='footer-two'>
                    <h3>Legal</h3>
                    <ul>
                        <li>
                            <a href='javascript:void(0);'>Privacy Policy</a>
                        </li>
                        <li>
                            <a href='javascript:void(0);'>Terms of Service</a>
                        </li>
                        <li>
                            <a href='javascript:void(0);'>Cookie Policy</a>
                        </li>
                        <li>
                            <a href='javascript:void(0);'>Disclaimer</a>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
      </div>
      <div className='container-fuild'>
        <div className='row'>
            <div className='col-lg-6'>
                <p className='copy-tx'>© 2025 BNB Verify. All rights reserved.</p>
            </div>
            <div className='col-lg-6'>
                <p className='power-tx'><span>Powered by</span> BNB Chain</p>
            </div>
        </div>
    </div>
    </footer>
    </>
  )
}

export default Footer
