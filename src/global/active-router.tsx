
import { createProviderConsumer } from '@stencil/state-tunnel';
import { RouterHistory, LocationSegments } from './interfaces';

export interface ActiveRouterState {
  location: LocationSegments;
  root: string;
  history: RouterHistory;
}

export default createProviderConsumer<ActiveRouterState>({
  location: null,
  root: '/',
  history: null
});