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
    title: "Питон",
    showProgressBar: "bottom",
    showTimerPanel: "bottom",
    firstPageIsStarted: true,
    startSurveyText: "гоу",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "Це тест. Проблемы какие-то с этим?"
                }
            ]
        },{
            title: "What language(s) are you currently using?",
            questions: [
                {
                    type: "checkbox",
                    name: "langs",
                    title: "Please select from the list",
                    isRequired: true,
                    choices: [
                        "Matlab",
                        "Arduino",
                        "Makefile",
                        "Groovy",
                        "Puppet",
                        "Rust",
                        "PowerShell"
                    ],
                    correctAnswer: ["Matlab", "PowerShell"]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "civilwar",
                    title: "When was the Civil War?",
                    choices: [
                        "1750-1800", "1800-1850", "1850-1900", "1900-1950", "after 1950"
                    ],
                    correctAnswer: "1850-1900"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "civiwar",
                    title: "When was th Civil War?",
                    choices: [
                        "1750-1800", "1800-1какать50", "1850-1900", "1900-1950", "after 1950"
                    ],
                    correctAnswer: "1850-1900"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "libertyordeath",
                    title: "Who said 'Give me liberty or give me death?'",
                    choicesOrder: "random",
                    choices: [
                        "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
                    ],
                    correctAnswer: "Patrick Henry"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarta",
                    title: "What is the Magna Carta?",
                    choicesOrder: "random",
                    choices: [
                        "The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"
                    ],
                    correctAnswer: "The foundation of the British parliamentary system"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey.locale = 'ru';

$("#surveyElement").Survey({model: survey});