const json = '../data/restaurantes.json';

window.realoadJSON = () => {
  fetch(json)
    .then(response => response.json())
    .then((res) => {
      const infoStudent = computeStudentsStats(res);
      const infoGeneration = computeGenerationsStats(res);
      filterStudents(infoStudent);
      studentDraw(infoStudent);
      generationDraw(infoGeneration);
    })
    .catch(error => {console.log(error)});
};
