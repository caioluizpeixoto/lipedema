/* =====================================================================
   FUNIL CLÍNICO MISTO: QUIZ INTERATIVO + DIAGNÓSTICO + VSL
   Copy Original Adaptada (Termo "Senhora" 100% Removido e Humanizado)
   ===================================================================== */

// --- 1. BANCO DE DADOS DAS PERGUNTAS DO QUIZ (SEM CONTAGEM) ---
const quizQuestions = [
  {
    id: 1,
    category: "Cansaço Extremo e Sobrecarga",
    title: "O Cansaço Inexplicável",
    text: "Você tem um cansaço tão terrível nas pernas e nos braços ao final do dia que sente que \"só Jesus na causa\" para aguentar o peso do próprio corpo?",
    options: [
      { text: "Sim, é um cansaço e um peso insuportáveis.", weight: "high" },
      { text: "Não, minhas pernas são leves.", weight: "low" }
    ]
  },
  {
    id: 2,
    category: "Resistência a Exercícios e Dietas",
    title: "A Luta Invisível na Academia",
    text: "Você já tentou de tudo? Faz dieta, se mata na musculação e nos aeróbicos, emagrece no rosto e na barriga, mas o aspecto de casca de laranja e o inchaço nas pernas simplesmente não somem?",
    options: [
      { text: "Sim, eu luto, emagreço, mas nas pernas não muda nada.", weight: "high" },
      { text: "Não, quando eu malho, perco peso por igual.", weight: "low" }
    ]
  },
  {
    id: 3,
    category: "Exame de Nódulos e Bolas de Gordura",
    title: "O Teste das Bolas de Gordura",
    text: "Ao passar a mão nas suas coxas, braços ou até na barriga, você sente \"caroços\" duros por baixo da pele? Como se fossem verdadeiras bolas de gordura inflamadas e doloridas?",
    options: [
      { text: "Sim, sinto exatamente essas bolas de gordura debaixo da pele.", weight: "high" },
      { text: "Sinto apenas celulite comum e flacidez.", weight: "medium" },
      { text: "Minha pele é lisa.", weight: "low" }
    ]
  },
  {
    id: 4,
    category: "Fragilidade Capilar e Hematomas",
    title: "O Mistério das Manchas",
    text: "Você acorda frequentemente com manchas roxas (hematomas) nas pernas e nos braços que aparecem literalmente \"do nada\", sem ter batido em lugar nenhum?",
    options: [
      { text: "Sim, vivo com manchas roxas misteriosas.", weight: "high" },
      { text: "Não, só fico roxa se me machucar de verdade.", weight: "low" }
    ]
  },
  {
    id: 5,
    category: "Formato e Articulações dos Joelhos",
    title: "A Deformação dos Joelhos",
    text: "Você já notou, com tristeza, que a gordura está se acumulando e deixando os seus joelhos e as suas pernas com uma aparência grossa e deformada?",
    options: [
      { text: "Sim, meus joelhos estão cobertos de gordura e perdendo o formato.", weight: "high" },
      { text: "Não, meus joelhos têm aparência normal.", weight: "low" }
    ]
  },
  {
    id: 6,
    category: "Impacto Emocional e Vestuário",
    title: "O Trauma do Vestuário",
    text: "A sua autoestima foi tão afetada que você criou um \"trauma\" de mostrar o corpo? Hoje em dia só consegue usar roupas compridas, calças largas no verão e blusas de manga longa para esconder os braços?",
    options: [
      { text: "Sim, vivo escondida debaixo de roupas compridas.", weight: "high" },
      { text: "Não, uso roupas curtas sem problemas.", weight: "low" }
    ]
  },
  {
    id: 7,
    category: "Acesso a Tratamentos Especializados",
    title: "O Sofrimento Financeiro",
    text: "É uma grande dor para você querer cuidar da sua saúde, ver as pernas piorando, mas a sua situação financeira não permitir pagar tratamentos estéticos caros, cirurgias ou remédios de ponta?",
    options: [
      { text: "Sim, é desesperador não ter dinheiro para me tratar.", weight: "high" },
      { text: "Não, eu teria condições de pagar um tratamento caro.", weight: "medium" }
    ]
  },
  {
    id: 8,
    category: "Histórico no Sistema de Saúde",
    title: "O Desespero do SUS",
    text: "Você já procurou vários médicos, nunca lhe disseram o que era, ou pior: está há meses (ou anos) numa fila de espera do SUS para ver um angiologista, sem esperança de ser atendida logo?",
    options: [
      { text: "Sim, estou na fila de espera ou já desisti de procurar médicos.", weight: "high" },
      { text: "Não dependo do sistema público de saúde.", weight: "low" }
    ]
  },
  {
    id: 9,
    category: "Início dos Sintomas na Juventude",
    title: "O Preconceito de Uma Vida Inteira",
    text: "Você sofre com os olhares tortos e com o preconceito com as suas pernas desde a juventude (puberdade ou adolescência), sentindo-se julgada a vida inteira?",
    options: [
      { text: "Sim, carrego essa vergonha desde que eu era mocinha.", weight: "high" },
      { text: "Não, esse problema começou recentemente.", weight: "low" }
    ]
  },
  {
    id: 10,
    category: "Julgamentos e Invalidação Externa",
    title: "O Julgamento da Família e Médicos",
    text: "Qual dessas acusações injustas você mais ouviu (e que mais a machucou) ao longo da vida?",
    options: [
      { text: "\"Isso é obesidade e falta de vergonha na cara.\"", weight: "high" },
      { text: "\"Você é preguiçosa e faz corpo mole para não fazer exercício.\"", weight: "high" },
      { text: "\"Você não emagrece porque come escondido.\"", weight: "high" },
      { text: "Todas as acima. Eu sempre fui tratada como a culpada.", weight: "high" }
    ]
  },
  {
    id: 11,
    category: "Sensibilidade e Dor ao Toque",
    title: "A Dor ao Toque",
    text: "A gordura das suas pernas dói? Um simples esbarrão, ou o peso de um neto no seu colo, causa uma dor aguda que as outras pessoas não entendem?",
    options: [
      { text: "Sim, minha gordura é dolorida e sensível ao toque.", weight: "high" },
      { text: "Não, não sinto dores.", weight: "low" }
    ]
  },
  {
    id: 12,
    category: "Fator Hormonal e Idade",
    title: "A Luta Diária com a Idade",
    text: "Você já passou dos 35 ou 40 anos e sente que, apesar de \"estar lutando\" e tentando se cuidar todos os dias, o seu corpo parece estar jogando contra você?",
    options: [
      { text: "Sim, sinto que estou perdendo a batalha contra meu próprio corpo.", weight: "high" },
      { text: "Não, eu me sinto no controle.", weight: "low" }
    ]
  },
  {
    id: 13,
    category: "Hereditariedade e Locomoção",
    title: "O Medo Genético",
    text: "Você tem medo de que isso seja algo de família (do lado materno ou paterno) e que você esteja condenada a ficar numa cadeira de rodas ou não conseguir mais andar no futuro?",
    options: [
      { text: "Sim, sinto que as minhas pernas estão ficando piores a cada ano.", weight: "high" },
      { text: "Não tenho essa preocupação.", weight: "low" }
    ]
  },
  {
    id: 14,
    category: "Objetivo Principal de Saúde",
    title: "O Sonho Simples",
    text: "Se você pudesse pedir um único desejo hoje, o seu maior sonho seria simplesmente \"ter pernas normais\" para poder caminhar, ir à praia e viver sem dor?",
    options: [
      { text: "Sim. Meu único sonho é ter pernas normais de novo.", weight: "high" },
      { text: "Eu tenho outras prioridades no momento.", weight: "low" }
    ]
  },
  {
    id: 15,
    category: "Decisão de Tratamento",
    title: "O Fim do \"Corpo Mole\"",
    text: "Se a nossa avaliação provar que você tem uma doença real (Lipedema), que não é preguiça e que existe uma solução barata, feita em casa com ingredientes simples para amolecer essas bolas de gordura... Você daria uma chance a esse tratamento hoje?",
    options: [
      { text: "SIM. Por favor, eu preciso dessa solução.", weight: "high" },
      { text: "Não, prefiro continuar como estou.", weight: "low" }
    ]
  }
];

