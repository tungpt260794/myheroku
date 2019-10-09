import React, { useEffect } from "react";
import $ from "jquery";
import "foundation-sites";
import "../../scss/app.scss";

export default () => {
  useEffect(() => {
    $(document).foundation();
  }, []);

  return (
    <div>
      <p>Hello Heroku Tung 1169</p>
      <span className="primary badge">1</span>
      <span className="secondary badge">2</span>
      <span className="success badge">3</span>
      <span className="alert badge">A</span>
      <span className="warning badge">B</span>

      <ul className="accordion" data-accordion>
        <li className="accordion-item is-active" data-accordion-item>
          <a href="#" className="accordion-title">
            Accordion 1
          </a>
          <div className="accordion-content" data-tab-content>
            <p>Panel 1. Lorem ipsum dolor</p>
            <a href="#">Nowhere to Go</a>
          </div>
        </li>
        <li className="accordion-item" data-accordion-item>
          <a href="#" className="accordion-title">
            Accordion 2
          </a>
          <div className="accordion-content" data-tab-content>
            <textarea></textarea>
            <button className="button">I do nothing!</button>
          </div>
        </li>
        <li className="accordion-item" data-accordion-item>
          <a href="#" className="accordion-title">
            Accordion 3
          </a>
          <div className="accordion-content" data-tab-content>
            Type your name!
            <input type="text"></input>
          </div>
        </li>
      </ul>

      <ul className="vertical menu" data-accordion-menu>
        <li>
          <a href="#0">Item 1</a>
          <ul className="menu vertical nested is-active">
            <li>
              <a href="#0">Item 1A</a>
              <ul className="menu vertical nested">
                <li>
                  <a href="#0">Item 1Ai</a>
                </li>
                <li>
                  <a href="#0">Item 1Aii</a>
                </li>
                <li>
                  <a href="#0">Item 1Aiii</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#0">Item 1B</a>
            </li>
            <li>
              <a href="#0">Item 1C</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#0">Item 2</a>
          <ul className="menu vertical nested">
            <li>
              <a href="#0">Item 2A</a>
            </li>
            <li>
              <a href="#0">Item 2B</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#0">Item 3</a>
        </li>
      </ul>
    </div>
  );
};
