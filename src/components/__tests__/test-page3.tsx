import { Component, Prop } from "@stencil/core";
import { RouterHistory } from "../../global/interfaces";


@Component({
  tag: 'test-page-3'
})
export class TestPage3 {

  @Prop() history: RouterHistory;

  render(){
    return (
      <div>PAGE 3
              <button onClick={() => this.history.pop()}>go back</button>

      </div>
    )
  }
  
}