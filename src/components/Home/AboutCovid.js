import React, { useEffect } from "react";
import $ from "jquery";
import "./css/AboutCovid.css";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const AboutCovid = () => {
  loadScript("https://t.cdc.gov/1M1B");

  useEffect(() => {
    const covidVirus = $(".covid-virus")[0];
    const banner = $("#banner")[0];
    const rect = banner.getBoundingClientRect();

    const moveVirus = function (e) {
      const transform = `transform: scale(1.4) translate(${
        ((e.x - rect.width) / rect.width) * 30
      }px, ${((e.y - rect.height) / rect.height) * -10}px)`;
      covidVirus.setAttribute("style", transform);
    };

    banner.addEventListener("mousemove", moveVirus);
    banner.addEventListener("mouseleave", function (e) {
      covidVirus.removeAttribute("style");
    });
  }, []);

  return (
    <section class="AboutCovid">
      <div class="stats-container">
        <div class="stats-card">
          <div class="stats-card__banner" id="banner">
            <svg class="covid-virus" id="covidVirus" viewBox="0 0 152 141">
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M134.188 8.957a6.807 6.807 0 11-13.613 0 6.807 6.807 0 0113.613 0zM150.5 79.531c0 9.963-8.077 18.04-18.041 18.04s-18.042-8.077-18.042-18.04c0-9.965 8.078-18.042 18.042-18.042 9.964 0 18.041 8.077 18.041 18.042zM58.873 131.6a7.874 7.874 0 11-15.748 0 7.874 7.874 0 0115.748 0zm-23.145-20.548c0 8.67-7.028 15.699-15.698 15.699-8.67 0-15.699-7.029-15.699-15.699S11.36 95.355 20.03 95.355s15.698 7.028 15.698 15.698zM21.252 17.415a9.626 9.626 0 01-9.626 9.626A9.626 9.626 0 012 17.415a9.626 9.626 0 019.626-9.626 9.626 9.626 0 019.626 9.626z"
                  stroke="#E6DCF0"
                  stroke-width="2.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="covid-virus__body"
                  d="M137.548 59.535a10.205 10.205 0 00-4.473-6.366c-1.735-1.097-3.657-1.515-5.274-1.145-2.046.466-3.225 1.77-4.265 2.921-1.025 1.134-1.868 2.068-3.474 2.316-2.965-9.991-9.28-18.662-17.91-24.593.58-1.997 1.73-2.66 3.037-3.414.983-.567 2-1.153 2.64-2.296.76-1.354.846-3.041.243-4.752-.925-2.624-3.26-4.853-6.407-6.117-3.244-1.302-6.702-1.492-9.024-.494-1.302.56-2.237 1.477-2.702 2.652-.704 1.778-.457 3.611-.218 5.384.147 1.095.288 2.148.184 3.09a45.54 45.54 0 00-13.546-2.046c-4.429 0-8.802.633-13.007 1.883-2.196-1.453-1.981-2.681-1.692-4.338.195-1.121.417-2.392-.213-3.652-1.607-3.213-6.552-5.023-12.046-2.49-2.642 1.216-4.627 3.2-5.448 5.44-.578 1.58-.539 3.217.111 4.61.847 1.815 2.342 2.839 3.662 3.743 1.523 1.043 2.415 1.714 2.591 2.971A45.92 45.92 0 0036.634 47.89a4.03 4.03 0 00-.192-.06c-1.786-.508-4.004-.2-5.935.826-1.6.85-3.733 2.569-4.806 5.929-.82 2.568-.59 5.186.632 7.183.964 1.575 2.485 2.639 4.172 2.918.184.03.37.054.56.071a48.566 48.566 0 00-.288 5.502c0 6.757 1.436 13.24 4.272 19.292-1.265.61-2.644.586-4.086.561-1.482-.025-3.014-.05-4.357.692-1.549.857-2.744 2.603-3.196 4.67-.588 2.687.075 5.507 1.867 7.942 1.898 2.579 4.747 4.43 7.435 4.832 1.621.243 3.06-.062 4.16-.88 1.76-1.308 2.54-3.282 3.23-5.023.506-1.283.895-2.21 1.415-2.694 8.694 10.304 21.331 16.19 34.842 16.19 1.545 0 3.095-.078 4.63-.232l-.059.442c-.16 1.202-.31 2.338-.016 3.488.338 1.326 1.307 2.428 2.799 3.187 1.344.684 2.969 1.025 4.69 1.025 1.736 0 3.57-.347 5.311-1.042 2.57-1.026 4.598-2.91 5.562-5.17.723-1.695.786-3.458.177-4.963-.374-.924-.944-1.652-1.585-2.257a46.052 46.052 0 0016.812-15.494 45.056 45.056 0 007.261-24.364c2.545-1.19 4.593-.765 6.578-.352 1.132.235 2.2.457 3.286.359 1.646-.15 3.233-1.115 4.354-2.651 1.575-2.158 2.081-5.176 1.39-8.28"
                />
                <path
                  d="M79.893 53.305c-1.272-2.553-1.26-5.283.292-7.092 2.31-2.693 7.16-2.321 10.832.83 3.672 3.15 4.776 7.888 2.465 10.58-1.492 1.739-4.04 2.2-6.649 1.461m-19.712 15.54a7.71 7.71 0 11-6.55 3.642m35.49-4.385c3.604 1.828 7.22.807 9.112 2.839 2.226 2.39 2.33 5.78-.724 9.165-3.053 3.386-7.316 4.14-9.92 2.169-3.14-2.377-2.05-6.115-2.05-6.115M89.481 30.23c3.738-3.232.29-7.89 1.714-11.486 1.1-2.782 5.77-3.087 9.967-1.402 5.007 2.01 6.932 6.386 5.49 8.956-1.362 2.43-5.723 1.713-6.19 8.332M42.665 64.735c-4.62-4.134-7.976-.727-11.94-1.382-2.953-.488-5.114-4.05-3.739-8.359 1.64-5.14 6.406-6.629 9.085-5.866 2.68.762 2.805 5.302 8.821 3.417m46.14 52.01c.234 4.828 5.719 4.941 7.169 8.526 1.122 2.774-.788 6.697-4.988 8.373-5.012 2-10.263.604-10.993-2.25-.69-2.7 1.881-6.16-1.688-11.227"
                  stroke="#E6DCF0"
                  stroke-width="2.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <div class="stats-card__banner-content">
              <h1 class="covid-h1">About Covid-19</h1>
              <p class="stats-message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                et quas quo quod vel a, quos reprehenderit iusto dolores at
                omnis voluptatum blanditiis? Deserunt numquam, soluta eum velit
                sapiente delectus. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Molestias ipsam aliquam quibusdam
                exercitationem. Non, est?
              </p>

              <a
                class="covid-resource"
                href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
                target="_blank"
              >
                Learn more <i data-feather="external-link"></i>
              </a>
            </div>
          </div>
          <div class="stats-card__footer">
            <div class="stats-card__footer-content">
              <i class="covid-info-icon" data-feather="info"></i>
              <div class="stats-card__footer-info">
                <h3 class="covid-h3">Think you might have symptoms?</h3>
                <p>
                  Those who are infected with COVID-19 may have little to no
                  symptoms. You may not know you have symptoms of COVID-19
                  because they are similar to a cold or flu.
                </p>
              </div>
            </div>

            <div
              data-cdc-widget="healthBot"
              data-cdc-theme="theme1"
              class="cdc-widget-color-blue"
              data-cdc-language="en-us"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCovid;
