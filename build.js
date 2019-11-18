const rollup = require('rollup');

rollup
  .rollup({
    onwarn: e => {
      throw e;
    },
    input: './entry.js'
  })
  .then(bundle => {
    return bundle.generate({ format: 'cjs' });
  })
  .then(({ output }) => {
    console.log(output[0].code);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1)
  });
