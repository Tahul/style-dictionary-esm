// Allow to be overridden by setter, set default to memfs for browser env, node:fs for node env
export let fs = undefined;

// since ES modules exports are read-only, use a setter
export const setFs = (_fs) => {
  fs = _fs;
};
