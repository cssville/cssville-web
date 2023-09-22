import * as ReactDOM from 'react-dom/client';
import React from 'react';
import hljs from 'highlight.js';
import "./site.css";
import "cssville/cssville.css";
import { Footer } from './components/Footer';
import { CssPrefixesSection } from './components/CssPrefixesSection';
import { CssClassesSection } from './components/CssClassesSection';
import { Header } from './components/Header';
import { LandingMain } from './components/LandingMain';
import { AboutSection } from './components/AboutSection';
import { DemoSection } from './components/DemoSection';

function docReady(fn: () => void) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <>
      <div className="w-12 position-relative">
        <div className="position-absolute h-100 w-12 grad">
        </div>
        <div className="position-relative mx-auto max-w-xl px-5 lg-px-3 md-px-2">
          <Header />
          <LandingMain />
        </div>
      </div>
      <div className="position-relative mx-auto max-w-xl py-4 px-5 lg-px-3 md-px-2">
        <AboutSection />
        <DemoSection />
        <CssPrefixesSection />
        <CssClassesSection />
      </div>
      <Footer />
    </>);
  hljs.highlightAll();
});