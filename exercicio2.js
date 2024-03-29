let students = [
  {
    name: "Fabio",
    nota1: 7,
    nota2: 8
  },
  {
    name: "Alberto",
    nota1: 4,
    nota2: 5
  },
  {
    name: "Ricardo",
    nota1: 10,
    nota2: 9
  },
  {
    name: "Sergio",
    nota1: 7,
    nota2: 7
  }
]

function media(num1, num2) {
  let notaMedia = (num1 + num2) / 2
  return notaMedia
}

for (let index = 0; index < students.length; index++) {
  let mediaAluno = media(students[index].nota1, students[index].nota2)
  
  if (mediaAluno >= 7) {
    alert(`A média do(a) aluno(a) ${students[index].name} é: ${mediaAluno} \n
    Parabéns ${students[index].name}! Você foi aprovado(a) no concurso`)
  } else {
    alert(`A média do(a) aluno(a) ${students[index].name} é: ${mediaAluno} \n
    Nào foi dessa vez, ${students[index].name}! Tente novamente `)
  }

}