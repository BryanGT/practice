import React, { useState } from 'react';

const data =  [
    {
        questionId: 1,
        questionName: 'What is you favorite color?',
        answers: [
            {
                answerName: 'Red',
                answerId: 11
            },
            {
                answerName: 'Blue',
                answerId: 12
            },
            {
                answerName: 'Pink',
                answerId: 13
            }
        ]
    },
    {
        questionId: 2,
        questionName: 'Are you a flat-earther?',
        answers: [
            {
                answerName: 'Yes',
                answerId: 21
            },
            {
                answerName: 'No',
                answerId: 22
            }
        ]
    }
];

const Form = () => {

    const [combinations, setcombination] = useState(0);
    const [combJson, setcombJson] = useState(0);

    const calculate = () => {
        const N = data.length;
        const M = [];
        for(let ans = 0; ans < data.length; ans++){
            M.push(data[ans].answers.length);
        }
        
        const question_3_answers = 1;
        const question_2_answers = 1;

        let total_combinations = 0;
        for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            const questions = [i, j];
            const answers = Array(N).fill(M);
            if (questions.includes(question_3_answers) && questions.includes(question_2_answers)) {
            answers[question_3_answers] = 3;
            answers[question_2_answers] = 2;
            const combination_answers = (3 * 2) + (3 * 1) + (2 * 1);
            total_combinations += combination_answers;
            }
        }
        }

        setcombination(total_combinations);
    }

    const generateCSV = () => {
        let total_combinations = 1;

        for (let i = 0; i < data.length; i++) {
        total_combinations *= data[i].answers.length;
        }

        let csv = '';
        let header = '';

        for (let i = 0; i < data.length; i++) {
        header += data[i].questionName + ',';
        }

        header = header.slice(0, -1);
        csv += header + '\n';

        for (let i = 0; i < total_combinations; i++) {
        let current_combination = '';
        let temp = i;

        for (let j = 0; j < data.length; j++) {
            let current_question_answers = data[j].answers;
            let current_answer_index = temp % current_question_answers.length;
            temp = Math.floor(temp / current_question_answers.length);
            current_combination += current_question_answers[current_answer_index].answerName + ',';
        }

        current_combination = current_combination.slice(0, -1);
        csv += current_combination + '\n';
        } 

        setcombJson(total_combinations);
        makeCsv(csv);
    }

    const makeCsv = (csvData) => {
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', 'combinations.csv');
        a.click();
    }

    return(
        <div className='form-csv'>
            <div className='response'>
                <h1 className='response_title'>Combinations taking individual and group are: {combinations}</h1>
                <button className='calculate' onClick={calculate}>Display Combinations</button>
            </div>
            <div className='response'>
                <h1 className='response_title'>Combinations in JSON data: {combJson}</h1>
                <button className='generate-csv' onClick={generateCSV}>
                    Generate CSV and combinations
                </button>
            </div>
        </div>
    )
}

export default Form;