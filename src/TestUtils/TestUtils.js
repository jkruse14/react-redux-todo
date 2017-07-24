import { shallow } from 'enzyme';

export function shallowWithStore(component, store) {
  const context = {
    store,
  };
  return shallow(component, { context });
};
