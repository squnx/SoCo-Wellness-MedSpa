
const Footer = () => {
  return (
    // <footer id="footer" className="footer">
    //   <p>&copy; 2024 Your Company</p>
    // </footer>

    <footer id="footer" className="footer coffee-background">
      <div className="container">
        <div className="copyright text-center ">
          <p><span>Copyright</span> © &nbsp;<strong>SoCo Wellness MedSpa</strong>&nbsp; <span>All Rights Reserved</span></p>
          <p><span>Designed by</span> <a href="https://mousewurx.com/" target="_blank" rel="noreferrer"><strong className="px-1 sitename">mousewurx</strong></a></p>
        </div>
        <div className="social-links d-flex justify-content-center">
          {/* <a href=""><i className="bi bi-twitter-x"></i></a> */}
          <a href="https://www.facebook.com/socoaghc/" title="Facebook" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/socoaghc/" title="Instagram" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
          {/* <a href=""><i className="bi bi-google"></i></a> */}
        </div>
        {/* <div className="credits">
          Designed by <a href="https://mousewurx.com/" target="_blank" rel="noreferrer">mousewurx</a>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer