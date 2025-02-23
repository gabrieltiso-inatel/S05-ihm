const usuario = { nome: "Raphael", matricula: "123456", pendencia: false, acessibilidade: true };

const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false },
  { id: 2, formato: "padrao", status: true, acessivel: false },
  { id: 3, formato: "padrao", status: true, acessivel: false },
  { id: 4, formato: "padrao", status: false, acessivel: true },
  { id: 5, formato: "padrao", status: false, acessivel: true },
  { id: 6, formato: "duplo", status: true, acessivel: true },
  { id: 7, formato: "duplo", status: false, acessivel: true },
  { id: 8, formato: "duplo", status: false, acessivel: true },  
];

function sortearArmario(armariosDisponiveis) {
  return armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];
}

function reservarArmario() {
  let agora = Date.now();
  let horarioDaReserva = new Date(agora);
  
  let tipoSelecionado = document.getElementById("tipoArmario").value;
  let armariosDisponiveis = armarios.filter(a => a.formato === tipoSelecionado && a.status === true && usuario.acessibilidade === a.acessivel);
  
  if (armariosDisponiveis.length === 0) {
    document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }
  
  let horarioDeEntrega = new Date(agora);
  horarioDeEntrega.setHours(horarioDeEntrega.getHours() + 24);

  // Atualização do armário sorteado
  let armarioSorteado = sortearArmario(armariosDisponiveis);
  armarioSorteado.status = false;
  armarioSorteado.horario = horarioDaReserva.toLocaleString();
  armarioSorteado.entrega = horarioDeEntrega.toLocaleString();
  
  // Atualização do usuário
  usuario.pendencia = true;
  
  document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! O armário ${armarioSorteado.id} foi reservado com sucesso! O horário de entrega é ${horarioDeEntrega.toLocaleString()}.`;

  console.log(usuario);
  console.log(armarioSorteado);
}
