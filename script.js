const peopleInSpace = document.querySelector('[data-js="peopleInSpace"]');
const peopleISS = document.querySelector('[data-js="peopleISS"]');
const peopleTiangong = document.querySelector('[data-js="peopleTiangong"]');
const listWraper = document.querySelector('[data-js="listWraper"]');

async function peopleSpace() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();
  peopleInSpace.textContent = `People in Space: ${data.number}`;

  const peopleOnISS = data.people.filter((person) => person.craft === "ISS");
  const peopleOnTiangong = data.people.filter(
    (person) => person.craft === "Tiangong"
  );
  console.log(peopleOnISS);
  console.log(peopleOnTiangong);

  data.people.forEach((person) => {
    const listPeople = document.createElement("li");
    listPeople.textContent = person.name;
    document.body.append(listPeople);
  });

  peopleISS.addEventListener("click", () => {
    peopleOnISS.forEach((person) => {
      const listPeople1 = document.createElement("li");
      listPeople1.textContent = person.name;
      document.body.append(listPeople1);
    });
  });

  peopleTiangong.addEventListener("click", () => {
    peopleOnTiangong.forEach((person) => {
      const listPeople1 = document.createElement("li");
      listPeople1.textContent = person.name;
      document.body.append(listPeople1);
    });
  });

  return data;
}

peopleSpace();
