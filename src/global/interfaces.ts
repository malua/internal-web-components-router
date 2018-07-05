
export interface ActiveRouter {
  subscribe: (location: LocationSegments, nextListeners: RouteSubscription[], routeSubscription: RouteSubscription) => Listener
  dispatch: (location: LocationSegments, nextListeners: RouteSubscription[]) => void;
}

export interface LocationSegments {
  pathname?: string;
  index?: number;
  // state?: any;
  // key?: string;
  // query?: { [key: string]: any };
}

export interface RouterHistory {
  length: number;
  // action: string;
  location: LocationSegments;
  history: LocationSegments[];
  push: (path: string | LocationSegments, state?: any) => void;
  pop: () => void;
  // replace: (path: string | LocationSegments, state?: any) => void;
  // go: (n: number) => void;
  // goBack: () => void;
  // goForward: () => void;
  // block: (prompt?: string) => () => void;
  // listen: (listener: Function) => () => void;
}

export type Listener = () => void;

export interface RouteSubscription {
  isMatch: boolean;
  groupId?: string;
  groupIndex?: number;
}

export interface MatchResults {
  path: string;
  url: string;
  isExact: boolean;
  params: {
    [key: string]: string
  };
}