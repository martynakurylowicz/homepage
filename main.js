const firstName = "Martyn";
const age = 32;

console.log(
    `Cześć! To strona nauki WTF. Notatki przygotowała ${firstName}.`
    );

const task = document.querySelector('.task-js');

task.innerHTML = `Cześć! To strona nauki WTF. Notatki przygotowała ${firstName}.`

function hello(firstName, age) {
    console.log(
        `Cześć! To strona nauki WTF. Notatki przygotowała ${firstName} i ma ${age} lata.`
        );
}
hello(firstName, age);