const alunos = [
    {nameAluno: "Marcos ", ra: " 321098230-8"},
    {nameAluno: "Marcos ", ra: " 321098230-8"},
    {nameAluno: "Marcos ", ra: " 321098230-8"}
]
const cursos = [
    {nameCurso: "Engenharia ", duracao: "4 anos"},
    {nameCurso: "Gastronomia ", duracao: "4 anos"},
    {nameCurso: "Arquitetura ", duracao: "4 anos"}
]

function layout(title, content) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    </head>
    <body>
    <nav>
    <a href="/">Home</a>
    <a href="/alunos">alunos</a>
    <a href="/cursos">cursos</a>
    <a href="/contato">contatos</a>
    </nav>
    ${content}
    </body>
    </html>
    `
    
}

export function homePage() {
    return layout("Home", "<h1>Bem vinda a escola Senac!!</h1> <hr> <p>Onde voce faz o seu futuro</p>")
}

export function alunosPage() {
    const rows = alunos
    .map((p) => `<tr><td>${p.nameAluno}</td><td>${p.ra}</td></tr>`)

    return layout ("alunos", `
        <h1>Alunos matriculados</h1>
        <tables>
        <tr><th>Nome do aluno</th><h1></h1><th>RA do aluno</th></tr>
        <hr>
        ${rows}
        </tables>
        `)
}
export function cursosPage() {
    const row = cursos
    .map((p) => `<tr><td>${p.nameCurso}</td><td>${p.duracao}</td></tr>`)

    return layout ("Cursos", `
        <h1>Cursos disponiveis</h1>
        <tables>
        <tr><th>Curso</th><h1></h1><th>Duracao</th></tr>
        <hr>
        ${row}
        </tables>
        `)
}

export function contatoPage() {
    return layout("Entre em contato conosco", "<h1>Informações para entrar em contato</h1> <hr> <p>email:emaildaescola@gmail.com</p> <hr> <p>numero:11 98888-9999</p>")

}

export function notFound() {
    return layout("Pagina não encontrada", "<h1>Pagina nao encontrada</h1>")
}

