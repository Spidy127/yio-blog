import "./index.css";
const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
          <div className="row">
            {/* column1 */}
            <div className="col">
              <h4>Yio Blog</h4>
              <ul>
                <li>Contact no - 1800 000 3000</li>
                <li>Noida, India</li>
                <li>Sector 51 Noid</li>
              </ul>
            </div>
            {/* column2 */}
            <div className="col col2">
              <h4>Top Blogs</h4>
              <ul>
                <li>Walking on path</li>
                <li>Self-believe</li>
                <li>Hard work</li>
              </ul>
            </div>
            {/* column3 */}
            <div className="col col3">
              <h4>Social Media</h4>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>X</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Yio Blog | All right reserved | Terms of Service | Privacy
            </p>
          </div>
        </div>
      </footer>
        );
}
 
export default Footer;