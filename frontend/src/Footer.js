import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light border-top mt-5">
      <div className="container py-5">
        <div className="row">

          {/* Logo + Copyright */}
          <div className="col-md-3 mb-4">
            <img
              src="media/images/logo.png"
              alt="logo"
              style={{ width: "120px" }}
              className="mb-3"
            />
            <p className="text-muted small">
              © 2010 - 2024, Not TradeGo Broking Ltd.
              <br />
              All rights reserved.
            </p>

            {/* Social Icons (optional) */}
            <div className="d-flex gap-3 mt-3 text-muted">
              <i className="bi bi-twitter"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>

          {/* Company */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted text-decoration-none">About</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Products</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Pricing</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Referral programme</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Careers</a></li>
              <li><a href="/" className="text-muted text-decoration-none">TradeGo.tech</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Press & media</a></li>
              <li><a href="/" className="text-muted text-decoration-none">TradeGo cares (CSR)</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted text-decoration-none">Contact</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Support portal</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Z-Connect blog</a></li>
              <li><a href="/" className="text-muted text-decoration-none">List of charges</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Downloads & resources</a></li>
            </ul>
          </div>

          {/* Account */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Account</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted text-decoration-none">Open an account</a></li>
              <li><a href="/" className="text-muted text-decoration-none">Fund transfer</a></li>
              <li><a href="/" className="text-muted text-decoration-none">60 day challenge</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="mt-5 text-muted small" style={{ lineHeight: "1.6" }}>
          <p>
            TradeGo Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through TradeGo Securities Pvt.
            Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through
            TradeGo Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
            INZ000038238 Registered Address: TradeGo Broking Ltd., #153/154, 4th
            Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
            Phase, Bengaluru - 560078, Karnataka, India.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details: Name, PAN, Address, Mobile Number, Email.
          </p>

          <p>
            Investments in securities market are subject to market risks; read all
            related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;