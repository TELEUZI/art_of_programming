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
    title: "Основы Python 3",
    showProgressBar: "bottom",
    firstPageIsStarted: true,
    startSurveyText: "Поехали!",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "В этом тесте у вас нет ограничений по времени. Рассуждайте в своё удовольствие."
                }
            ]
        },{
            questions: [
                {
                    type: "checkbox",
                    name: "langs",
                    title: "Какие из этих модулей являются встроенными",
                    isRequired: true,
                    choices: [
                        "math",
                        "cmath",
                        "numpy",
                        "PIL",
                    ],
                    correctAnswer: ["math", "cmath"]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "civilwar",
                    title: "Какая из функций вернет итерируемый объект?",
                    choices: [
                        "len()", "xrange()", "range()", "ord()"
                    ],
                    correctAnswer: "range()"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "civiwar",
                    title: "Что напечатает следующий код: 7//3+7//-3",
                    choices: [
                        "0", "1","-1", "В Python 3 оператор // отсутствует"
                    ],
                    correctAnswer: "-1"
                }
            ]
        }, {
            title: "What language(s) are you currently using?",
            questions: [
                {
                    type: "checkbox",
                    name: "langrtyujs",
                    title: "Please select from the list",
                    isRequired: true,
                    choices: [
                        "tel = {'qwe', 'asd', 'zxc'}",
                        "tel = {'qwe' : 1, 'asd' : 2, 'zxc' : 3}",
                        "dict(['asd', 'qwe', 'zxc'])",
                        "dict([('asd' : 1), ('zxc' : 2), ('qwe' : 3)])",
                        "dict([('asd', 1), ('zxc', 2), ('qwe', 3)])",
                        "Ни один из вышеперечисленных"
                    ],
                    correctAnswer: ["tel = {'qwe' : 1, 'asd' : 2, 'zxc' : 3}", "dict([('asd', 1), ('zxc', 2), ('qwe', 3)])"]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "magnaкккcarta",
                    title: "Python 3, в отличие от Python 2, полностью поддерживает Unicode",
                    choicesOrder: "random",
                    choices: [
                        "Верно", "Не верно, обе версии полностью поддерживают Unicode", "Не верно, обе версии не поддерживают Unicode полностью"
                    ],
                    correctAnswer: "Верно"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacfarta",
                    title: "Что напечатает следующий код: print((1, 2, 3) < (1, 2, 4))",
                    choicesOrder: "random",
                    choices: [
                        "False", "True", "None", "возникнет ошибка"
                    ],
                    correctAnswer: "True"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarffta",
                    title: "Что напечатает следующий код: fruits={'apple','banana','apple'}; print(fruits)",
                    choicesOrder: "random",
                    choices: [
                        "{'apple', 'banana', 'apple'}", "{'apple', 'apple', 'banana'}", "{'apple', 'banana'}", "возникнет синтаксическая ошибка"
                    ],
                    correctAnswer: "{'apple', 'banana'}"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarf6fta",
                    title: "Что напечатает следующий код: text='hello'; print(text[4:100])",
                    choicesOrder: "random",
                    choices: [
                        "hello", "hell", "o", "возникнет ошибка"
                    ],
                    correctAnswer: "o"
                }
            ]
        }
    ],
    completedHtml: "<h4>Вы ответили правильно на <b>{correctedAnswers}</b> вопросов из <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey.locale = 'ru';

$("#surveyElement").Survey({model: survey});