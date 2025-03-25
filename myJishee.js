const student = [
  { ner: "zaya", nas: 20, huis: "f", country: "mongol" },
  { ner: "sara", nas: 30, huis: "f", country: "usa" },
  { ner: "tarou", nas: 25, huis: "m", country: "japan" },
];

// 1. gadaad oyutan student ner, country hewle

const intlStudent = student.filter(({ country }) => {
  if (country !== "mongol") {
    return true;
  }
});

const countries = intlStudent.map(({ country, ner }) => {
  return { ner, country };
});

console.log(countries);

// dundaj nasiig ol

const more30 = student.reduce((acc, { nas }) => {
  return (acc = acc + nas);
}, 0);

console.log(more30 / student.length);
