// Initial menu load and remove IG GALLERY AD
$(document).ready(function(){
    const category = "Entree/Antipasto"

    $.getJSON("menu.json", function(data) {
    const arr = data[category]

    $("#menu-card-items").empty()
    $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
    arr.forEach(item => {
        $("#menu-card-items").append(`<h4 id="menu-item-title">${item.name}<span>$${item.price}<span></h4>`)
        $("#menu-card-items").append(`<p id="menu-item-desc">${item.description}</p>`)
    })
  })

  // remove IG GALLERY AD
  setTimeout(()=> {
    $(".eapps-link").remove();
  }, 1000)
})


// ONCLICK MENU CHANGE

$("#entree").click(function(){
    $(document).ready(function(){
        const category = "Entree/Antipasto"

        $.getJSON("menu.json", function(data) {
        const arr = data[category]

        $("#menu-card-items").empty()
        $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
        arr.forEach(item => {
            $("#menu-card-items").append(`<h4 id="menu-item-title">${item.name}<span>$${item.price}<span></h4>`)
            $("#menu-card-items").append(`<p id="menu-item-desc">${item.description}</p>`)
        })
      })
    })
})


$("#salumi").click(function(){
    $(document).ready(function(){
        const category = "Salumi & Formaggi"

        $.getJSON("menu.json", function(data) {
          const arr = data[category]

          $("#menu-card-items").empty()
          $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
          arr.forEach(item => {
              $("#menu-card-items").append(`<h4 id="menu-item-title">${item.name}<span>$${item.price}<span></h4>`)
              $("#menu-card-items").append(`<h5 id="menu-item-desc">${item.description}</h5>`)
          })
        })
      })
})

$("#gnocchi").click(function(){
  $(document).ready(function(){
      const category = "Gnocchi & Risotto"

      $.getJSON("menu.json", function(data) {
        const arr = data[category]

        $("#menu-card-items").empty()
        $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
        arr.forEach(item => {
            $("#menu-card-items").append(`<h4 id="menu-item-title">${item.name}<span>$${item.price}<span></h4>`)
            $("#menu-card-items").append(`<h5 id="menu-item-desc">${item.description}</h5>`)
        })
      })
    })
})

$("#main").click(function(){
  $(document).ready(function(){
      const category = "Mains"

      $.getJSON("menu.json", function(data) {
        const arr = data[category]

        $("#menu-card-items").empty()
        $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
        arr.forEach(item => {
            $("#menu-card-items").append(`<h4 id="menu-item-title">${item.name}<span>$${item.price}<span></h4>`)
            $("#menu-card-items").append(`<h5 id="menu-item-desc">${item.description}</h5>`)
        })
      })
    })
})


$("#salad").click(function(){
  $(document).ready(function(){
      const category = "Salad"

      $.getJSON("menu.json", function(data) {
        const arr = data[category]

        $("#menu-card-items").empty()
        $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
        arr.forEach(item => {
            $("#menu-card-items").append(`<h4 id="menu-item-title">${item.name}<span>$${item.price}<span></h4>`)
            $("#menu-card-items").append(`<h5 id="menu-item-desc">${item.description}</h5>`)
        })
      })
    })
})

$("#pasta").click(function(){
  $(document).ready(function(){
      const category = "Pastas"

      $.getJSON("menu.json", function(data) {
        const arr = data[category]

        $("#menu-card-items").empty()
        $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
        arr.forEach(item => {
            $("#menu-card-items").append(`<h4 id="menu-item-title">${item.name}<span>$${item.price}<span></h4>`)
            $("#menu-card-items").append(`<h5 id="menu-item-desc">${item.description}</h5>`)
        })
      })
    })
})


$("#sides").click(function(){
  $(document).ready(function(){
      const category = "Sides"

      $.getJSON("menu.json", function(data) {
        const arr = data[category]

        $("#menu-card-items").empty()
        $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
        arr.forEach(item => {
            $("#menu-card-items").append(`<h4 id="menu-item-title">${item.name}<span>$${item.price}<span></h4>`)
            $("#menu-card-items").append(`<h5 id="menu-item-desc">${item.description}</h5>`)
        })
      })
    })
})

$("#kids").click(function(){
  $(document).ready(function(){
      const category = "Kids Menu"

      $.getJSON("menu.json", function(data) {
        const arr = data[category]

        $("#menu-card-items").empty()
        $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
        arr.forEach(item => {
            $("#menu-card-items").append(`<h4 id="menu-item-title">${item.name}<span>$${item.price}<span></h4>`)
            $("#menu-card-items").append(`<h5 id="menu-item-desc">${item.description}</h5>`)
        })
      })
    })
})


$("#desserts").click(function(){
  $(document).ready(function(){
      const category = "Desserts"

      $.getJSON("menu.json", function(data) {
        const arr = data[category]

        $("#menu-card-items").empty()
        $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
        arr.forEach(item => {
            $("#menu-card-items").append(`<h4 id="menu-item-title">${item.name}<span>$${item.price}<span></h4>`)
            $("#menu-card-items").append(`<h5 id="menu-item-desc">${item.description}</h5>`)
        })
      })
    })
})
