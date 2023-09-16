import React from "react";
import "@/app/css/loading.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
      <h4>Loading.....</h4>
    </div>
  );
}