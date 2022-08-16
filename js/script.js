'use strict';



const articleSelector = '.post',
      titleSelector = '.post-title',
      titleListSelector = '.titles',
      listTags = '.post-tags .list';




  
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
      console.log(clickedElement);

      /* [DONE] remove class 'active' from all articles */

      const activeArticles = document.querySelectorAll('.posts .active');
    
      for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
      }

      /* [DONE] get 'href' attribute from the clicked link */

      const articleSelector = clickedElement.getAttribute('href');

      /* [DONE] find the correct article using the selector (value of 'href' attribute) */

      const targetArticle = document.querySelector(articleSelector);

      /* add class 'active' to the correct article */
      targetArticle.classList.add('active');
};



function generateTitleLinks(customSelector = '') {
    /* remove contents of titleList */

    const titleList = document.querySelector(titleListSelector);
    // console.log(titleSelector);
    titleList.innerHTML = ''

    // console.log(titleList);
    // console.log(articleSelector);

    // /* for each article */
    const articles = document.querySelectorAll(articleSelector + customSelector);
    // console.log(articles);


    for( let article of articles ) {
    //   /* get the article id */
      const articleId = article.getAttribute('id')
        console.log(articleId);
    //   /* find the title element */
    //   /* get the title from the title element */
      const articleTitle = article.querySelector(titleSelector).innerHTML;
        // console.log(articleTitle);
    
     //   /* create HTML of the link */ 
      const linkHTML = '<li><a href="#' + articleId + '">' + articleTitle + '</a></li>';
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

 const generateTags = () => {
    const articles = document.querySelectorAll(articleSelector) 
    console.log(articles);
   
    for (let article of articles) {
      const tagsList = article.querySelector(listTags)
      
      console.log(tagsList)
      
      const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);
        
      const  articleTagsArray = articleTags.split(' ')
      console.log(articleTagsArray);

      for (let tags of articleTagsArray) {
         console.log(tags);
         const linkHTML = ' <li><a href="#' + tags + '"><span>' + tags + '</span></a></li> ';
        console.log(tagsList);
        console.log(linkHTML);
         tagsList.insertAdjacentHTML('afterbegin', linkHTML);
      }
      
    }
 } 

 generateTags();

 const tagClickHandler = function(event){
	event.preventDefault();
	const clickedElement = this;
  
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href')
	console.log(href);
  /* make a new constant "tag" and extract tag from the "href" constant */
	const tag = href.replace('#tag-', '')
	console.log(tag);
  /* find all tag links with class active */
const activeTags = document.querySelectorAll('a.active[href^="#tag-"]')
console.log(activeTags);
  /* START LOOP: for each active tag link */
	for (let activeTag of activeTags) {

	
    /* remove class active */
    activeTag.classList.remove('active')}
  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */
const tagLinks = document.querySelectorAll('a[href="${href}"')
  /* START LOOP: for each found tag link */
		for ( let tagLink of tagLinks) {
			tagLink.classList.add('active')
		}
    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
	const tagLinks = document.querySelectorAll('a[href^="#tag-"]')
  /* START LOOP: for each link */
	for ( let tagLink of tagLinks) {
		tagLinks.addEventListener('click',tagClickHandler)
	}
    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags()


 