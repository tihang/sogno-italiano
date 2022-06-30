
var menu;

http://18.138.249.129/api/menu-items

$(document).ready(function(){
  const category = "Entree/Antipasto"

  $.get("http://18.138.249.129/api/menu-items", function(data) {
  menu = data.data;
  console.log(menu)

  $("#menu-card-items").empty()
  $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)

  const arr = menu.filter(item => item.attributes.category == category)
  arr.forEach(item => {
      $("#menu-card-items").append(`<h4 id="menu-item-title">${item.attributes.name}<span>${item.attributes.price}<span></h4>`)
      $("#menu-card-items").append(`<p id="menu-item-desc">${item.attributes.description}</p>`)
  })
})
})

// $(document).ready(function(){
//     const category = "Entree/Antipasto"

//     $.getJSON("menu.json", function(data) {
//     const arr = data[category]

//     $("#menu-card-items").empty()
//     $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
//     arr.forEach(item => {
//         $("#menu-card-items").append(`<h4 id="menu-item-title">${item.name}<span>${item.price}<span></h4>`)
//         $("#menu-card-items").append(`<p id="menu-item-desc">${item.description}</p>`)
//     })
//   })
// })


// ONCLICK MENU CHANGE

$("#entree").click(function(){
    $(document).ready(function(){
        const category = "Entree/Antipasto"

        const arr = menu.filter(item => item.attributes.category == category)
        
        $("#menu-card-items").empty()
        $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
        arr.forEach(item => {
            $("#menu-card-items").append(`<h4 id="menu-item-title">${item.attributes.name}<span>${item.attributes.price}<span></h4>`)
            $("#menu-card-items").append(`<p id="menu-item-desc">${item.attributes.description}</p>`)
        })
    })
})


$("#salumi").click(function(){
    $(document).ready(function(){
        const category = "Salumi & Formaggi"

        const arr = menu.filter(item => item.attributes.category == category)
        
        $("#menu-card-items").empty()
        $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
        arr.forEach(item => {
            $("#menu-card-items").append(`<h4 id="menu-item-title">${item.attributes.name}<span>${item.attributes.price}<span></h4>`)
            // $("#menu-card-items").append(`<p id="menu-item-desc">${item.attributes.description}</p>`)
        })
      })
})

$("#gnocchi").click(function(){
  $(document).ready(function(){
      const category = "Gnocchi & Risotto"

      const arr = menu.filter(item => item.attributes.category == category)
        
        $("#menu-card-items").empty()
        $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
        arr.forEach(item => {
            $("#menu-card-items").append(`<h4 id="menu-item-title">${item.attributes.name}<span>${item.attributes.price}<span></h4>`)
            $("#menu-card-items").append(`<p id="menu-item-desc">${item.attributes.description}</p>`)
        })
    })
})

$("#main").click(function(){
  $(document).ready(function(){
      const category = "Mains"

      const arr = menu.filter(item => item.attributes.category == category)
        
        $("#menu-card-items").empty()
        $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
        arr.forEach(item => {
            $("#menu-card-items").append(`<h4 id="menu-item-title">${item.attributes.name}<span>${item.attributes.price}<span></h4>`)
            $("#menu-card-items").append(`<p id="menu-item-desc">${item.attributes.description}</p>`)
        })
    })
})


$("#salad").click(function(){
  $(document).ready(function(){
      const category = "Salad"

      const arr = menu.filter(item => item.attributes.category == category)
        
        $("#menu-card-items").empty()
        $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
        arr.forEach(item => {
            $("#menu-card-items").append(`<h4 id="menu-item-title">${item.attributes.name}<span>${item.attributes.price}<span></h4>`)
            $("#menu-card-items").append(`<p id="menu-item-desc">${item.attributes.description}</p>`)
        })
    })
})

$("#pasta").click(function(){
  $(document).ready(function(){
      const category = "Pastas"

      const arr = menu.filter(item => item.attributes.category == category)
        
        $("#menu-card-items").empty()
        $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
        arr.forEach(item => {
            $("#menu-card-items").append(`<h4 id="menu-item-title">${item.attributes.name}<span>${item.attributes.price}<span></h4>`)
            $("#menu-card-items").append(`<p id="menu-item-desc">${item.attributes.description}</p>`)
        })
    })
})


$("#sides").click(function(){
  $(document).ready(function(){
      const category = "Sides"

      const arr = menu.filter(item => item.attributes.category == category)
        
        $("#menu-card-items").empty()
        $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
        arr.forEach(item => {
            $("#menu-card-items").append(`<h4 id="menu-item-title">${item.attributes.name}<span>${item.attributes.price}<span></h4>`)
            //$("#menu-card-items").append(`<p id="menu-item-desc">${item.attributes.description}</p>`)
        })
    })
})

$("#kids").click(function(){
  $(document).ready(function(){
      const category = "Kids Menu"

      const arr = menu.filter(item => item.attributes.category == category)
        
        $("#menu-card-items").empty()
        $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
        arr.forEach(item => {
            $("#menu-card-items").append(`<h4 id="menu-item-title">${item.attributes.name}<span>${item.attributes.price}<span></h4>`)
            $("#menu-card-items").append(`<p id="menu-item-desc">${item.attributes.description}</p>`)
        })
    })
})


$("#desserts").click(function(){
  $(document).ready(function(){
      const category = "Desserts"

      const arr = menu.filter(item => item.attributes.category == category)
        
        $("#menu-card-items").empty()
        $("#menu-card-items").append(`<h2 id="menu-item-heading">${category}</h2>`)
        arr.forEach(item => {
            $("#menu-card-items").append(`<h4 id="menu-item-title">${item.attributes.name}<span>${item.attributes.price}<span></h4>`)
            $("#menu-card-items").append(`<p id="menu-item-desc">${item.attributes.description}</p>`)
        })
    })
})
