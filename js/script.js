// same as document.ready()
$(function(){
attachEventListeners();
})

const clear = () => {
  $('#hero').empty();
  $('.student-name').empty();
  $('#copy').empty();
}
const content = () => {
  alert(`${student.name}`);
  clear()
  $('#hero').append(`${student.hero} `)
  $('.student-name').append(`<h3> ${student.name} </h3>`)
  $('#copy').append(`${student.bio}`)
}

function attachEventListeners() {
  $('#profiles div').click(function(){
  const x = () => this;
  $("#profiles>div.active").removeClass("active");
  $(this).addClass("active");
  student = students.find(s => s.id === parseInt(x().id));
  content();
})
};
