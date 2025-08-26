document.addEventListener("DOMContentLoaded", function(event) { 

  let selectedBeast = '';
  let selectedSize = '';
  let selectedPlane = '';
  let selectedLife = '';
  const sizes = [
    'Tiny', 'Small','Medium', 'Large', 'Huge', 'Gargantuan'
  ];
  const sizeKey =[
    'T', 'S', 'M', 'L', 'H', 'G'
  ]
  function renderStats() {
    let beast = beasts.filter(b => b.name === selectedBeast)[0];
    console.log(beast)
    let nameParts = [];
    let displaySize = ''
    if(selectedBeast.length) {
      if(selectedSize.length) {
        let i = sizeKey.indexOf(beast.size[0]);
        displaySize = sizes[i]
        switch(selectedSize) {
          case 'Giant':
            nameParts.push(selectedSize)
            displaySize = sizes[i+1]
            break;
          case 'Enormous':
            nameParts.push(selectedSize)
            displaySize = sizes[i+2]
            break;
        }
      }
      if(selectedPlane.length && selectedPlane !== 'Material') nameParts.push(selectedPlane)
    }
    nameParts.push(selectedBeast);
    if(selectedBeast.length) {
      if(selectedLife.length && selectedLife !== 'Alive') nameParts.push(selectedLife)
    }
    document.getElementById('beast-name').innerText = nameParts.join(' ');
    if(displaySize.length) document.getElementById('beast-display-size').innerText = displaySize+ ' ';
  }


  let beastEl = document.getElementById('beast-select')
  beastEl.addEventListener('change',(e) => {
    if(e.target.value?.length){
      selectedBeast = e.target.value
      renderStats()
    }
  });
  beastEl.innerHTML = `<option value="">Choose</option>`+beasts.map(b => `<option value="${b.name}">${b.name}</option>`)

  document.getElementById('size-select').addEventListener('change',(e) => {
    if(e.target.value?.length){
      selectedSize = e.target.value
      renderStats()
    }
  });

  document.getElementById('plane-select').addEventListener('change',(e) => {
    if(e.target.value?.length){
      selectedPlane = e.target.value
      renderStats()
    }
  });

  document.getElementById('life-select').addEventListener('change',(e) => {
    if(e.target.value?.length){
      selectedLife = e.target.value
      renderStats()
    }
  });

});