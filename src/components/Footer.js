import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <ul className="footer-list">
            <li>
              <a href="/auth" className="footer-list">
                Admin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="registered">
        <p>©2021 Letty's Cakes - Valencia, Venezuela®</p>
      </div>
    </>
  );
};

export default Footer;