// --- 2. ROTEIRO DA MINI VSL (SEM O TERMO "SENHORA") ---
const vslScriptSegments = [
  {
    time: 0,
    text: "Se você está assistindo a esse vídeo, e sente vontade de chorar, de estar aos prantos de alívio... saiba que eu entendo."
  },
  {
    time: 14,
    text: "Se você sofreu preconceito desde quando era mocinha. Se ouviu a vida inteira que era preguiçosa, que estava obesa e que fazia 'corpo mole'. Por favor, respire fundo agora: A culpa nunca foi sua."
  },
  {
    time: 32,
    text: "É totalmente triste querer cuidar da saúde e não ter condições financeiras. É desesperador ir para a academia, fazer aeróbico e musculação, e ver os braços engrossarem e os joelhos ficarem deformados."
  },
  {
    time: 50,
    text: "Você perde peso, mas as bolas de gordura continuam ali. O aspecto de casca de laranja não sai. As manchas roxas aparecem do nada. Um cansaço terrível que, como muitas dizem, 'só Jesus na causa'."
  },
  {
    time: 70,
    text: "E a pior parte é ficar numa fila de espera do SUS por meses, ou ir a médicos particulares que olham para você e mandam fechar a boca. Eles não sabem, ou fingem não saber, que o que você tem é uma doença chamada Lipedema."
  },
  {
    time: 92,
    text: "O seu corpo não está acumulando gordura comum. Devido a uma bactéria silenciosa chamada Spongiforma, o seu sistema linfático criou um muro duro ao redor da sua gordura. É por isso que ela é cheia de caroços. É por isso que você tem que esconder os braços e usar roupas compridas."
  },
  {
    time: 120,
    text: "O seu sonho é ter pernas normais? Então escute com atenção. Você não precisa de uma cirurgia de 50 mil reais. Você não precisa de uma caneta de emagrecimento que custa o seu salário inteiro. E não precisa esperar um angiologista no SUS."
  },
  {
    time: 145,
    text: "Para amolecer esse tecido duro e drenar o inchaço, existe um solvente de fibrose natural e extremamente barato. Ele está concentrado no miolo fibroso de uma fruta tropical comum que encontramos em qualquer feira. Sim, aquela parte central dura que 99% das pessoas jogam fora no lixo sem imaginar o poder de cura."
  },
  {
    time: 172,
    text: "Quando unimos essa enzima pura do miolo com dois outros ingredientes que você tem na sua cozinha, ativamos um verdadeiro 'detergente linfático'. Em apenas 10 segundos pela manhã, esse ritual simples começa a amolecer a armadura que prende a sua gordura."
  },
  {
    time: 198,
    text: "Você já lutou até aqui. Com 40, 50, 60 anos... não deixe esse trauma acabar com a sua autoestima. Eu gravei um material completo ensinando as proporções exatas dessa receita caseira. É algo tão acessível que qualquer pessoa, em qualquer situação financeira, consegue fazer hoje mesmo."
  },
  {
    time: 222,
    text: "O botão para acessar essa receita está aqui abaixo. Dê esse presente a si mesma e volte a ter o orgulho de se olhar no espelho. A sua libertação começa agora."
  }
];

