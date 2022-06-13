var listaFilmes = [
    "https://resizing.flixster.com/Lh0JlGGqDY7XM2VTBGKJI8uJmdk=/fit-in/1152x864/v2/https://flxt.tmsimg.com/assets/p10701949_b_h9_ah.jpg",
    "https://store-images.s-microsoft.com/image/apps.44656.14398749872176704.f59f9492-0750-4d03-9a2d-acee18167bb9.eca84cda-914d-4c55-ae58-a5381f94c66f?mode=scale&q=90&h=300&w=200&background=%23FFFFFF"
  ];
  
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
  }
  