import Swal from 'sweetalert2'
export default class {
  static succNotifications(mess){

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 6000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


Toast.fire({
  icon: 'success',
  title: mess
})

}





static errorNotifications(mess){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 6000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  
  Toast.fire({
    icon: 'error',
    title: mess
  })
  
  }






  static successAlert(title,mess){

       new Swal({
      title: title,
      text: mess,
      icon: 'success',
      showCancelButton: false,
     // confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {
      if (result.isConfirmed) {
      window.location = "login";
      }
    })
  
  
  
  }





 

}
        





