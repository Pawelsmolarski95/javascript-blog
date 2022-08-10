'use strict';



const articleSelector = '.post',
      titleSelector = '.post-title',
      titleListSelector = '.titles';




  
const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    
    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
    }
    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');
    

    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');
  
    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);

    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
};



function generateTitleLinks() {
    /* remove contents of titleList */
    const titleList = document.querySelector(titleListSelector);
    // console.log(titleSelector);
    titleList.innerHTML = ''

    // console.log(titleList);
    // console.log(articleSelector);
    // /* for each article */
    const articles = document.querySelectorAll(articleSelector);
    // console.log(articles);


    // let html = '' ;

    for( let article of articles ) {
    //   /* get the article id */
      const articleId = article.getAttribute('id')
        console.log(articleId);
    //   /* find the title element */
    //   /* get the title from the title element */
      const articleTitle = article.querySelector(titleSelector).innerHTML;
        console.log(articleTitle);
    //   /* create HTML of the link */
      
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      titleList.insertAdjacentHTML('afterbegin', linkHTML);
      
     
    //   /* insert link into html variable */
      // html = html + linkHTML;
      // console.log(html);
    }
    // titleList.innerHTML = html;


    console.log(titleList);



  }
 


generateTitleLinks()

const links = document.querySelectorAll('.titles a');
console.log(links);
for(let link of links){
  link.addEventListener('click', titleClickHandler);

}

 