const socket = io()

socket.emit('message', 'Hi from front')

socket.on('messageServer', data => {
  console.log(data);
})

socket.on('messageOther', data => {
  console.log(data);
})

socket.on('messageAll', data => {
  console.log(data);
})