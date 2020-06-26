import PropTypes from 'prop-types';
import React from 'react';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <style>{`
        .font-header {
          opacity: 0;
        }

        .wf-active .font-header {
          opacity: 1;
        }
      `}</style>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        <dom-module id="custom-combo-box" theme-for="vaadin-combo-box">
          <template>
            <style>{`
          :host {
            width: 250px;
          }
        `}</style>
          </template>
        </dom-module>

        <dom-module id="custom-text-field" theme-for="vaadin-text-field">
          <template>
            <style>{`
          :host([theme~="white-background"]) [part="input-field"] {
            background-color: white;
          }
        `}</style>
          </template>
        </dom-module>

        <dom-module id="custom-button" theme-for="vaadin-button">
          <template>
            <style>{`
          :host {
            height: 3em;
            border-radius: 0.7rem;
            padding: 1px 0 2px 0;
            background-color: #c53030;
            color: #fff;
            font-weight: bold;
          }

          [part="label"] {
            padding: 0 50px;
          }
        `}</style>
          </template>
        </dom-module>

        <dom-module
          id="custom-radio-button-icon-color"
          theme-for="vaadin-radio-button">
          <template>
            <style>{`
          :host([theme~="custom"][checked]) [part="radio"] {
            background-color: #c53030;
          }
        `}</style>
          </template>
        </dom-module>

        <dom-module
          id="my-text-field-styles"
          theme-for="vaadin-text-field vaadin-text-area">
          <template>
            <style>{`
            :host(.custom-style) [part="input-field"] {
              border: 1px solid #ccc;
              background-color: #fff;
            }
              input:-webkit-autofill,
              input:-webkit-autofill:hover, 
              input:-webkit-autofill:focus, 
              input:-webkit-autofill:active  {
              -webkit-box-shadow: 0 0 0 30px white inset !important;
              box-shadow: 0 0 0 30px white inset !important;
              -webkit-text-fill-color: #263445;         
            }

            :host([focused].custom-style) [part="input-field"] {
              border-color: #aaa;
              
            }

            :host([invalid].custom-style) [part="input-field"] {
              border-color: #c53030;
            }

            [part="label"]::after {
              display: none;
            }

            [part="error-message"]{
              color: #c53030;
              font-size: 0.8125rem;
              margin: 0;
            }
        `}</style>
          </template>
        </dom-module>

        <dom-module id="checkbox-button-icon-color" theme-for="vaadin-checkbox">
          <template>
            <style>{`
          :host([checked]) [part="checkbox"]::after {
            width: 13px;
            height: 24px;
          }
          [part="checkbox"] {
            width: calc(18px + 2px);
            height: calc(18px + 2px);
          }
          [part="checkbox"]::after
          {
            top: 15px;
            left: 8px;
          }
          :host([theme~="custom"][checked]) [part="checkbox"] {
            background-color: #c53030;
          }
        `}</style>
          </template>
        </dom-module>
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="text" name="cname" />
          <input type="text" name="position" />
          <input type="text" name="email" />
          <input type="text" name="number" />
          <input type="text" name="message" />
        </form>

        <script
          src="https://checkoutlib.billsby.com/checkout.min.js"
          data-billsby-company="charityshopexchange"
          crossOrigin="anonymous"
        />

        <script>{`
      !function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
      arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
      d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
      insertBefore(d,q)}(window,document,'script','_gs');
    
      _gs('GSN-976982-Z');
      _gs('set', 'anonymizeIP', true);
      `}</script>

        <noscript>You need to enable JavaScript to view this site.</noscript>
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
