import { controller } from './controller/index.js';

const init = () => {
  controller.changeTemplates(window.location.hash);
  window.addEventListener('hashChange', () => controller.changeTemplates(window.location.hash));
}
window.addEventListener('load', init);
