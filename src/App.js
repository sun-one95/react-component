import React, { Component } from "react";
import TOC from "./TOC"
import Content from "./Content"
import Subject from "./Subject"

// 컴포넌트는 하나의 html 구조를 만드는 데 있어서 직관적이고, 복잡한 코드를 보다 편리하게 하는 기능이다.
// 지금은 html 구조를 만드는 데 사용했지만, 더 나아가서 앱이나 웹을 만들 때, 기능을 추가한 컴포넌트를 만들 수 있다.
// 컴포넌트는 페이지를 만드는 데 있어 조각 모음 같은 것이다.
class App extends Component {
  render() {
    return (
      <div className="APP">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content
          title="HTML"
          desc="HTML is HyperText Markup Language"
        ></Content>
      </div>
    );
  }
}

export default App;
