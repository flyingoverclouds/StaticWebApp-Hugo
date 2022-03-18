module.exports = async function (context, req) {
    context.log('Ma misérable function qui fait la cosette vient de s\'executer');

    context.res.json({
        text:"Lorsque Pierre arriva sur la place de Grève, il était transi. Aussi se hâta-t-il de s\'approcher du feu de joie qui brûlait magnifiquement au milieu de la place. Mais une foule considérable faisait cercle à l\'entour."
    });
}