
const Footer = () => {
  return (
    // <footer id="footer" className="footer">
    //   <p>&copy; 2024 Your Company</p>
    // </footer>

    <footer id="footer" className="footer coffee-background">
      <div className="container">
        <div className="copyright text-center ">
          <p><span>Copyright</span> © {(new Date().getFullYear())} &nbsp;<strong>SoCo Wellness MedSpa</strong>&nbsp; <span>All Rights Reserved.</span></p>
          {/* <p><span>Designed and Developed by</span> <a href="https://mousewurx.com/" target="_blank" rel="noreferrer"><strong className="px-1 sitename">mousewurx</strong></a></p> */}
        </div>
        <div className="social-links d-flex justify-content-center">
          {/* <a href=""><i className="bi bi-twitter-x"></i></a> */}
          <a href="https://www.facebook.com/story.php?story_fbid=122105813612709092&substory_index=831504905718856&id=61571272787276&sfnsn=mo&mibextid=RUbZ1f&_rdr" title="Facebook" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/soco.wm?igsh=MWQ1ZGUxMzBkMA==" title="Instagram" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
          <a href="https://g.co/kgs/jBv2vkX" title="Google" target="_blank" rel="noreferrer"><i className="bi bi-google"></i></a>
          <a href="https://www.yelp.com/biz/soco-wellness-med-spa-fullerton" title="Yelp" target="_blank" rel="noreferrer"><i className="bi bi-yelp"></i></a>
        </div>
        {/* <div className="credits">
          Designed by <a href="https://mousewurx.com/" target="_blank" rel="noreferrer">mousewurx</a>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer