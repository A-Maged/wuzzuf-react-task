import React from 'react';
import { Provider } from 'overmind-react';

export default function MakeStateProvider({ overmind }: any) {
  return function StateProvider({ children }: { children: any }) {
    return <Provider value={overmind}>{children}</Provider>;
  };
}
