import * as types from './types';

export function filter(data) {
    return {
        type: types.FILTER,
        data
    };
}
