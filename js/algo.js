var mycustomSurveyStrings = {
    pagePrevText: "My Page Prev",
    pageNextText: "My Page Next",
    completeText: "OK - Press to Complete"
};
Survey
    .surveyLocalization
    .locales["my"] = mycustomSurveyStrings;
Survey
    .StylesManager
    .applyTheme("modern");


var json = {
    title: "Тест на знание алгоритмов и структур данных",
    maxTimeToFinish: 180,
    showProgressBar: "bottom",
    showTimerPanel: "bottom",
    firstPageIsStarted: true,
    startSurveyText: "Поехали!",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "У вас будет 3 минуты на выполнение теста. Расходуйте его с умом!"
                }
            ]
        },{
            questions: [
                {
                    type: "checkbox",
                    name: "langs",
                    title: "Для решения каких из этих задач может использоваться нахождение знака векторного произведения?",
                    isRequired: true,
                    choices: [
                        "Определения пересекаются ли два отрезка",
                        "Вычисление угла между векторами",
                        "Построение выпуклой оболочки",
                        "Проверка на колинеарность векторов",
                    ],
                    correctAnswer: ["Определения пересекаются ли два отрезка", "Проверка на колинеарность векторов", "Построение выпуклой оболочки"]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "civilwar",
                    title: "Для чего предназначен циклический алгоритм?",
                    choices: [
                        "для того, чтобы избежать дублирования кода", "для постоянного выполнения идентичных операций", "для повторения идентичных операций определённое количество раз"
                    ],
                    correctAnswer: "для повторения идентичных операций определённое количество раз"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "civiwar",
                    title: "Возможно ли перемножить две матрицы быстрее чем за O(n<sup>3</sup>)?",
                    choices: [
                        "Возможно", "Невозможно"
                    ],
                    correctAnswer: "Возможно"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "magnaкккcarta",
                    title: "Гиперграф это?",
                    choicesOrder: "random",
                    choices: [
                        "обобщённый вид графа, в котором вершины могут быть инцидентными, не соединяясь при этом ребром", "обобщённый вид графа, в котором каждым ребром могут соединяться не только две вершины, но и любые подмножества вершин", "обобщённый вид графа, который содержит одновременно ориентированные и неориентированные ребра", "такого понятия не существует"
                    ],
                    correctAnswer: "обобщённый вид графа, в котором каждым ребром могут соединяться не только две вершины, но и любые подмножества вершин"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacfarta",
                    title: "Какой алгоритм сортировки признается лучшим и наиболее эффективным?",
                    choicesOrder: "random",
                    choices: [
                        "Сортировка Чарльза Хоара", "Сортировка вставками", "Шейкерная сортировка", "Сортировка слиянием","Сортировка Шелла","Сортировка бинарным деревом"
                    ],
                    correctAnswer: "Сортировка Чарльза Хоара"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarffta",
                    title: "Как называется поиск переменной X в отсортированном списке значений L по следующему алгоритму: Переменная М хранит значение из середины списка. Сравниваем Х и М. Если Х = М завершить программу. Если Х<M, продолжить поиск только в левой части списка L. Если X>M, продолжить поиск только в правой части списка L.",
                    choicesOrder: "random",
                    choices: [
                        "Поиск в отсортированном списке", "Бинарный поиск", "Быстрый поиск", "Двунаправленный поиск"
                    ],
                    correctAnswer: "Бинарный поиск"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarf6fta",
                    title: "Существуют ли, на данный момент, алгоритмы проверки числа на простоту с полиномиальной сложностью?",
                    choicesOrder: "random",
                    choices: [
                        "Да", "Нет"
                    ],
                    correctAnswer: "Да"
                }
            ]
        }
    ],
    completedHtml: "<h4>Вы ответили правильно на <b>{correctedAnswers}</b> вопросов из <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey.locale = 'ru';

$("#surveyElement").Survey({model: survey});