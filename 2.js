//Example of adding new locale into the library.
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
    title: "Software developer survey.",
    pages: [
        {
            title: "Шо юзаешь?",
            questions: [
                {
                    type: "checkbox",
                    name: "opSystem",
                    title: "OS",
                    hasOther: true,
                    isRequired: true,
                    choices: ["Wiкакуows", "Linux", "Macintosh OSX"]
                }
            ]
        }, {
            title: "What language(s) are you currently using?",
            questions: [
                {
                    type: "checkbox",
                    name: "langs",
                    title: "Please select from the list",
                    colCount: 4,
                    isRequired: true,
                    choices: [
                        "Javascript",
                        "Java",
                        "Python",
                        "CSS",
                        "PHP",
                        "Ruby",
                        "C++",
                        "C",
                        "Shell",
                        "C#",
                        "Objective-C",
                        "R",
                        "VimL",
                        "Go",
                        "Perl",
                        "CoffeeScript",
                        "TeX",
                        "Swift",
                        "Scala",
                        "Emacs Lisp",
                        "Haskell",
                        "Lua",
                        "Clojure",
                        "Matlab",
                        "Arduino",
                        "Makefile",
                        "Groovy",
                        "Puppet",
                        "Rust",
                        "PowerShell"
                    ]
                }
            ]
        }, {
            title: "Please enter your name and e-mail",
            questions: [
                {
                    type: "text",
                    name: "name",
                    title: "Name:"
                }, {
                    type: "text",
                    name: "email",
                    title: "Your e-mail"
                }
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey.locale = 'ru';

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});
