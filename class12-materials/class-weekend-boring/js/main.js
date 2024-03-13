document.querySelector('#check').addEventListener('click', check)

function check() {

  let day = document.querySelector('#day').value.toLowerCase();

  //Conditionals go here

  if (day === "tuesday" || day === "Thursday"){
    alert ('class day!')
  }else if( day === "Saturday" || day === "Sunday"){
    alert('weekend!');
  }else {
    alert ('boorrrrrinnnngggggg!!!!!!!!');
  }


}
console.log ()