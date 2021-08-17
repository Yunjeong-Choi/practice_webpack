import React, { useEffect } from "react";
import FullSentence from "./FullSentence";
import { testLogJS } from "./common/utils";

const App = () => {
  useEffect(() => {
    testLogJS();
  }, []);

  return (
    <>
      <h1>Hello, Webpack!</h1>
      <FullSentence />
      {/* <FullName /> */}
    </>
  );
};

export default App;
