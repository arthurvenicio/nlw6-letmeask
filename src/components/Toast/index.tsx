import toast, { Toaster } from 'react-hot-toast';

function Toast(error: boolean, msg: string) {
  if (error) {
    return toast.error(msg, {
      duration: 3000,
      position: 'bottom-right',
      icon: '❌',
      style: {
        background: '#835afd',
        border: '1px solid #835afd',
        color: '#fff',
      },
    });
  } else {
    return toast.success(msg, {
      duration: 3000,
      position: 'bottom-right',
      style: {
        background: '#835afd',
        border: '1px solid #835afd',
        color: '#fff',
      },
    });
  }
}

export { Toast, Toaster };
