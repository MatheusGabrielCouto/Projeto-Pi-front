import React from "react";
import LoadignHome from "../../assets/images/404-error.json";
import Lottie from "lottie-react";

import "./styles.css";

export default function Error() {
  return (
    <div className="error-404">
      <Lottie style={{ width: "60%" }} animationData={LoadignHome} />
    </div>
  );
}
