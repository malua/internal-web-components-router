import { Component, Prop, State } from '@stencil/core';
import { RouterHistory, LocationSegments } from '../../global/interfaces';
import ActiveRouter from '../../global/active-router';

@Component({
  tag: 'app-router'
})
export class AppRouter {

  @Prop() root: string = '';
  @State() location: LocationSegments;
  @State() history: RouterHistory;

  componentWillLoad(){

    this.history = this.createInternalHistory();
    this.getLocation(this.history.location);
  }

  getLocation(location: LocationSegments): LocationSegments {
    // Remove the root URL if found at beginning of string
    const pathname = location.pathname.indexOf(this.root) == 0 ?
                     '/' + location.pathname.slice(this.root.length) :
                     location.pathname;

    return {
      ...location,
      pathname
    };
  }

  render() {
    const state = {
      location: this.location,
      root: this.root,
      history: this.history
    };

    return (
      <ActiveRouter.Provider state={state}>
        <slot />
      </ActiveRouter.Provider>
    );


  }


  createInternalHistory(): RouterHistory {

    const push = (location: string) => {
      const history = [...this.history.history];
      history.push({pathname: location});
    
      this.history = Object.assign({}, this.history, {
        location: {
          pathname: location,
          index: this.history.length + 1
        },
        history: history,
        length: this.history.length + 1
      });
    }

    const pop = () => {
      const history = [...this.history.history];
      history.pop();
      const location = history[ history.length-1 ];

      this.history = Object.assign({}, this.history, {
        location : location,
        history: history
      });
    };

    const history = {
      length: 1,
      location: {
        pathname: this.root,
        index: 0
      },
      history: [{pathname: this.root}],
      push,
      pop
    };
  
    return history;
  };
}