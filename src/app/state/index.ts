import { IConfig, createOvermind } from 'overmind';
import { namespaced } from 'overmind/config';
import {
  createHook,
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook,
} from 'overmind-react';

import * as app from './app';
import * as location from './location';
import MakeStateProvider from './MakeStateProvider';

export const config = namespaced({
  app,
  location,
});

declare module 'overmind' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Config
    extends IConfig<{
      state: typeof config.state;
      actions: typeof config.actions;
      effects: typeof config.effects;
    }> {}
  // Due to circular typing we have to define an
  // explicit typing of state, actions and effects since
  // TS 3.9
}

export const useOvermind = createHook<typeof config>();
export const useStore = createStateHook<typeof config>();
export const useActions = createActionsHook<typeof config>();
export const useEffects = createEffectsHook<typeof config>();
export const useReaction = createReactionHook<typeof config>();

const overmind = createOvermind(config, {
  devtools: false, // defaults to 'localhost:3031'
});

export const StateProvider = MakeStateProvider({ overmind });
