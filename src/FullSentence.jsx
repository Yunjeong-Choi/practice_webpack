// import css from "./style.css";
// import _ from "lodash"; // node_modules에서 lodash를 찾아와 "_"라는 이름으로 사용하겠다. 다른 이름으로 설정해도 됨.
// //요즘의 브라우저는 모듈의 기능을 가지고 있다. 폴더의 역할
// //모듈(import, export)은 비교적 최신 기능이기 때문에 오래된 웹브라우저에서는 동작하지 않음

import React from "react";
//TODO: 이건 없어도 실행되나? > 안됨

const FullSentence = () => {
  return (
    <h1>This is English</h1>
    // <h3>Yunjeong Choi</h3>
    //TODO: 없는 단어라서 나오지 않는군.. 이럴땐 how?
    //spell checker를 끄면 되나?
  );
};

export default FullSentence;
