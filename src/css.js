import { hash } from './core/hash';
import { compile } from './core/compile';
import { getSheet } from './core/get-sheet';

/**
 * css entry
 * @param {String|Object|Function} val
 */
function css(val) {
    let ctx = this || {};
    let _val = val.call ? val(ctx.p) : val;

    return hash(
        _val.unshift
            ? _val.raw
                ? // Tagged templates
                  compile(_val, [].slice.call(arguments, 1), ctx.p)
                : // Regular arrays
                  _val.reduce((o, i) => (i ? Object.assign(o, i.call ? i(ctx.p) : i) : o), {})
            : _val,
        getSheet(ctx.target),
        ctx.g,
        ctx.o,
        ctx.k
    );
}

/**
 * `keyframes` function for defining animations
 * @type {Function}
 */
let keyframes = css.bind({ k: 1 });

export { css, keyframes };
