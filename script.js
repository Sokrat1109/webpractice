

const allTests = { // массив с вопросами
    cattell: {
        key: "cattell",
        title: "Личностный Тест по Кэттеллу (адаптация)",
        description: `Этот тест - краткая адаптация опросника Раймонда Кэттелла. <br> 
Он помогает оценить выраженность четырех ключевых факторов личности: <br> 
Прохождение теста занимает 2–3 минуты. <br> 
Выбирай тот вариант, который ближе всего к тебе.`
,
        questions: [
            { // 1 Доминирование
                question: "Когда мне нужно принять решение, я чаще всего :",
                answers :[
                    { text: "Делаю это быстро, без лишних колебаний", dominant: 4},
                    { text: "Склоняюсь к решению, но часто уточняю у других", dominant: 3},
                    { text: "Затрудняюсь выбрать, если нет четкой инструкции", dominant: 2},
                    { text: "Предпочитаю, чтобы кто-то другой решил", dominant: 1}
                ]
        
            },
            { // 2 эмоциональная устойчивость
                question: "Когда я сталкиваюсь с неожиданной проблемой :",
                answers :[
                    { text: "Сразу берусь за решение спокойно", emotion: 4},
                    { text: "Волнуюсь, но действую", emotion: 3},
                    { text: "Теряюсь на какое-то время", emotion: 2},
                    { text: "Паникую и откладываю все", emotion: 1}
                ]
            },
            { // 3 социальная смелость
                question: "Как ты чувствуешь себя в компании незнакомых людей?",
                answers :[
                    { text: "Всегда легко нахожу общий язык", social: 4},
                    { text: "Немного стесняюсь, но адаптируюсь быстро", social: 3},
                    { text: "Чувствую напряжение, почти не говорю", social: 2},
                    { text: "Избегаю таких ситуаций", social: 1}
                ]
            },
            { // 4 контроль
                question: "Когда я злюсь или раздражен :",
                answers :[
                    { text: "Спокойно справляюсь с этим состоянием", control: 4},
                    { text: "Молчу, но внутри все кипит", control: 3},
                    { text: "Иногда срываюсь", control: 2},
                    { text: "Не контролирую себя, могу наговорить лишнего", control: 1}
                ]
            },
            { // 5 доминирование
                question: "В разговоре я чаще :",
                answers :[
                    { text: "Руководствую - веду диалог", dominant: 4},
                    { text: "Инициирую, но стараюсь слушать", dominant: 3},
                    { text: "Отвечаю по ситуации, не лезу вперед", dominant: 2},
                    { text: "Жду, пока ко мне обратятся", dominant: 1}
                ]
            },
            { // 6 эмицональная устойчивость
                question: "Когда я нервничаю :",
                answers :[
                    { text: "Почти незаметно ни для себя, ни для других", emotion: 4},
                    { text: "Чувствую, но могу подавить", emotion: 3},
                    { text: "Замечают окружающие - я на взводе", emotion: 2},
                    { text: "Теряю контроль над эмоциями", emotion: 1}
                ]
            },
            { // 7 социальная смелость
                question: "Если мне предложат выступить перед аудиторией :",
                answers :[
                    { text: "Без проблем, я люблю это", social: 4},
                    { text: "Немного волнуюсь, но могу", social: 3},
                    { text: "Очень неуверенно себя чувствую", social: 2},
                    { text: "Категорически откажусь", social: 1}
                ]
            },
            { // 8 контроль
                question: "Если я вижу несправедливость",
                answers :[
                    { text: "Всегда вмешиваюсь, даже если конфликт", control: 4},
                    { text: "Пробую остановить ситуацию спокойно", control: 3},
                    { text: "Наблюдаю со стороны", control: 2},
                    { text: "Игнорирую - не хочу влезать", control: 1}
                ]
            },
            { // 9 доминирование
                question: "Когда я в группе :",
                answers :[
                    { text: "Быстро беру на себя инициативу", dominant: 4},
                    { text: "Могу быть лидером, если нужно", dominant: 3},
                    { text: "Предпочитаю выполнять указания", dominant: 2},
                    { text: "Избегаю ответственности", dominant: 1}
                ]
            },
            { // 10 эмоциональная устойчивость
                question: "После тяжелого дня я :",
                answers :[
                    { text: "Остаюсь в стабильном состоянии", emotion: 4},
                    { text: "Немного раздражен, но держу себя", emotion: 3},
                    { text: "Хандрю, отстраняюсь", emotion: 2},
                    { text: "Раздражаюсь и срываюсь на близких", emotion: 1}
                ]
            },
            { // 11 социальная смелость
                question: "Тебе нравится знакомиться с новыми людьми?",
                answers :[
                    { text: "Очень - всегда открыт к новым связям", social: 4},
                    { text: "В зависимости от ситуации", social: 3},
                    { text: "Не люблю, но могу терпеть", social: 2},
                    { text: "Избегаю, неинтересно", social: 1}
                ]
            },
            { // 12 контроль
                question: "Когда меня критикуют :",
                answers :[
                    { text: "Слушаю, спокойно оцениваю", control: 4},
                    { text: "Сначала задевает, но принимаю", control: 3},
                    { text: "Резко реагирую, оправдываюсь", control: 2},
                    { text: "Злюсь  обижаюсь", control: 1}
                ]
            },
            { // 13 доминирование
                question: "Если кто-то пытается мной командовать :",
                answers :[
                    { text: "Возражаю и иду наперекор", dominant: 4},
                    { text: "Спорю, если уверен", dominant: 3},
                    { text: "Подчиняюсь, но недоволен", dominant: 2},
                    { text: "Молча соглашаюсь", dominant: 1}
                ]
            },
            { // 14 эмоциональная устойчивость
                question: "Когда у меня плохое настроение",
                answers :[
                    { text: "Никто не замечает - держу в себе", emotion: 4},
                    { text: "Периодически срываюсь", emotion: 3},
                    { text: "Говорю об этом, ищу поддержку", emotion: 2},
                    { text: "Сильно проваливаюсь, изолируюсь", emotion: 1}
                ]
            },
            { // 15 социальная смелость
                question: "Я предпочитаю проводить время :",
                answers :[
                    { text: "В шумной компании", social: 4},
                    { text: "В тесном кругу друзей", social: 3},
                    { text: "В одиночестве или вдвоем", social: 2},
                    { text: "Один, вообще без общения", social: 1}
                ]
            },
        ]
    },
    phq: {
        title: "Тест PHQ-9",
        description: `Этот тест - расширенная версия теста PHQ-9 на выявление депрессии. <br> 
Выбери, как часто ты испытывал указанные состояния за последние 2 недели. <br> 
<span style="font-size: 1.2rem; font-weight: bold;">И помни </span> : <span style="font-size: 1.2rem;">если ты это чувствуешь, значит тебе уже не "показалось". </span><br> 
<span style="font-size: 1.2rem; font-weight: bold;">Слушай себя.</span>`,
        questions: [
            { // 1
                question: "Отсутствие интереса или удовольствия от того, что раньше радовало",
                answers :[
                    { text: "0 - совсем не было", score: 0},
                    { text: "1 - несколько дней", score: 1},
                    { text: "2 - более половины дней", score: 2},
                    { text: "3 - почти каждый день", score: 3}
                ]
        
            },
            { // 2
                question: "Подавленное, грустное или безнадежное настроение",
                answers :[
                    { text: "0 - совсем не было", score: 0},
                    { text: "1 - несколько дней", score: 1},
                    { text: "2 - более половины дней", score: 2},
                    { text: "3 - почти каждый день", score: 3}
                ]
            },
            { // 3
                question: "Проблемы со сном - бессонница или чрезмерный сон",
                answers :[
                    { text: "0 - совсем не было", score: 0},
                    { text: "1 - несколько дней", score: 1},
                    { text: "2 - более половины дней", score: 2},
                    { text: "3 - почти каждый день", score: 3}
                ]
            },
            { // 4
                question: "Чувство усталости или нехватки энергии",
                answers :[
                    { text: "0 - совсем не было", score: 0},
                    { text: "1 - несколько дней", score: 1},
                    { text: "2 - более половины дней", score: 2},
                    { text: "3 - почти каждый день", score: 3}
                ]
            },
            { // 5
                question: "Изменение аппетита - переедание или его отсутствие",
                answers :[
                    { text: "0 - совсем не было", score: 0},
                    { text: "1 - несколько дней", score: 1},
                    { text: "2 - более половины дней", score: 2},
                    { text: "3 - почти каждый день", score: 3}
                ]
            },
            { // 6
                question: "Чувство вины, собственной никчемности или бесполезности",
                answers :[
                    { text: "0 - совсем не было", score: 0},
                    { text: "1 - несколько дней", score: 1},
                    { text: "2 - более половины дней", score: 2},
                    { text: "3 - почти каждый день", score: 3}
                ]
            },
            { // 7
                question: "Затруднение концентрации - на чтении, разговорах, задачах",
                answers :[
                    { text: "0 - совсем не было", score: 0},
                    { text: "1 - несколько дней", score: 1},
                    { text: "2 - более половины дней", score: 2},
                    { text: "3 - почти каждый день", score: 3}
                ]
            },
            { // 8
                question: "Заметная заторможенность или, наоборот, двигательное беспокойство",
                answers :[
                    { text: "0 - совсем не было", score: 0},
                    { text: "1 - несколько дней", score: 1},
                    { text: "2 - более половины дней", score: 2},
                    { text: "3 - почти каждый день", score: 3}
                ]
            },
            { // 9
                question: "Мысли о том, что лучше бы не жить, или мысли о самоповреждении",
                answers :[
                    { text: "0 - совсем не было", score: 0},
                    { text: "1 - несколько дней", score: 1},
                    { text: "2 - более половины дней", score: 2},
                    { text: "3 - почти каждый день", score: 3}
                ]
            },
            { // 10
                question: "Ощущение, что все дается с трудом, даже повседневные дела",
                answers :[
                    { text: "0 - совсем не было", score: 0},
                    { text: "1 - несколько дней", score: 1},
                    { text: "2 - более половины дней", score: 2},
                    { text: "3 - почти каждый день", score: 3}
                ]
            },
            { // 11
                question: "Изоляция - избегание общения даже с близкими",
                answers :[
                    { text: "0 - совсем не было", score: 0},
                    { text: "1 - несколько дней", score: 1},
                    { text: "2 - более половины дней", score: 2},
                    { text: "3 - почти каждый день", score: 3}
                ]
            },
            { // 12
                question: "Чувство тревоги, беспокойства или постоянного напряжения",
                answers :[
                    { text: "0 - совсем не было", score: 0},
                    { text: "1 - несколько дней", score: 1},
                    { text: "2 - более половины дней", score: 2},
                    { text: "3 - почти каждый день", score: 3}
                ]
            },
            { // 13
                question: "Сложности с принятием решений, даже в мелочах",
                answers :[
                    { text: "0 - совсем не было", score: 0},
                    { text: "1 - несколько дней", score: 1},
                    { text: "2 - более половины дней", score: 2},
                    { text: "3 - почти каждый день", score: 3}
                ]
            },
            { // 14
                question: "Ощущение, что все лишено смысла",
                answers :[
                    { text: "0 - совсем не было", score: 0},
                    { text: "1 - несколько дней", score: 1},
                    { text: "2 - более половины дней", score: 2},
                    { text: "3 - почти каждый день", score: 3}
                ]
            },
            { // 15
                question: "Эмоциональное онемение - неспособность чувствовать ни радость, ни грусть",
                answers :[
                    { text: "0 - совсем не было", score: 0},
                    { text: "1 - несколько дней", score: 1},
                    { text: "2 - более половины дней", score: 2},
                    { text: "3 - почти каждый день", score: 3}
                ]
            },
        ]
    },
    ders: {
        title: "Тест DERS - регуляция эмоций",
        description: `Этот тест поможет тебе оценить трудности с регуляцией эмоций. <br> 
Выбери, насколько точно каждое утверждение описывает твое поведение и чувства в последние недели. <br> 
Отвечай честно, чтобы лучше понять себя самого.`,
        questions: [
            { // 1 
                question: "Мне трудно понять, что я чувствую",
                answers :[
                    { text: "1 - совсем не про меня", dersTotal: 1},
                    { text: "2 - немного про меня", dersTotal: 2},
                    { text: "3 - частично про меня", dersTotal: 3},
                    { text: "4 - полностью про меня", dersTotal: 4}
                ]
        
            },
            { // 2
                question: "Если я расстроен, мне тяжело сконцентрироваться",
                answers :[
                    { text: "1 - совсем не про меня", dersTotal: 1},
                    { text: "2 - немного про меня", dersTotal: 2},
                    { text: "3 - частично про меня", dersTotal: 3},
                    { text: "4 - полностью про меня", dersTotal: 4}
                ]
            },
            { // 3
                question: "Я избегаю своих чувств",
                answers :[
                    { text: "1 - совсем не про меня", dersTotal: 1},
                    { text: "2 - немного про меня", dersTotal: 2},
                    { text: "3 - частично про меня", dersTotal: 3},
                    { text: "4 - полностью про меня", dersTotal: 4}
                ]
            },
            { // 4
                question: "В эмоциях я часто поступаю импульсивно",
                answers :[
                    { text: "1 - совсем не про меня", dersTotal: 1},
                    { text: "2 - немного про меня", dersTotal: 2},
                    { text: "3 - частично про меня", dersTotal: 3},
                    { text: "4 - полностью про меня", dersTotal: 4}
                ]
            },
            {// 5
                question: "Мне тяжело сохранять спокойствие",
                answers :[
                    { text: "1 - совсем не про меня", dersTotal: 1},
                    { text: "2 - немного про меня", dersTotal: 2},
                    { text: "3 - частично про меня", dersTotal: 3},
                    { text: "4 - полностью про меня", dersTotal: 4}
                ]
            },
            { // 6
                question: "Я чувствую, что не контролирую свои эмоции",
                answers :[
                    { text: "1 - совсем не про меня", dersTotal: 1},
                    { text: "2 - немного про меня", dersTotal: 2},
                    { text: "3 - частично про меня", dersTotal: 3},
                    { text: "4 - полностью про меня", dersTotal: 4}
                ]
            },
            { // 7 
                question: "Когда я переживаю, не знаю, как себя поддержать",
                answers :[
                    { text: "1 - совсем не про меня", dersTotal: 1},
                    { text: "2 - немного про меня", dersTotal: 2},
                    { text: "3 - частично про меня", dersTotal: 3},
                    { text: "4 - полностью про меня", dersTotal: 4}
                ]
            },
            { // 8
                question: "Мне стыдно за то, что я чувствую",
                answers :[
                    { text: "1 - совсем не про меня", dersTotal: 1},
                    { text: "2 - немного про меня", dersTotal: 2},
                    { text: "3 - частично про меня", dersTotal: 3},
                    { text: "4 - полностью про меня", dersTotal: 4}
                ]
            },
            { // 9 
                question: "Я теряю способность думать ясно, когда эмоции сильные",
                answers :[
                    { text: "1 - совсем не про меня", dersTotal: 1},
                    { text: "2 - немного про меня", dersTotal: 2},
                    { text: "3 - частично про меня", dersTotal: 3},
                    { text: "4 - полностью про меня", dersTotal: 4}
                ]
            },
            { // 10 
                question: "Я срываюсь из-за пустяков",
                answers :[
                    { text: "1 - совсем не про меня", dersTotal: 1},
                    { text: "2 - немного про меня", dersTotal: 2},
                    { text: "3 - частично про меня", dersTotal: 3},
                    { text: "4 - полностью про меня", dersTotal: 4}
                ]
            },
            { // 11 
                question: "Мне тяжело объяснить другим, что я чувствую",
                answers :[
                    { text: "1 - совсем не про меня", dersTotal: 1},
                    { text: "2 - немного про меня", dersTotal: 2},
                    { text: "3 - частично про меня", dersTotal: 3},
                    { text: "4 - полностью про меня", dersTotal: 4}
                ]
            },
            { // 12
                question: "Я не могу сделать повседневные вещи, когда переполнена эмоциями",
                answers :[
                    { text: "1 - совсем не про меня", dersTotal: 1},
                    { text: "2 - немного про меня", dersTotal: 2},
                    { text: "3 - частично про меня", dersTotal: 3},
                    { text: "4 - полностью про меня", dersTotal: 4}
                ]
            },
            { // 13 
                question: "Я злюсь на себя за свои эмоции",
                answers :[
                    { text: "1 - совсем не про меня", dersTotal: 1},
                    { text: "2 - немного про меня", dersTotal: 2},
                    { text: "3 - частично про меня", dersTotal: 3},
                    { text: "4 - полностью про меня", dersTotal: 4}
                ]
            },
            { // 14
                question: "У меня нет действенных способов справляться с трудными чувствами",
                answers :[
                    { text: "1 - совсем не про меня", dersTotal: 1},
                    { text: "2 - немного про меня", dersTotal: 2},
                    { text: "3 - частично про меня", dersTotal: 3},
                    { text: "4 - полностью про меня", dersTotal: 4}
                ]
            },
            { // 15 
                question: "Я чувствую, что эмоции сильнее меня",
                answers :[
                    { text: "1 - совсем не про меня", dersTotal: 1},
                    { text: "2 - немного про меня", dersTotal: 2},
                    { text: "3 - частично про меня", dersTotal: 3},
                    { text: "4 - полностью про меня", dersTotal: 4}
                ]
            },
        ]
    }
};

