
const video = document.getElementById('Cam-Video');

navigator.mediaDevices.getUserMedia({video: true})
  .then(stream =>{Video.srcObject = stream;})
  .catch(error => {console.error('Camera Access Error',error);
  });