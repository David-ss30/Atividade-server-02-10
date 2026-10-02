import {homePage, cursosPage, alunosPage, contatoPage, notFound} from "./view.js"

export function route(req, res){
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(homePage());
        return;
    }
    if (req.method === "GET" && req.url === "/cursos") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(cursosPage());
        return;
    }
    if (req.method === "GET" && req.url === "/alunos") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(alunosPage());
        return;
    }
    if (req.method === "GET" && req.url === "/contato") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(contatoPage());
        return;
    }
    else{
    res.writeHead(404, {"Content-type" : "text/html"});
    res.end(notFound());
    return;
    }

}