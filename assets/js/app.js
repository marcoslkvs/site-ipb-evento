var app = new Vue({
    el: "#app",
    data:{
        title: "Document",
        sobreEvento: "O Congresso 2017 - FMRL é um evento da Mocidade Presbiteriana, realizado anualmente, e tem como objetivo reunir jovens presbiterianos da Região dos Lagos para, juntos, deliberarem sobre o futuro da mocidade, eleger a nova diretoria da Federação de Mocidade Região dos Lagos, além, é claro, de desfrutar de momentos de Lazer, Comunhão e Edificação por meio de atividades recreativas, cultos e palestras, de forma que Deus seja glorificado e honrado em tudo quanto fizermos.",
        organizations: [
            {url: "assets/media/img/organizations/ipb.png"},
            {url: "assets/media/img/organizations/ump.png"}
        ],
        pictures: [
            {url: "assets/media/img/pictures/img-group.jpeg"},
            {url: "assets/media/img/pictures/img-group-1.jpeg"},
            {url: "assets/media/img/pictures/img-group-2.jpeg"}   
        ],
        lectures: [
            {name:"Lucas Gouvêa",office:"vice presidente da CNM"},
            {name:"Lucas Machado",office:"presidente do projeto UMP Minas"}
        ]
    },
    methods:
    {

    }
})