import { Component, Prop } from "@stencil/core";
import { RouterHistory } from "../../global/interfaces";

@Component({
  tag: 'test-page-2'
})
export class TestPage2 {
  @Prop() history: RouterHistory;

  render(){
    return (
      <div>PAGE 2
                  <button onClick={() => this.history.push('page3')}>route to page3</button>

      </div>
    )
  }
  
}
