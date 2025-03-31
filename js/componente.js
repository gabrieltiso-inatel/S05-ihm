const data = [
  {
    id: 1,
    disciplina: "S05 - Interface Homem-máquina",
    data: "ter",
    horario: "10:00",
    local: "P1-S17",
    prova_alert: false,
    prova: "12/05",
    frequencia: "10/25",
    nota: "9"
  },
  {
    id: 2,
    disciplina: "E01 - Circuitos Elétricos em Corrente Contínua",
    data: "ter",
    horario: "10:00",
    local: "P1-S17",
    prova_alert: true,
    prova: "12/05",
    frequencia: "10/25",
    nota: "5"
  },
  {
    id: 3,
    disciplina: "M02 - Álgebra e Geometria Analítica",
    data: "ter",
    horario: "10:00",
    local: "P1-S17",
    prova_alert: true,
    prova: "12/05",
    frequencia: "10/25",
    nota: "7"
  }
];

class AulasComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.hoje = "ter";
    }
  
    connectedCallback() {
      this.loadData();
    }
  
    async loadData() {
      try {
        const fakePromise = new Promise((resolve) => {
          setTimeout(() => {
            resolve(data);
          }, 100);
        })

        const aulas = await fakePromise;
        this.render(aulas);
      } catch (error) {
        console.error('Erro ao carregar os dados das aulas:', error);
      }
    }
  
    render(aulas) {
      const aulasDia = aulas.filter(a => a.data === this.hoje);
  
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '../css/componente_aulas.css'; 

      this.shadowRoot.appendChild(link); 
      this.shadowRoot.innerHTML += `
        <div>
          ${aulasDia.map(a => {
            let provaDisplay = a.prova_alert ? '' : 'display: none;';
            let nota = parseInt(a.nota);

            let provaNota;
            if (nota < 6) {
              provaNota = 'low';
            } else if (nota >= 6 && nota < 8) {
              provaNota = 'medium';
            } else {
              provaNota = 'high';
            }

            return `
              <div class="comp-aula">
                <div class="lable-prova p_lable arimo-bold" style="${provaDisplay}">PROVA: <b>${a.prova}</b></div>
                <div class="titulo_aula arimo-bold">${a.disciplina}</div>
                <p class="p arimo-normal">Local e Horário: <b>${a.local} - ${a.horario}</b></p>
                <div class="lables">
                  <div class="lable-frequencia p_lable arimo-bold">FALTAS: <b>${a.frequencia}</b></div>
                  <div class="lable-nota p_lable arimo-bold" data-grade=${provaNota}>CR: <b>${a.nota}</b></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }
  }
  
  customElements.define('aulas-component', AulasComponent);  