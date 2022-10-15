function get(){
    var name=document.getElementById("nameGet").value
    var value=""
    fetch("https://wild-plum-bunny-toga.cyclic.app/get/?name="+name, {method : 'GET',})
      .then(function(response) {
        return response.json(); })
        .then(function(json) {
          value=json.msg.props.value
          console.log(value)//regresa json
          document.getElementById("respuesta").innerHTML=value
        }
  )
  }
  function del(){
    var name=document.getElementById("nameGet").value
    var value=""
    fetch("https://wild-plum-bunny-toga.cyclic.app/del/?name="+name, {method : 'GET',})
      .then(function(response) {
        return response.json(); })
        .then(function(json) {
        }
  )
  }
  function set(){
    var name=document.getElementById("nameSet").value
    var value=document.getElementById("valueSet").value
    fetch("https://wild-plum-bunny-toga.cyclic.app/set/?name="+name+"&value="+value, {method : 'GET',})
      .then(function(response) {
        return response.json(); })
        .then(function(json) {
          console.log(json)//regresa json
        }
  )
  }