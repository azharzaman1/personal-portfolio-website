import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import "./pricing.css";

const Pricing = () => {
  return (
    <div className="pricingContainer">
      <div className="pricingTop__section">
        <p>Select your Plan according to your budget, then we can negotiate</p>
      </div>
      <div class="plansWrapper">
        <div class="plan" id="planTop__marginMobile">
          <h3 class="planTitle">Basic</h3>
          <div class="planCost">
            <span class="planPrice">$125</span>
          </div>
          <ul class="planFeatures">
            <li className="no">
              <CloseIcon /> Free Domain
            </li>
            <li className="no">
              <CloseIcon /> Hosting
            </li>
            <li className="yes">
              <CheckIcon />
              Rivisions (1)
            </li>
            <li className="yes">
              <CheckIcon /> Maintainance (7-Days)
            </li>
            <li className="yes"> Good UI</li>
            <li className="yes"> Good UX</li>
          </ul>
          <div class="planCode">
            <span>BAS_125</span>
          </div>
        </div>
        <div class="plan" id="planTop__marginMobile">
          <h3 class="planTitle">Standard</h3>
          <div class="planCost">
            <span class="planPrice">$179</span>
          </div>
          <ul class="planFeatures">
            <li className="yes">
              <CheckIcon /> Free Domain
            </li>
            <li className="yes">
              <CheckIcon /> Hosting (3-Months)
            </li>
            <li className="yes">
              <CheckIcon />
              Rivisions (3)
            </li>
            <li className="yes">
              <CheckIcon /> Maintainance (15-Days)
            </li>
            <li className="yes">
              <CheckIcon /> Excellent UI
            </li>
            <li className="yes">
              <CheckIcon /> Good UX
            </li>
          </ul>
          <div class="planCode">
            <span>STA_179</span>
          </div>
        </div>
        <div class="plan featured" id="planTop__marginMobile">
          <h3 class="planTitle">Professional</h3>
          <div class="planCost">
            <span class="planPrice" id="prof__Text">
              $279
            </span>
          </div>
          <ul class="planFeatures">
            <li className="yes">
              <CheckIcon /> Free Domain
            </li>
            <li className="yes">
              <CheckIcon /> Hosting (6-Months)
            </li>
            <li className="yes">
              <CheckIcon />
              Unlimited Rivisions
            </li>
            <li className="yes">
              <CheckIcon /> Maintainance (1-Month)
            </li>
            <li className="yes">
              <CheckIcon /> Amazing UI
            </li>
            <li className="yes">
              <CheckIcon /> Excellent UX
            </li>
          </ul>
          <div class="planCode">
            <span>PRO_299</span>
          </div>
        </div>
        <div class="plan" id="planTop__marginMobile">
          <h3 class="planTitle">Ultra</h3>
          <div class="planCost">
            <span class="planPrice">$399</span>
          </div>
          <ul class="planFeatures">
            <li className="yes">
              <CheckIcon /> Free Domain (2-Year)
            </li>
            <li className="yes">
              <CheckIcon /> Hosting (1-Year)
            </li>
            <li className="yes">
              <CheckIcon />
              Unlimited Rivisions
            </li>
            <li className="yes">
              <CheckIcon /> Maintainance (50-Days)
            </li>
            <li className="yes">
              <CheckIcon /> Ultra UI
            </li>
            <li className="yes">
              <CheckIcon /> Ultra UX
            </li>
          </ul>
          <div class="planCode">
            <span>ULT_399</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
