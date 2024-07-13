import styled from "styled-components";

const Footr = styled.div`
  padding: 10px;
  font-size: 1.4rem;
  padding: 4rem 4rem 0 4rem;
  background-color: white;
  margin-top: 2.4rem;
  margin-bottom: 1.4rem;
`;

const AboveFooter = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  padding: 1.2rem 1.2rem 2.4rem 1.2rem;
  margin-bottom: 1.4rem;
  border-bottom: 1px solid rgba(147, 147, 147, 0.4);

  .footer_functionalities {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .app_footer p {
    width: 50%;
  }

  div.p {
    line-height: 1.2;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  div.p:hover {
    text-decoration: none;
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    justify-items: normal;
    text-align: center;

    .app_footer {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1.8rem;
    }

    .app_footer p {
      width: 60%;
    }
  }

  @media screen and (max-width: 400px) {
    .footer_functionalities {
      // grid-template-columns: 1fr;
      gap: 2.4rem;
    }
  }
`;

const BelowFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.4rem;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

const DIV = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  h3 {
    font-size: 1.4rem;
  }
`;

function Footer() {
  return (
    <Footr className="footer">
      <AboveFooter>
        <div className="app_footer">
          <h1>Grocery On the Go</h1>
          <p>
            Discover fresh deals and unbeatable savings on all your grocery
            needs with Grocery On the Go!
          </p>
        </div>
        <div className="footer_functionalities">
          <div>
            <h3>Shop</h3>
            <p>Sell Online</p>
            <p>Features</p>
            <p>Examples</p>
            <p>Website Editors</p>
            <p>Online Retail</p>
          </div>
          <div>
            <h3>Press</h3>
            <p>Events</p>
            <p>News</p>
            <p>Awards</p>
            <p>Testimonials</p>
            <p>Online Retail</p>
          </div>
          <div>
            <h3>About</h3>
            <p>Contact</p>
            <p>Services</p>
            <p>Team</p>
            <p>Career</p>
            <p>Contacts</p>
          </div>
        </div>
      </AboveFooter>
      <div className="below_footer">
        <BelowFooter>
          <DIV>
            <h3>
              {" "}
              <a>Privacy Link</a>
            </h3>
            <h3>
              {" "}
              <a>Terms & Conditions</a>
            </h3>
            <h3>
              {" "}
              <a>Code of Conduct</a>
            </h3>
          </DIV>
          <DIV>
            <a>
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a>
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a>
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a>
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </DIV>
        </BelowFooter>
        <p>
          Stay connected with Grocery On the Go for convenient and hassle-free
          shopping experiences!
        </p>
      </div>
      {/* <span>&copy; All rights reserved Powered by Infinity Cortex</span> */}
    </Footr>
  );
}

export default Footer;
