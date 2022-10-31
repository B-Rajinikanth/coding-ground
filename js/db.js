const c_language = [
    {
        id: 1,
        language: "",
        title: "Read string",
        topic: "IO Operations",
        statement: "You have to print the character, ch , in the first line. Then print s in next line. In the last line print the sentence, sen.",
        input_specifications: "First, take a character, ch  as input.<br>Then take the string,  s as input.<br>Lastly, take the sentence  sen as input.",
        output_specifications: `The first line prints the character, ch.<br>The second line prints the string, s.<br>The third line prints the sentence, sen.`,
        input1: "<br>B<br>BTech<br>BTech Smart Class!",
        output1: "<br>B<br>BTech<br>BTech Smart Class!",
        input2: "<br>C<br>Coding<br>C Coding Practice",
        output2: "<br>C<br>Coding<br>C Coding Practice",
        sample_code: "Write your code here...",
    },
    {
        id: 2,
        language: "",
        title: "Remove digit",
        topic: "Operators",
        statement: "You are given a integer number, you need to print the given number by removing last digit.",
        input_specifications: "Integer number",
        output_specifications: `Integer number after removing last digit`,
        input1: 123,
        output1: 12,
        input2: 1567,
        output2: 156,
        sample_code: "Write your code here...",
    },
    {
        id: 3,
        language: "",
        title: "Even Odd",
        topic: "Bitmanipulations",
        statement: "Write a program to test whether a given number is even or odd using bitmanipulations.",
        input_specifications: "Line 1: Integer N",
        output_specifications: "Even or Odd based on the given integer N",
        input1: 10,
        output1: "Even",
        input2: 55,
        output2: "Odd",
        sample_code: "Write your code here...",
    },
    {
        id: 4,
        language: "",
        title: "Power of 2",
        topic: "Bitmanipulations",
        statement: "Write a program to test whether a given number is power of 2 using bitmanipulations.",
        input_specifications: "Line 1: Integer N",
        output_specifications: "Yes or No based on the given integer N",
        input1: 10,
        output1: "No",
        input2: 64,
        output2: "Yes",
        sample_code: "Write your code here...",
    },
    {
        id: 5,
        language: "",
        title: "Number Parity",
        topic: "Bitmanipulations",
        statement: "You are given an integer number find the parity of the same.",
        input_specifications: "Line 1: N (integer number)",
        output_specifications: "Even or Odd Parity of N",
        input1: 7,
        output1: "Odd Parity",
        input2: "10",
        output2: "Even Parity",
        sample_code: "Write your code here...",
    },
    {
        id:6,
        language: "",
        title: "Same or Opposite Sign",
        topic: "Bitmanipulations",
        statement: "You are given with two integers, test that both are of same sign or not using bitmanipulations.",
        input_specifications: "Line 1: Two integers (num1 num2)",
        output_specifications: "Same sign or Opposite sign based on given data",
        input1: "10 89",
        output1: "Same sign",
        input2: "-64 12",
        output2: "Opposite sign",
        sample_code: "Write your code here...",
    },

];
function setQuestion(id) {
    if(id == -1)
        id = 0;
    document.getElementById('challengeID').innerHTML = c_language[id].id;
    document.getElementById('title').innerHTML = c_language[id].title;
    document.getElementById('statement').innerHTML = c_language[id].statement;
    document.getElementById('input_specifications').innerHTML = c_language[id].input_specifications;
    document.getElementById('output_specifications').innerHTML = c_language[id].output_specifications;
    document.getElementById('input1').innerHTML = c_language[id].input1;
    document.getElementById('output1').innerHTML = c_language[id].output1;
    document.getElementById('input2').innerHTML = c_language[id].input2;
    document.getElementById('output2').innerHTML = c_language[id].output2;
    document.getElementById('sample_code').innerHTML = c_language[id].sample_code;
}

document.getElementById('info').innerHTML = c_language[1].statement;

const info = document.querySelector('#info');

let details = c_language.map(function(item) {
    let problem_statement = '';
    if(item.statement.length > 100) {
        problem_statement = problem_statement + item.statement.substring(0, 100) + '...';
    } else {
        problem_statement = item.statement;
    }
    return (
        '<div class="alert alert-success question-box"><h3><span class="badge bg-success text-light">'+ item.id +'</span> ' + item.title + '</h3> <p>'+ problem_statement +'</p> <a href="./index.html?id='+ item.id +'"class="btn btn-primary btn-sm">Solve</a> </div>'
    );
});
info.innerHTML = details.join('\n');