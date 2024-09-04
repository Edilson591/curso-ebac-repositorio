const alunosMap = new Map([
    ["Ana", 9.0],
    ["João", 7.5],
    ["Maria", 8.5],
    ["Carlos", 6.0],
    ["Luciana", 10.0],
    ["Pedro", 5.5]
  ]);

  const alunos = Array.from(alunosMap,([name,nota]) => ({name,nota}))


  const alunosPassaram = alunos.filter((item) =>  item.nota >= 6)
  console.log(alunosPassaram)