//начальные условия. индекс текущего вопроса 0 - значит вопрос первый
let currentQuestionIndex = 0;

let results = {
    dominant: 0,
    emotion: 0,
    social: 0,
    control: 0
};

let score = 0;
let dersTotal = 0;

function smoothContentSwitch(newHtml) {
  const container = document.getElementById("quiz-container");

  // Запускаем плавное исчезновение
  container.classList.add('fade-out');

  setTimeout(() => {
    // Меняем содержимое
    container.innerHTML = newHtml;

    // Убираем fade-out и запускаем плавное появление
    container.classList.remove('fade-out');
    container.classList.add('fade-in');

    // Запускаем плавный поворот фона
    updateBackground();

    // Через полсекунды убираем класс fade-in, чтобы не мешал
    setTimeout(() => {
      container.classList.remove('fade-in');
    }, 500);
  }, 500);
}



function handleAnswer(answer) {
    for (const key in answer) {
        if (key !== 'text') {
            results[key] += answer[key];
        }
    }
}


// получаем их хтмл элемент с вопросом
const questionElement = document.getElementById("question");
// получаем все кнопки с вариантами ответов
const answerButtons = document.querySelectorAll(".answer-btn");



function showIntro() {
    const container = document.getElementById("quiz-container");

    container.classList.add("intro-mode", "intro-welcome");
    container.innerHTML = `
        <div class="intro-style">
            <h2>Привет.<br>Это психологические тесты.<br>Они помогут тебе узнать себя чуть лучше, чтобы проанализировать свое состояние и поведение, найти причины и мотивации.</h2>
            <div class="answer">
                <button class="answer-btn" id="start-btn">Выбрать тест</button>
            </div>
        </div>
    `;

    document.getElementById("start-btn").addEventListener("click", () => {
        showTestSelection();
    });
}


