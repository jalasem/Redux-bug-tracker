/**
 * store = [
 * {
 *    id: 'akpo',
 *    description: "...",
 *    resolved: false
 * }
 * ]
 */

export const addBug = (description, id) => ({
  type: "ADD_BUG",
  payload: {
    id,
    description,
  },
});

export const resolveBug = (id) => ({
  type: "RESOLVE_BUG",
  payload: {
    id,
  },
});

export const unresolveBug = (id) => ({
  type: "UNRESOLVE_BUG",
  payload: {
    id,
  },
});

export const removeBug = (id) => ({
  type: "REMOVE_BUG",
  payload: {
    id,
  },
});
