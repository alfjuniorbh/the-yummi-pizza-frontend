import { notify } from 'react-notify-toast';

function showToast({ type, message, timer }) {
  function setToast(type) {
    switch (type) {
      case 'success':
        return { background: 'rgb(51, 187, 102)', text: '#FFFFFF' };
      case 'warn':
        return { background: 'rgb(254, 255, 20)', text: '#FFFFFF' };
      case 'error':
        return { background: 'rgb(255, 102, 102)', text: '#FFFFFF' };
      default:
        return { background: 'rgb(51, 102, 255)', text: '#FFFFFF' };
    }
  }
  return notify.show(message, 'custom', timer, setToast(type));
}

export default showToast;