function showTestSelection() {
    const container = document.getElementById("quiz-container");
    container.classList.add("intro-mode");
    container.classList.remove("intro-welcome");

    let content = `<div class="intro-style test-selection">`;

    Object.entries(allTests).forEach(([key, test]) => {
        content += `
            <div class="test-box">
                <h3>${test.title}</h3>
                <p>${test.description}</p>
                <button class="answer-btn" onclick="startTest('${key}')">Начать тест</button>
            </div>
        `;
    });

    content += `</div>`;
    container.innerHTML = content;
}



// Восстановить структуру теста с вопросом и кнопками
function showQuizUI() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = `
        <h2 id="question"></h2>
        <div class="answers">
            <button class="answer-btn"></button>
            <button class="answer-btn"></button>
            <button class="answer-btn"></button>
            <button class="answer-btn"></button>
        </div>
    `;

    const buttons = container.querySelectorAll(".answer-btn");

    buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const answers = currentTest.questions[currentQuestionIndex].answers;
        if (!answers[index]) {
            // нет ответа — игнорируем
            return;
        }
        const answer = answers[index];

        // обновление счётчиков
        if (currentTest.key === "cattell") {
            for (const key in answer) {
                if (key !== 'text') {
                    results[key] += answer[key];
                }
            }
        } else if (currentTest.key === "phq") {
            score += answer.score || 0;
        } else if (currentTest.key === "ders") {
            dersTotal += answer.dersValue || 0;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < currentTest.questions.length) {
            loadQuestion();
        } else {
            finishQuiz();
        }
    });
});


    container.classList.remove("intro-mode");
}


function loadQuestion() {
    const current = currentTest.questions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer-btn");

    questionElement.textContent = current.question;

    answerButtons.forEach((btn, index) => {
        if (current.answers[index]) {
            btn.style.display = "block";
            btn.textContent = current.answers[index].text;
        } else {
            btn.style.display = "none";
        }
    });
}

function startTest(testKey) {
    currentTest = allTests[testKey];
    currentTest.key = testKey; // добавь, если в allTests нет поля key
    currentQuestionIndex = 0;

    if (testKey === "cattell") {
        results = { dominant: 0, emotion: 0, social: 0, control: 0 };
    } else if (testKey === "phq") {
        score = 0;
    } else if (testKey === "ders") {
        dersTotal = 0;
    }

    showQuizUI();
    loadQuestion();
}



function finishQuiz() {
    const container = document.getElementById("quiz-container");

    if (currentTest.key === "cattell") {
        // выводим результат для теста Кэттелла
        const resultSummary = `
            <h2>Результаты</h2>
            <p><strong>Доминирование : склонность к лидерству и напору</strong> <span class="result-number">${results.dominant} из 16</span></p>
            <p><strong>Эмоциональная устойчивость : способность сохранять спокойствие и не поддаваться стрессу</strong> <span class="result-number">${results.emotion} из 16</span></p>
            <p><strong>Социальная смелость : комфорт в социальных взаимодействиях</strong> <span class="result-number">${results.social} из 16</span></p>
            <p><strong>Контроль импульсов : способность к сдержанности и самоконтролю</strong> <span class="result-number">${results.control} из 12</span></p>
            <div class="answer">
                <button class="answer-btn" id="restartBtn">Пройти заново</button>
            </div>
        `;



        smoothContentSwitch(resultSummary);


        setTimeout(() => {
            document.getElementById("restartBtn").addEventListener("click", () => {
            currentQuestionIndex = 0;
            results = { dominant: 0, emotion: 0, social: 0, control: 0 };
            showIntro();
            });
        }, 600);

    } else if (currentTest.key === "phq") {
        let resultTitle = "";
        let resultDescription = "";

        if (score <= 4) {
            resultTitle = "Минимальная депрессия";
            resultDescription = "Ты либо не испытываешь симптомов, либо они слабо выражены и не мешают повседневной жизни.";
        } else if (score <= 9) {
            resultTitle = "Лёгкая депрессия";
            resultDescription = "Некоторые симптомы мешают, но ты всё ещё способна справляться. Это сигнал к самонаблюдению.";
        } else if (score <= 14) {
            resultTitle = "Умеренная депрессия";
            resultDescription = "Симптомы мешают повседневной жизни. Стоит обратиться за поддержкой и внимательнее отнестись к себе.";
        } else {
            resultTitle = "Тяжёлая депрессия";
            resultDescription = "Ты испытываешь серьёзные трудности. Очень важно не оставаться в этом состоянии в одиночестве — обратись за профессиональной помощью.";
        }

        smoothContentSwitch(`
            <h2>Результат : ${resultTitle}</h2>
            <p>${resultDescription}</p>
            <div class="answer">
                <button class="answer-btn" id="restartBtn">Пройти тест заново</button>
            </div>
        `);

        setTimeout(() => {
            document.getElementById("restartBtn").addEventListener("click", () => {
            currentQuestionIndex = 0;
            score = 0;
            showIntro();
            });
        }, 600);

    } else if (currentTest.key === "ders") {
        let resultTitle = "";
        let resultDescription = "";

        if (dersTotal <= 25) {
            resultTitle = "Хорошая регуляция эмоций";
            resultDescription = "Ты умеешь справляться с внутренними переживаниями, осознаёшь и регулируешь эмоции.";
        } else if (dersTotal <= 35) {
            resultTitle = "Лёгкие трудности";
            resultDescription = "Иногда тебе сложно понимать, выражать или принимать свои эмоции. Это не критично, но требует внимания.";
        } else if (dersTotal <= 45) {
            resultTitle = "Умеренные трудности";
            resultDescription = "Эмоции часто мешают тебе действовать, ты можешь избегать чувств или осуждать себя. Это требует внутренней работы.";
        } else {
            resultTitle = "Выраженные трудности";
            resultDescription = "Ты теряешь контроль над эмоциями, поступаешь импульсивно и чувствуешь бессилие. Это требует поддержки и возможно — профессиональной помощи.";
        }

        smoothContentSwitch( `
            <h2>Результат : ${resultTitle}</h2>
            <p>${resultDescription}</p>
            <div class="answer">
                <button class="answer-btn" id="restartBtn">Пройти тест заново</button>
            </div>
        `);

        setTimeout(() => {
            document.getElementById("restartBtn").addEventListener("click", () => {
            currentQuestionIndex = 0;
            dersTotal = 0;
            showIntro();
            });
        }, 600);

    }

}

let angle = 0;

function updateBackground() {
  angle = (angle + 10) % 360;
document.body.style.background = `linear-gradient(${angle}deg,rgb(41, 37, 49),rgb(0, 0, 0),rgb(75, 69, 69))`;
}

document.body.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'button') {
    updateBackground();
  }
});


showIntro();