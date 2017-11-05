Vue.component('list-organizations',{
    template: 
        "<div class=\"col s8 offset-s2 m4 l4 xl4\"><img :src=\"organization.url\" class=\"responsive-img mtop30\" /></div>"
    ,
    props: ['organization']
});

Vue.component('list-pictures',{
    template: 
        "<div><img :src=\"picture.url\" class=\"responsive-img pleft5\" /></div>"
    ,
    props: ['picture']
});

Vue.component('list-lectures',{
    template: 
    "<div class=\"col s8 offset-s2 m4 l4 xl4 ptop40\"><h4>{{lecture.name}}</h4><p>{{lecture.office}}</p></div>"
    ,
    props: ['lecture']
});