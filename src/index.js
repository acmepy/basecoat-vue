function registerComponents(app) {
  const modules = import.meta.glob('./components/*.vue', { eager: true });

  for (const path in modules) {
    //console.log('basecoat-vue', 'registerComponents', path);
    const component = modules[path].default;
    const name = component.name || path.split('/').pop().replace('.vue', '');
    app.component(name, component);
  }
}

export default {
  install(app) {
    console.log('basecoat-vue', 'registrando componentes');
    registerComponents(app);
  },
};
