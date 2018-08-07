
const btnBuscar = document.getElementById('btnBuscar');
// const txtComida = document.getElementById('txtComida').value;
mexicana.style.display = 'none';
vegetariana.style.display = 'none';

btnBuscar.addEventListener('click', e => {
  const txtComida = document.getElementById('txtComida').value;
  if (txtComida == "mexicana"){
     mexicana.style.display = 'block';
     vegetariana.style.display = 'none';
  } else if (txtComida == "vegetariana"){
     vegetariana.style.display = 'block';
     mexicana.style.display = 'none';
  }else {
    alert("No se encuentra tu busqueda");
  }

});
