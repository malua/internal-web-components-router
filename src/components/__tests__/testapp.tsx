import { Component } from "@stencil/core";


@Component({
  tag: 'test-app'
})
export class TestApp {

  render(){
    return (
      <app-router root="page1">
        <app-route url='page1' component="test-page-1"></app-route>
        <app-route url='page2' component="test-page-2"></app-route>
        <app-route url='page3' component="test-page-3"></app-route>
      </app-router>
    )
  }
  
}