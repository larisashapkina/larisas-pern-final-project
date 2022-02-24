function Footer(){
    return(
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h1 className="logo-text"><span>Stiletto</span> App</h1> 
                    <p>
                        A Stiletto App - a single model CRUD app API, using RESTful 
                        routes and consuming it with a create-react-app front-end
                    </p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i>☎️123-456-789</span>
                        <span><i className="fas fa-envelope"></i>📧 larisashapkina@pursuit.org</span>
                    </div>
                    <div className="footer-bottom">
                        Designed by Larisa Shapkina
                    </div>
                </div>
            </div>
        </div>   
    )
}
    
export default Footer;