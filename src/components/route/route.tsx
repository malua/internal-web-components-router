import { Component, Prop, State, Element, Watch } from '@stencil/core';
import ActiveRouter from '../../global/active-router';
import { RouterHistory } from '../../global/interfaces';


@Component({
  tag: 'app-route'
})
export class AppRoute {

  @Prop() componentUpdated: (callback: () => void) => void = null;

  @Prop() url: string | string[];
  @Prop() component: string;
  @Prop() componentProps: { [key: string]: any } = {};

  @State() match: boolean = false;
  @Prop() history: RouterHistory;
  
  @Element() el: any;

  componentDidRerender: Function | undefined;

  async componentDidUpdate() {
    if (typeof this.componentUpdated === 'function') {

      // Wait for all children to complete rendering before calling componentUpdated
      await Promise.all(
        Array.from(this.el.children).map((element:HTMLStencilElement) => {
          if (element.componentOnReady) {
            return element.componentOnReady();
          }
          return Promise.resolve(element);
        })
      );
    }
  }

  @Watch('history')
  watchHistory(){
    if(this.history && this.history.location && this.history.location.pathname){

      //TODO more sophisticated matching
      if(this.url === this.history.location.pathname){
        this.match = true;
      }else{
        this.match = false;
      }
    }
  }

  render(){

    if(!this.match){
      return null;
    }

    // component props defined in route
    // the history api
    // current match data including params
    const childProps = {
      ...this.componentProps,
      history: this.history,
      match: this.match
    };

    if(this.component){
      const ChildComponent = this.component;

      return (
        <ChildComponent {...childProps} />
      );
    }
  }
}

ActiveRouter.injectProps(AppRoute, [
  'history'
]);