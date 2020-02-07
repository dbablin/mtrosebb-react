import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social Media</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+17755551234"><i className="fa fa-phone" /> 1-775-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:mtrosebb@gmail.com"><i className="fa fa-envelope-o" /> mtrosebb@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;