// Pseudo-Code
/*
Have logic that allows you to create objects that represent people you've met
  - These would be your documents on the DB side
Then in each document/object you would have:
  - Name Information
  - Where you met them
  - What your spark was
  - Actionable Items for follow-up
  - A checkbox for if you followed up with them or not
Maybe later you could add a way to tag them or sort them
- How does the CSS work in these applications?



*/


var favorite = document.getElementsByClassName("fa-star");
var trash = document.getElementsByClassName("fa-trash");

Array.from(favorite).forEach(function(element) {
      element.addEventListener('click', function(){
        const favorite = this.closest('li').querySelector('.fa-star').classList.contains('fa-regular')
        const id = this.closest('li').querySelector('.id').innerText
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'favorite':favorite,
            'id': id
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.closest('li').querySelector('.id').innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'id': id,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
