const render = () => (
  import(`./assets/sass/style.scss`).then(() => {
    require('./AppRenderer');
  })
);

render();