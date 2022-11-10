import Swal from 'sweetalert2';

export const Notification = Swal.mixin({
  toast: true,
  position: 'center',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: false,
});