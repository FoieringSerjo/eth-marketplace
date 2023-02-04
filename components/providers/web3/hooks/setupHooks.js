import { handler as createUseAccount } from './useAccount';

/**
 *
 * @param  {...deps} deps web, provider
 * @returns web3, provider
 */
export const setupHooks = (...deps) => {
  return {
    useAccount: createUseAccount(...deps),
  };
};