// Duração total estimada em segundos: 228 segundos (~3m48s)
const TOTAL_VSL_DURATION = 228;

// --- 3. ESTADO DA APLICAÇÃO ---
let currentQuestionIndex = 0;
let userAnswers = {};
let isAnalysisRunning = false;
let vslCurrentTime = 0;
let isVslPlaying = false;
let vslInterval = null;
let speechUtterance = null;
let voiceEnabled = true;

// --- 4. INICIALIZAÇÃO DO DOM ---
document.addEventListener("DOMContentLoaded", () => {
  setupCurrentDate();
  setupIntroScreen();
  renderQuestion(currentQuestionIndex);
  setupQuizNavigation();
  setupVslPlayer();
  setupAccordion();
  setupCheckoutModal();
  setupLiveViewerFluctuation();
});

// Atualiza data dinâmica em português
function setupCurrentDate() {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const today = new Date().toLocaleDateString('pt-BR', options);
  const dateTag = document.getElementById("current-date-tag");
  if (dateTag) {
    dateTag.textContent = `Atualizado: ${today}`;
  }
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Renderiza a pergunta atual do Quiz
function renderQuestion(index) {
  const q = quizQuestions[index];
  if (!q) return;

  const total = quizQuestions.length;
  const progressPercent = Math.round(((index + 1) / total) * 100);

  // Elementos do card (sem contagem de perguntas)
  document.getElementById("step-indicator").textContent = "Avaliação em Andamento";
  document.getElementById("progress-percentage").textContent = `${progressPercent}%`;
  document.getElementById("progress-fill").style.width = `${progressPercent}%`;
  document.getElementById("question-category").textContent = q.category;
  
  document.getElementById("question-badge").textContent = q.category;
  document.getElementById("question-title").textContent = q.title;
  document.getElementById("question-description").textContent = q.text;

  // Botão voltar
  const btnPrev = document.getElementById("btn-prev");
  if (btnPrev) {
    btnPrev.style.display = "inline-flex";
    btnPrev.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      ${index === 0 ? "Voltar ao Início" : "Voltar"}
    `;
  }

  // Grid de opções
  const optionsGrid = document.getElementById("options-grid");
  optionsGrid.innerHTML = "";

  q.options.forEach((opt, optIdx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    if (userAnswers[q.id] === optIdx) {
      btn.classList.add("selected");
    }

    btn.innerHTML = `
      <div class="option-circle">
        <div class="option-circle-inner"></div>
      </div>
      <div class="option-text">${opt.text}</div>
    `;

    btn.addEventListener("click", () => {
      selectOption(q.id, optIdx, btn);
    });

    optionsGrid.appendChild(btn);
  });
}

// Seleciona a opção e avança com transição empática
function selectOption(questionId, optionIndex, clickedBtn) {
  // Feedback visual
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach(b => b.classList.remove("selected"));
  clickedBtn.classList.add("selected");

  userAnswers[questionId] = optionIndex;

  // Micro-animação antes de ir para a próxima pergunta
  setTimeout(() => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      const quizCard = document.getElementById("quiz-card");
      quizCard.style.opacity = "0.4";
      quizCard.style.transform = "translateY(8px)";
      
      setTimeout(() => {
        renderQuestion(currentQuestionIndex);
        quizCard.style.opacity = "1";
        quizCard.style.transform = "translateY(0)";
        window.scrollTo({ top: 120, behavior: "smooth" });
      }, 150);
    } else {
      // Quiz concluído -> Transição para a FASE 2 (Análise)
      startPhase2Analysis();
    }
  }, 320);
}

// Configuração da Tela de Apresentação (Fase 0)
function setupIntroScreen() {
  const btnStart = document.getElementById("btn-start-intro-quiz");
  if (!btnStart) return;

  btnStart.addEventListener("click", () => {
    const introSec = document.getElementById("intro-section");
    const quizSec = document.getElementById("quiz-section");

    if (introSec && quizSec) {
      introSec.classList.remove("active");
      quizSec.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

// Navegação do Quiz
function setupQuizNavigation() {
  const btnPrev = document.getElementById("btn-prev");
  if (!btnPrev) return;

  btnPrev.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion(currentQuestionIndex);
      window.scrollTo({ top: 60, behavior: "smooth" });
    } else {
      // Retorna para a tela de Apresentação
      const introSec = document.getElementById("intro-section");
      const quizSec = document.getElementById("quiz-section");
      if (introSec && quizSec) {
        quizSec.classList.remove("active");
        introSec.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  });
}

// --- 5. FASE 2: TELA DE ANÁLISE E DIAGNÓSTICO (O Acolhimento) ---
function startPhase2Analysis() {
  if (isAnalysisRunning) return;
  isAnalysisRunning = true;

  // Troca de seção: oculta quiz e exibe análise
  document.getElementById("quiz-section").classList.remove("active");
  const analysisSec = document.getElementById("analysis-section");
  analysisSec.classList.add("active");
  window.scrollTo({ top: 40, behavior: "smooth" });

  const percentageEl = document.getElementById("scan-percentage");
  let currentPct = 0;

  const step1 = document.getElementById("step-item-1");
  const step2 = document.getElementById("step-item-2");
  const step3 = document.getElementById("step-item-3");
  const step4 = document.getElementById("step-item-4");
  const step5 = document.getElementById("step-item-5");

  step1.classList.add("active");

  const progressInterval = setInterval(() => {
    currentPct += 1;
    if (percentageEl) {
      percentageEl.textContent = `${currentPct}%`;
    }

    // Sequenciamento das etapas com base na porcentagem
    if (currentPct === 25) {
      markStepCompleted(step1);
      markStepActive(step2);
    } else if (currentPct === 50) {
      markStepCompleted(step2);
      markStepActive(step3);
    } else if (currentPct === 75) {
      markStepCompleted(step3);
      markStepActive(step4);
    } else if (currentPct === 92) {
      markStepCompleted(step4);
      markStepActive(step5);
    } else if (currentPct >= 100) {
      clearInterval(progressInterval);
      markStepCompleted(step5);

      // Aguarda 1 segundo no 100% e transiciona para a FASE 3 (VSL)
      setTimeout(() => {
        finishAnalysisAndGoToVSL();
      }, 1200);
    }
  }, 45); // ~4.5 segundos de scanner realista
}

function markStepActive(item) {
  if (!item) return;
  item.classList.remove("completed");
  item.classList.add("active");
  const iconBox = item.querySelector(".step-status-icon");
  if (iconBox) {
    iconBox.innerHTML = `<span class="spinner-small"></span>`;
  }
}

function markStepCompleted(item) {
  if (!item) return;
  item.classList.remove("active");
  item.classList.add("completed");
  const iconBox = item.querySelector(".step-status-icon");
  if (iconBox) {
    iconBox.innerHTML = `<span class="icon-check">✓</span>`;
  }
}

// Transição para a FASE 3 (Página da VSL)
function finishAnalysisAndGoToVSL() {
  document.getElementById("analysis-section").classList.remove("active");
  const vslSec = document.getElementById("vsl-section");
  vslSec.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Customiza o Laudo do paciente com base nas respostas
  customizePatientReport();
}

function customizePatientReport() {
  // Se marcou que tem dor ao toque (Pergunta 11, ID 11)
  const reportPain = document.getElementById("report-pain");
  if (reportPain && userAnswers[11] === 0) {
    reportPain.textContent = "Hipersensibilidade Fibrótica Aguda Detectada";
  } else if (reportPain) {
    reportPain.textContent = "Sensibilidade Intermitente";
  }

  // Se marcou manchas roxas misteriosas (Pergunta 4, ID 4)
  const reportBruises = document.getElementById("report-bruises");
  if (reportBruises && userAnswers[4] === 0) {
    reportBruises.textContent = "Fragilidade Microcapilar Frequente (Manchas Espontâneas)";
  }

  // Gera código aleatório único de prontuário
  const codeEl = document.getElementById("report-code");
  if (codeEl) {
    codeEl.textContent = Math.floor(10000 + Math.random() * 90000);
  }
}

// --- 6. PLAYER DA VSL COM SÍNTESE DE VOZ E LEGENDAS SINCRONIZADAS ---
function setupVslPlayer() {
  const playerFrame = document.getElementById("vsl-player-frame");
  const btnMainPlay = document.getElementById("btn-main-play");
  const playOverlay = document.getElementById("play-overlay");
  const ctrlPlayPause = document.getElementById("ctrl-play-pause");
  const ctrlPlayIcon = document.getElementById("ctrl-play-icon");
  const ctrlRewind = document.getElementById("ctrl-rewind");
  const ctrlFullscreen = document.getElementById("ctrl-fullscreen");
  const scrubberBar = document.getElementById("scrubber-bar");
  const scrubberProgress = document.getElementById("scrubber-progress");
  const timeCurrentEl = document.getElementById("time-current");
  const timeDurationEl = document.getElementById("time-duration");
  const captionTextEl = document.getElementById("caption-text");
  const btnVoiceToggle = document.getElementById("btn-voice-toggle");
  const voiceToggleLabel = document.getElementById("voice-toggle-label");
  const btnInstantUnlock = document.getElementById("btn-instant-unlock");

  timeDurationEl.textContent = formatTime(TOTAL_VSL_DURATION);

  // Clique no botão principal de Play
  btnMainPlay.addEventListener("click", () => {
    startOrResumeVsl();
  });

  playOverlay.addEventListener("click", () => {
    startOrResumeVsl();
  });

  // Botão de Play / Pause da barra de controle
  ctrlPlayPause.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isVslPlaying) {
      pauseVsl();
    } else {
      startOrResumeVsl();
    }
  });

  // Voltar 10s
  ctrlRewind.addEventListener("click", (e) => {
    e.stopPropagation();
    seekToTime(Math.max(0, vslCurrentTime - 10));
  });

  // Barra de progresso clicável
  scrubberBar.addEventListener("click", (e) => {
    e.stopPropagation();
    const rect = scrubberBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    seekToTime(pct * TOTAL_VSL_DURATION);
  });

  // Tela Cheia
  ctrlFullscreen.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      playerFrame.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  // Alternador de Voz Sintetizada
  btnVoiceToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    voiceEnabled = !voiceEnabled;
    if (voiceEnabled) {
      voiceToggleLabel.textContent = "Voz Ativa";
      btnVoiceToggle.style.color = "#5eead4";
      if (isVslPlaying) {
        speakCurrentSegment();
      }
    } else {
      voiceToggleLabel.textContent = "Voz Muda";
      btnVoiceToggle.style.color = "#94a3b8";
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }
  });

  // Atalho para liberar a oferta imediatamente
  btnInstantUnlock.addEventListener("click", () => {
    unlockVslContent();
    const pitchSection = document.getElementById("vsl-pitch-section");
    if (pitchSection) {
      pitchSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Libera o laudo, as provas sociais e os botões de compra quando a VSL termina
function unlockVslContent() {
  const vslSec = document.getElementById("vsl-section");
  if (!vslSec.classList.contains("vsl-locked")) return;
  vslSec.classList.remove("vsl-locked");

  const playerWrapper = document.querySelector(".vsl-player-wrapper");
  if (playerWrapper && playerWrapper.nextElementSibling) {
    playerWrapper.nextElementSibling.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function startOrResumeVsl() {
  isVslPlaying = true;
  const playerFrame = document.getElementById("vsl-player-frame");
  playerFrame.classList.add("playing");

  const ctrlPlayIcon = document.getElementById("ctrl-play-icon");
  ctrlPlayIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>`;

  clearInterval(vslInterval);
  vslInterval = setInterval(() => {
    vslCurrentTime += 1;
    if (vslCurrentTime >= TOTAL_VSL_DURATION) {
      vslCurrentTime = TOTAL_VSL_DURATION;
      pauseVsl();
      unlockVslContent();
    }
    updateVslUI();
  }, 1000);

  updateVslUI();
  if (voiceEnabled) {
    speakCurrentSegment();
  }
}

function pauseVsl() {
  isVslPlaying = false;
  const playerFrame = document.getElementById("vsl-player-frame");
  playerFrame.classList.remove("playing");

  const ctrlPlayIcon = document.getElementById("ctrl-play-icon");
  ctrlPlayIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"/>`;

  clearInterval(vslInterval);
  if ('speechSynthesis' in window) {
    window.speechSynthesis.pause();
  }
}

function seekToTime(targetSeconds) {
  vslCurrentTime = Math.round(targetSeconds);
  updateVslUI();
  if (isVslPlaying && voiceEnabled) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    speakCurrentSegment();
  }
}

let lastSegmentIndex = -1;

function updateVslUI() {
  const scrubberProgress = document.getElementById("scrubber-progress");
  const timeCurrentEl = document.getElementById("time-current");
  const captionTextEl = document.getElementById("caption-text");

  const pct = (vslCurrentTime / TOTAL_VSL_DURATION) * 100;
  scrubberProgress.style.width = `${pct}%`;
  timeCurrentEl.textContent = formatTime(vslCurrentTime);

  // Encontra o segmento de texto correspondente
  let activeIndex = 0;
  for (let i = 0; i < vslScriptSegments.length; i++) {
    if (vslCurrentTime >= vslScriptSegments[i].time) {
      activeIndex = i;
    }
  }

  captionTextEl.textContent = `“${vslScriptSegments[activeIndex].text}”`;

  // Se o segmento mudou e está tocando com voz
  if (activeIndex !== lastSegmentIndex) {
    lastSegmentIndex = activeIndex;
    if (isVslPlaying && voiceEnabled) {
      speakCurrentSegment();
    }
  }
}

// Reproduz a narração da Dra. usando a síntese nativa de voz do navegador (pt-BR)
function speakCurrentSegment() {
  if (!('speechSynthesis' in window) || !voiceEnabled) return;

  window.speechSynthesis.cancel();

  const segment = vslScriptSegments[lastSegmentIndex >= 0 ? lastSegmentIndex : 0];
  if (!segment) return;

  const utterance = new SpeechSynthesisUtterance(segment.text);
  utterance.lang = 'pt-BR';
  utterance.rate = 1.0; // Cadência médica e empática
  utterance.pitch = 0.95; // Tom masculino natural de médico especialista (Dr. Rodrigo Cazini)

  // Tenta selecionar voz brasileira disponível
  const voices = window.speechSynthesis.getVoices();
  const ptVoice = voices.find(v => v.lang.includes('pt-BR') || v.lang.includes('pt_BR') || v.lang.includes('pt'));
  if (ptVoice) {
    utterance.voice = ptVoice;
  }

  window.speechSynthesis.speak(utterance);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// --- 7. ACCORDION DO FAQ ---
function setupAccordion() {
  const triggers = document.querySelectorAll(".accordion-trigger");
  triggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const parent = trigger.parentElement;
      const isOpen = parent.classList.contains("open");

      // Fecha todos os outros
      document.querySelectorAll(".accordion-item").forEach(item => {
        item.classList.remove("open");
      });

      if (!isOpen) {
        parent.classList.add("open");
      }
    });
  });
}

// --- 8. MODAL DE CHECKOUT & AÇÃO DOS BOTÕES ---
function setupCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  const btnClose = document.getElementById("modal-close");
  const ctaButtons = [
    document.getElementById("btn-final-checkout"),
    document.getElementById("btn-sticky-checkout")
  ];

  ctaButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("active");
      });
    }
  });

  if (btnClose) {
    btnClose.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  // Fecha clicando no backdrop
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}

// --- 9. FLUTUAÇÃO DE VISUALIZADORAS AO VIVO (Gatilho de Prova Social) ---
function setupLiveViewerFluctuation() {
  const viewerEl = document.getElementById("viewer-count");
  if (!viewerEl) return;

  setInterval(() => {
    const current = parseInt(viewerEl.textContent.replace(".", ""), 10) || 1482;
    const delta = Math.floor(Math.random() * 9) - 4; // -4 a +4
    const next = Math.max(1450, current + delta);
    viewerEl.textContent = next.toLocaleString('pt-BR');
  }, 4000);
}
