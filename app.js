let currrentPage = window.location.pathname;
let pages = ['index', 'about', 'contact'];

for (let page of pages) {
    let name = page.charAt(0).toUpperCase() + page.substr(1);
    $('nav ul:last-child').append(
        `<li><a href="${page}.html" ${currrentPage == '/'+page+'.html' ? 'class="selected"' : ''}>${name == 'Index' ? 'Portfolio' : name}</a></li>`
    );
}

/*<li><a href="#" class="selected">Portfolio</a></li>*/
