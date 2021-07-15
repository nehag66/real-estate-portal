import React from "react";

const footer = () => {
  return (
    <div>
      <footer class="flex-rw">
        <ul class="footer-list-top">
          <li>
            <h4 class="footer-list-header">About Real Estate</h4>
          </li>
          <li>
            <a
              href="/shop/about-mission"
              class="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              GET TO KNOW US
            </a>
          </li>
          <li>
            <a
              href="/promos.html"
              class="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              PROMOS
            </a>
          </li>
          <li>
            <a
              href="/partner/new-partners.html"
              class="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              BECOME A PARTNER
            </a>
          </li>

          <li>
            <a
              href="/job-openings.html"
              itemprop="significantLink"
              class="generic-anchor footer-list-anchor"
            >
              JOB OPENINGS
            </a>
          </li>

          <li>
            <a
              href="/shop/requirements"
              class="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              REQUIREMENTS
            </a>
          </li>
        </ul>
        <ul class="footer-list-top">
          <li>
            <h4 class="footer-list-header">The Houses Location Selection</h4>
          </li>

          <li>
            <a
              href="/christchurch/id/70"
              class="generic-anchor footer-list-anchor"
            >
              CHRISTCHURCH
            </a>
          </li>
          <li>
            <a
              href="/wellington/id/64"
              class="generic-anchor footer-list-anchor"
            >
              WELLINGTON
            </a>
          </li>
          <li>
            <a href="/auckland/id/32" class="generic-anchor footer-list-anchor">
              AUCKLAND
            </a>
          </li>
          <li>
            <a href="/dunedin/id/108" class="generic-anchor footer-list-anchor">
              DUNEDIN
            </a>
          </li>
          <li>
            <a
              href="/rotorua/id/117"
              class="generic-anchor footer-list-anchor"
              target="_blank"
            >
              ROTORUA
            </a>
          </li>
        </ul>
        <ul class="footer-list-top">
          <li id="help">
            <h4 class="footer-list-header">Please Help Me</h4>
          </li>
          <li>
            <a
              href="/shop/about-contact"
              class="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              CONTACT
            </a>
          </li>
          <li>
            <a
              href="/faq.html"
              class="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              FAQ
            </a>
          </li>
          <li id="find-a-store">
            <a
              href="/shop/office-location"
              class="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              OFFICE LOCATION
            </a>
          </li>
          <li id="user-registration">
            <a
              href="/shop/user-registration?URL="
              class="generic-anchor footer-list-anchor"
              itemprop="significantLink"
            >
              NEW USERS
            </a>
          </li>
          <li id="order-tracking">
            <a
              href="/shop/order-status"
              itemprop="significantLink"
              class="generic-anchor footer-list-anchor"
            >
              ORDER STATUS
            </a>
          </li>
        </ul>
        <section class="footer-social-section flex-rw">
          <span class="footer-social-overlap footer-social-connect">
            CONNECT <span class="footer-social-small">with</span> US
          </span>
        </section>
        <section class="footer-bottom-section flex-rw">
          <div class="footer-bottom-wrapper">
            <i class="fa fa-copyright" role="copyright"></i> 2021 New Plymouth,
            New Zealand
            <span class="footer-bottom-rights"> - All Rights Reserved - </span>
          </div>
          <div class="footer-bottom-wrapper">
            <a href="/terms-of-use.html" class="generic-anchor" rel="nofollow">
              Terms
            </a>{" "}
            |{" "}
            <a
              href="/privacy-policy.html"
              class="generic-anchor"
              rel="nofollow"
            >
              Privacy
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default footer;
