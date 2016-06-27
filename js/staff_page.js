function staff(firstName, lastName, position, description) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.description = description;
}

window.onload = function staffDivs {
    var staffArray[]
    var heather = new staff('Heather', 'Gowing', 'Teacher', 'Bachelor of  Teaching Early Childhood 1st Aid Qualified');
        staffArray.push(heather)
        
    var i = 0
    var j = 1
    while (staffArray[i] !== undefined){
       var div = document.createElement('div')
       div.innerHTML = <img src="staff/1.jpg" width="144" height="200" />
         <span class="bold">Heather Gowing </span>Teacher/Director<br />
          Bachelor of  Teaching Early Childhood<br />
          1st Aid Qualified
       document.getElementById('textContainer').appendChild(div)
       
    }
}

  <div id="apDiv14"><img src="staff/1.jpg" width="144" height="200" />
         <span class="bold">Heather Gowing </span>Teacher/Director<br />
          Bachelor of  Teaching Early Childhood<br />
          1st Aid Qualified
            </div>