 /* Javascript */
function fetchjob () {
  document.getElementById('jobInputForm').addEventListener('submit', savejob);
  var job = JSON.parse(localStorage.getItem('job'));
  var jobList = document.getElementById('jobList');
  jobList.innerHTML = '';
  for (var i = 0; i < job.length; i++) {
    var id = job[i].id;
    var desc = job[i].description;  
    var assignedTo = job[i].assignedTo;
    jobList.innerHTML +=   '<div class="well">'+
       '<svg class="bi bi-bucket" onclick="openForm1()" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" >' +' <path fill-rule="evenodd" d="M8 1.5A4.5 4.5 0 003.5 6h-1a5.5 5.5 0 1111 0h-1A4.5 4.5 0 008 1.5z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M1.61 5.687A.5.5 0 012 5.5h12a.5.5 0 01.488.608l-1.826 8.217a1.5 1.5 0 01-1.464 1.175H4.802a1.5 1.5 0 01-1.464-1.175L1.512 6.108a.5.5 0 01.098-.42zm1.013.813l1.691 7.608a.5.5 0 00.488.392h6.396a.5.5 0 00.488-.392l1.69-7.608H2.624z" clip-rule="evenodd"/>'
        + '</svg>' +
        '<h5 class="glyphicon glyphicon-glyphicon glyphicon-bookmark ">  '+'BookName: ' + 
         desc + '</h5>'+
        '<h5 class="well1">'+'Author: ' + assignedTo + '</h5>'+
        '<a href="#" class="btn btn-warning" onclick="deletejob(\''+id+'\')">Delete</a>'+
        '<p class="well2"> ' + 'added...' + '</p>'
        '</div>';
  }
}
function savejob(e) {
  var jobId = chance.guid();
  var jobDesc = document.getElementById('jobDescInput').value;
  var jobAssignedTo = document.getElementById('jobAssignedToInput').value;
  var jobs = {
    id: jobId,
    description: jobDesc,  
    assignedTo: jobAssignedTo,
  }
  if (localStorage.getItem('job') === null) {
    var job = [];
    job.push(jobs);
    localStorage.setItem('job', JSON.stringify(job));
  } else {
    var job = JSON.parse(localStorage.getItem('job'));
    job.push(jobs);
    localStorage.setItem('job', JSON.stringify(job));
  } 
  document.getElementById('jobInputForm').reset();
  fetchjob();  
  e.preventDefault(); 
}

function deletejob (id) {
  var job = JSON.parse(localStorage.getItem('job')); 
  for(var i = 0; i < job.length; i++) {
    if (job[i].id == id) {
      job.splice(i, 1);
    }
  }
  localStorage.setItem('job', JSON.stringify(job));
  fetchjob();
}

 function openForm() {
    document.getElementById("addPopup").style.display="block";
  }
  function closeForm() {
    document.getElementById("addPopup").style.display= "none";
  }     
  window.onclick = function(event) {
    var modal = document.getElementById('addPopup');
      if (event.target == modal) {
        closeForm();
      }
  }

function openForm1() {
  document.getElementById("cancelPopup").style.display="block";
}
function closeForm1() {
  document.getElementById("cancelPopup").style.display= "none";
}     
window.onclick = function(event) {
  var modal = document.getElementById('cancelPopup');
    if (event.target == modal) {
       closeForm1();
    }
}


      