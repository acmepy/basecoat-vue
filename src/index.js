import './css/style.css';
import 'basecoat-css/all';

function toPascalCase(fileName) {
  return fileName.replace(/(^\w|-\w)/g, (c) => c.replace('-', '').toUpperCase());
}

function registerComponents(app) {
  const modules = import.meta.glob('./components/*.vue', { eager: true });

  for (const path in modules) {
    const component = modules[path].default;
    const name = toPascalCase(path.split('/').pop().replace('.vue', ''));
    const componentName = component.name || name;
    app.component(componentName, component);
  }
}

export default {
  install(app) {
    console.log('basecoat-vue', 'registrando componentes');
    registerComponents(app);
  },
};
