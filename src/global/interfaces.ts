
export interface ActiveRouter {
  subscribe: (location: LocationSegments, nextListeners: RouteSubscription[], routeSubscription: RouteSubscription) => Listener
  dispatch: (location: LocationSegments, nextListeners: RouteSubscription[]) => void;
}

export interface LocationSegments {
  pathname?: string;
  index?: number;
}

export interface RouterHistory {
  length: number;
  // action: string;
  location: LocationSegments;
  history: LocationSegments[];
  push: (path: string | LocationSegments, state?: any) => void;
  pop: () => void;
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