import './Footer.css';
import { TbBrandShopee } from "react-icons/tb";

function Footer() {
  return (
    <footer className='footer-all'>
    <div className="footer-gray">
      <div className="footer-custom">
        <div className="footer-lists">
          <div className="footer-list-wrap">
            <h6 className="ftr-hdr">Order Toll Free</h6>
            <ul className="ftr-links-sub">
              <li>+216 55 740 956</li>
            </ul>
            <h6 className="ftr-hdr">International</h6>
            <ul className="ftr-links-sub">
              <li><a href="http://www.art.fr" rel="nofollow">TUNISIA</a></li>
              <li><a href="://www.art.co.uk" rel="nofollow">United Kingdom</a></li>
            </ul>
          </div>
          <div className="footer-list-wrap">
            <h6 className="ftr-hdr">Customer Service</h6>
            <ul className="ftr-links-sub">
              <li><a href="/help/talktous.html" rel="nofollow">Contact Us</a></li>
              <li><a href="/help/placingorders.html" rel="nofollow">Ordering</a></li>
              <li><a href="/help/shipping.html" rel="nofollow">Shipping &amp; Delivery</a></li>
              <li><a href="/help/shippingreturns.html" rel="nofollow">Returns</a></li>
              <li><a href="/help/international-shipping.html" rel="nofollow">International Orders</a></li>
              <li><a href="/~/egift-cards/" rel="nofollow">Gift Cards</a></li>
              <li><a href="/help/faq.html" rel="nofollow">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-list-wrap">
            <h6 className="ftr-hdr">Luxuria.com</h6>
            <ul className="ftr-links-sub">
              <li><a href="/asp/aboutus/default-asp/_/posters.htm" rel="nofollow">Our Company</a></li>
              <li><a href="http://corporate.art.com/careers" rel="nofollow">Careers</a></li>
              <li><a href="/asp/landing/artistrising" rel="nofollow">Artist Rising</a></li>
              <li><a href="/~/art-for-business" rel="nofollow">Business &amp; Trade Sales</a></li>
              <li><a href="http://affiliates.art.com/index.aspx" rel="nofollow">Affiliate Program</a></li>
              <li><a href="/catalog" rel="nofollow"><strong>Shop Our Catalog</strong></a></li>
              <li><a href="http://blog.art.com" rel="nofollow">LUXURIA.COM BLOG</a></li>
            </ul>
          </div>
          <div className="footer-list-wrap">
            <h6 className="ftr-hdr">My Account</h6>
            <ul className="ftr-links-sub">
                <li className="ftr-Login"><span className="link login-trigger">Access My Account</span></li>
                <li><span className="link" onClick="link('/asp/secure/your_account/track_orders-asp/_/posters.htm')">Track My Order</span></li>
                <li className="ftr-Login"><span className="link ftr-access-my-account">Access My Account</span></li>
                <li><span className="link" onClick="window.location.href = getProfileKey() + '?pagetype=oh';">Track My Order</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-email">
          <h6 className="ftr-hdr">Sign up for exclusive offers and inspiration</h6>
          <div id="ftr-email" className="ftr-email-form">
            <form id="ftrEmailForm" method="post" action="http://em.art.com/pub/rf">
              <div className="error">Please enter a valid email address</div>
              <input type="text" name="email_address_" id="ftrEmailInput" className="input" placeholder="Enter email address" />
         
              <input type="submit" className="button" value="SUBMIT" />
              <input type="hidden" name="country_iso2" value=""/>
              <input type="hidden" name="language_iso2" value="en"/>
              <input type="hidden" name="site_domain" value="art.com"/>
              <input type="hidden" name="email_acq_source" value="01-000001"/>
              <input type="hidden" name="email_acq_date" value="" id="ftr-email-date"/>
              <input type="hidden" name="brand_id" value="ART"/>
              <input type="hidden" name="_ri_" value="X0Gzc2X%3DWQpglLjHJlYQGnp51yrMf2qXdC9tjU8pzgMtwfYzaVwjpnpgHlpgneHmgJoXX0Gzc2X%3DWQpglLjHJlYQGnyLSq2fzdkuzdzglHMsUhgeNzaSgkk"/>
            </form>
          </div>
          <div className="ftr-email-privacy-policy"></div>
        </div>
        <div className="footer-social">
          <h6 className="ftr-hdr">Follow Us</h6>
          <ul>
            <li>
              <a href="://www.facebook.com/art.com" title="Facebook" onClick="_gaq.push(['_trackSocial', 'Facebook', 'Follow', 'Footer', 'undefined', 'True']);">
                <img width="24" height="24" alt="Like us on Facebook" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png"/>
              </a>
            </li>
            <li>
              <a href="://plus.google.com/108089796661280870153" title="Google+" onClick="_gaq.push(['_trackSocial', 'GooglePlus', 'Follow', 'Footer', 'undefined', 'True']);">
                <img width="24" height="24" alt="Follow us on Google+" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png"/>
              </a>
            </li>
            <li>
              <a href="://pinterest.com/artdotcom/" target="_blank">
                <img width="24" height="24" alt="Follow us on Pinterest" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/pin-badge.png"/>
              </a>
            </li>
            <li>
              <a target="_blank" href="http://instagram.com/artdotcom/">
                <img width="24" height="24" alt="Follow us on Instagram" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png"/>
              </a>
            </li>
            <li>
              <a href="://www.twitter.com/artdotcom" title="Twitter" onClick="_gaq.push(['_trackSocial', 'Twitter', 'Follow', 'Footer', 'undefined', 'True']);">
                <img width="67" alt="Follow us on Twitter" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/twitter.png"/>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-legal">
          <p>&copy; Luxuria.com Inc. All Rights Reserved. | <a href="/help/privacy-policy.html" rel="nofollow">Privacy Policy</a> | <a href="/help/terms-of-use.html" rel="nofollow">Terms of Use</a> | <a href="/help/terms-of-sale.html" rel="nofollow">Terms of Sale</a></p>
          <p>Luxuria.com, You+Luxuria, and Photos [to] Luxuria are trademarks or registered trademarks of Luxuria.com Inc.</p>
          <p>Various aspects of this website are covered by issued US patent No. 7,973,796 and other pending patent applications.</p>
        </div>
        <div className="footer-payment">
          <ul>
            <li className="ftr-stella">
              <span title="Stella Service" onClick="openLink('http://www.stellaservice.com/profile/Art.com/')"></span>
            </li>
            <li>
              <span onClick="clickTrack(); return false;"><img border="0" alt="HACKER SAFE certified sites prevent over 99.9% of hacker crime." src="://images.scanalert.com/meter/www.art.com/31.gif"/></span>
            </li>
            <li className="ftr-bbb">
              <span title="BBB" onClick="openLink('http://www.bbb.org/raleigh-durham/business-reviews/art-suppliers/artcom-inc-in-raleigh-nc-5001914')"></span>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  </footer>
  );
}

export default Footer;
