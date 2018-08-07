
const btnBuscar = document.getElementById('btnBuscar');
const txtComida = document.getElementById('txtComida').value;
mexicana.style.display = 'none';
vegetariana.style.display = 'none';

btnBuscar.addEventListener('click', e => {
  if (txtComida == "mexicana"){
     mexicana.style.display = 'block';
  } else if (txtComida == "vegetariana"){
     vegetariana.style.display = 'block';
  }else {
    alert("No se encuentra tu busqueda");
  }

});
