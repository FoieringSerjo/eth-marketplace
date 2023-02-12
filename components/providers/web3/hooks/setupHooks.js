import { handler as createAccountHook } from './useAccount';
import { handler as createNetworkHook } from './useNetwork';

/**
 *
 * @param  {...deps} deps web, provider
 * @returns web3, provider
 */
export const setupHooks = (...deps) => {
  console.log('Setting up hooks!!!');
  return {
    useAccount: createAccountHook(...deps),
    useNetwork: createNetworkHook(...deps),
  };
};
