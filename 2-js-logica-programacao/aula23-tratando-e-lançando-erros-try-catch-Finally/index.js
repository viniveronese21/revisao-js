// try{
// // executada quando não há erros
//     // console.log(a);
//     console.log('Abri um arquivo');
//     console.log('Manipulei um arquivo e gerou erro');
//     console.log('Fechei o arquivo');

//     try {
//         console.log(b);
//     }catch(e) {
//         console.log('Deu Erro');
//     } finally {
//         console.log('Tabém sou Finally');
//     }

// }catch(e){
// // executada quandp há erros
//     console.log('Trarando erro');
// } finally {
// // sempre sera executada 
//     console.log('FINALLY: Eu sempre sou executado');
// }

function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError ('Esperando uma instancia de Date');
    }

    if (!data){
        data = new Date();
    }
    
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    //tratar erro
}finally {
    console.log('tenha um bom dia');
}

