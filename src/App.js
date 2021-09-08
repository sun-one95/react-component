import React, { Component } from "react";
import TOC from "./TOC"
import Content from "./Content"
import Subject from "./Subject"

// 컴포넌트는 하나의 html 구조를 만드는 데 있어서 직관적이고, 복잡한 코드를 보다 편리하게 하는 기능이다.
// 지금은 html 구조를 만드는 데 사용했지만, 더 나아가서 앱이나 웹을 만들 때, 기능을 추가한 컴포넌트를 만들 수 있다.
// 컴포넌트는 페이지를 만드는 데 있어 조각 모음 같은 것이다.
class App extends Component {
  // 사용자가 볼때는 App 컴포넌트에서 state 값이 있는 지 확인할 수 없다.
  // 즉 은닉화가 가능하다.
  // 상위 컴포넌트의 state값이 하위 컴포넌트의 props 값으로 전달 된다.
  constructor(props) {
    super(props)
    this.state = {
      subject:{title: "WEB", sub: "World Wide Web!"},
      contents: [
        {id: 1, title:"HTML", desc:'HTML is for information'},
        {id: 2, title:"CSS", desc:'CSS is for design'},
        {id: 3, title:"JavaScript", desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    return (
      <div className="APP">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content
          title="HTML"
          desc="HTML is HyperText Markup Language"
        ></Content>
      </div>
    );
  }
}

export default App;
