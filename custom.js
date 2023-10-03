$(document).ready(function () {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get('category');
    let mockupLength = mockup.length;
    if (mockupLength !== 0) {
        makeDynamicMenu(mockup);
        $('.nav-link').removeClass('active');
        if(category == null){
            var mockupTemp = mockup.filter(data => data.flag == 1);
            $('.home').addClass('active');
        }
        else{
            var mockupTemp = mockup.filter(data => data.category == category);
            $('.'+category).addClass('active');
        }
        let mockupData = mockupTemp.map(function (mockupInfo) {
            return `
                <div class="col-xl-4 col-lg-6 col-md-6"> 
                    <div class="post-card">
                        <div class="post-card-image">
                            <a href="post-default.html">
                                <img src="${mockupInfo.imgUrl}" alt="">
                            </a>
                        </div>
                        <div class="post-card-content">
                            <div class="entry-cat">
                                <a href="blog-grid.html" class="categorie">${mockupInfo.category}</a>
                            </div>
                            <h5 class="entry-title">
                                <a href="post-default.html">${mockupInfo.title}</a>
                            </h5>
                            <ul class="entry-meta list-inline">
                                <li class="post-author-img"><a> <img src="assets/img/author/1.jpg" alt=""></a></li>
                                <li class="post-author"><a>Ragupathi A</a> </li> 
                            </ul>
                        </div>
                    </div> 
                </div>
            `;
        });
        $('#mockupList').html(mockupData.join(''));
    }

    function makeDynamicMenu(data){
        const uniqueMenu = [...new Set(data.map(item => item.category))];
        let menuList = '';
        for(let i=0; i<uniqueMenu.length; i++){
            let menu = uniqueMenu[i];
            menuList += `
            <li class="nav-item">
                <a class="nav-link ${menu}" href="index.html?category=${menu}"> ${menu} </a>
            </li>
            `; 
        } 
        $('.navbar-nav').append(menuList);
    }
});
