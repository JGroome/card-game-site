import { Link } from "react-router-dom";

export default function Footer() {
  return (
<><footer className="site-footer">
    <div className="footer-inner">
        <p className="brand-blurb">Brief description.</p>
        <div className="legal">
            <Link to="/contact-us">Contact Us</Link>
            <span>Privacy</span>
            <span>© Joseph Groome</span>
        </div>
    </div>
</footer></>
  );
}
