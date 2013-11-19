var im = document.getElementById('first'); // or select based on classes
im.onerror = function(){
  // image not found or change src like this as default image:

   im.src = 'img/4042.jpg';
};