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
    title: "Паттерны проектирования",
    maxTimeToFinish: 300,
    showProgressBar: "bottom",
    showTimerPanel: "bottom",
    firstPageIsStarted: true,
    startSurveyText: "Поехали!",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "У вас будет 5 минут, чтобы справиться с тестом. Грамотно распределите своё время."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "civilwar",
                    title: "Отметьте верные утверждения",
                    choices: [
                        "Абстрактная фабрика основана на композиции, ее задача - создание семейств взаимосвязанных объектов.", "Абстрактная фабрика основана на наследовании, ее задача - перемещение создания экземпляров в субклассы.", "Фабричный метод основан на композиции, его задача - создание семейств взаимосвязанных объектов.", "Фабричный метод основан на наследовании, его задача - перемещение создания экземпляров в субклассы."
                    ],
                    correctAnswer: ["Абстрактная фабрика основана на композиции, ее задача - создание семейств взаимосвязанных объектов.", "Фабричный метод основан на наследовании, его задача - перемещение создания экземпляров в субклассы."]
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "civiwar",
                    title: "Какие из перечисленных паттернов относятся к паттернам поведения (behavioral) в соответствии с GoF?",
                    choices: [
                        "Flyweight", "Proxy","Builder", "Memento"
                    ],
                    correctAnswer: "Memento"
                }
            ]
        }, {
            questions: [
                {
                    type: "checkbox",
                    name: "langrtyujs",
                    title: "Какие из перечисленных утверждений верны по отношению к паттерну проектирования Composite:",
                    isRequired: true,
                    choices: [
                        "Composite паттерн содержит в себе несколько моделей поведения объекта и предоставляет возможность переключаться между ними.",
                        "Паттерн Composite позволяет работать с композитными и простыми объектами одинаковым образом.",
                        "Composite паттерн упрощает работу с группой объектов не связанных типов.",
                        "Паттерн Composite организовывает объекты в древовидные структуры.",
                        "Ни один из вышеперечисленных"
                    ],
                    correctAnswer: ["Паттерн Composite организовывает объекты в древовидные структуры.", "Паттерн Composite позволяет работать с композитными и простыми объектами одинаковым образом."]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "magnaкккcarta",
                    title: "Паттерн проектирования Template Method позволяет уменьшить количество зависимостей от классов, специфичных для данного приложения.",
                    choicesOrder: "random",
                    choices: [
                        "Да", "Нет"
                    ],
                    correctAnswer: "Да"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacfarta",
                    title: "Какие из этих паттернов являются паттернами создания объектов?",
                    choicesOrder: "random",
                    choices: [
                        "Abstract Factory", "Chain of Responsibility", "Adapter", "Decorator"
                    ],
                    correctAnswer: "Abstract Factory"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarffta",
                    title: "Какой из перечисленных паттернов применяется в ситуации, когда нужно произвести некоторые действия над всеми объектами структуры в зависимости от фактического типа каждого объекта?",
                    choicesOrder: "random",
                    choices: [
                        "Visitor", "Strategy", "State", "Composite"
                    ],
                    correctAnswer: "Visitor"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarf6fta",
                    title: "Что из перечисленного верно о паттерне Memento:",
                    choicesOrder: "random",
                    choices: [
                        "Это порождающий паттерн проектирования", "Позволяет сохранить внутреннее состояние объекта", "Его использование приводит к нарушению инкапсуляции", "возникнет ошибка"
                    ],
                    correctAnswer: "Позволяет сохранить внутреннее состояние объекта"
                }
            ]
        }
    ],
    completedHtml: "<h4>Вы ответили правильно на <b>{correctedAnswers}</b> вопросов из <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey.locale = 'ru';

$("#surveyElement").Survey({model: survey});