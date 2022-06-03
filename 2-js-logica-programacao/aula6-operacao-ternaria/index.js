// (condição) ? 'valor para verdadeiro' : 'valor para falso'

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);

// if (pontuacaoUsuario >= 1000) {
//     console.log('usuario vip');
// } else {
//     console.log('usuario normal');
// }