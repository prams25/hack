import React, { Component } from "react";
import { Document, Page } from "react-pdf";

import SinglePagePDFViewer from "./pdf/single_page";
import AllPagesPDFViewer from "./pdf/all_pages";
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "./Untitled.pdf";

import "./App.css";

export default function App() {
  return (
    <embed
    src={samplePDF}
    type="application/pdf"
    frameBorder="0"
    scrolling="auto"
    height="100%"
    width="100%"
    />
  );
}