import { Component, Prop } from "@stencil/core";
import { RouterHistory } from "../../global/interfaces";


@Component({
  tag: 'test-page-1'
})
export class TestPage1 {

  @Prop() history: RouterHistory;

  render(){
    return (
      <div>PAGE 1
          <button onClick={() => this.history.push('page2')}>route to page 2</button>

      </div>
    )
  }
  
}
