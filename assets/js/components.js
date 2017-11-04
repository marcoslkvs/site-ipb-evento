Vue.component('list-organizations',{
    template: 
        "<div class=\"col s12 m4 l4 xl4\"><img :src=\"organization.url\" class=\"responsive-img\" /></div>"
    ,
    props: ['organization']
});

Vue.component('list-pictures',{
    template: 
        "<div><img :src=\"picture.url\" class=\"responsive-img pleft5\" /></div>"
    ,
    props: ['picture']
});