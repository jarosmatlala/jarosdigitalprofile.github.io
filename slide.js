function myFunction() {
  var x = document.getElementById('1');

  if (x.style.display==="block")
  {
      x.style.display="none";
  }
  else
  {
    x.style.display="block";
  }
}

function History() {
  var y = document.getElementById('2');

  if (y.style.display==="block")
  {
      y.style.display="none";
  }
  else
  {
    y.style.display="block";
  }
}

<script type="text/javascript">
  var counter =1;
  setInterval(function(){
    document.getElementById('radio'+ counter).checked = true;
    counter++;
    if(counter > 4){
      counter = 1;
    }
  }, 5000);
  </script>
