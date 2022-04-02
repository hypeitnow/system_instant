"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;
    document.querySelectorAll('[data-testid="mwthreadlist-item"]').forEach(node => {
      if (node.querySelector('.lrazzd5p')) count += 1;
    });
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
  localStorage.setItem('_cs_desktopNotifsEnabled', JSON.stringify({
    __t: new Date().getTime(),
    __v: true
  }));

  if (typeof Franz.onNotify === 'function') {
    Franz.onNotify(notification => {
      if (typeof notification.title !== 'string') {
        notification.title = ((notification.title.props || {}).content || [])[0] || 'Messenger';
      }

      if (typeof notification.options.body !== 'string') {
        notification.options.body = (((notification.options.body || {}).props || {}).content || [])[0] || '';
      }

      return notification;
    });
  }

  Franz.injectCSS(_path.default.join(__dirname, 'service.css'));
};