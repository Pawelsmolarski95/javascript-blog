'use strict';



const articleSelector = '.post',
      titleSelector = '.post-title',
      titleListSelector = '.titles',
      listTags = '.post-tags .list',
      listAuthor = ' .post-author',
      tagsListSelector = '.tags.list',
      cloudClassCount = '5',
      cloudClassPrefix = 'tag-size-';





const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
      /* [DONE] remove class 'active' from all article links  */
      const activeLinks = document.querySelectorAll('.titles a.active');
      for(let activeLink of activeLinks) {
        activeLink.classList.remove('active');
      }
      /* [DONE] add class 'active' to the clicked link */
      clickedElement.classList.add('active');
      // console.log(clickedElement);
      /* [DONE] remove class 'active' from all articles */
      const activeArticles = document.querySelectorAll('.posts .active');
      for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
      }
      /* [DONE] get 'href' attribute from the clicked link */
      const articleSelector = clickedElement.getAttribute('href');
      /* [DONE] find the correct article using the selector (value of 'href' attribute) */
      const targetArticle = document.querySelector(articleSelector);
      /* [DONE] add class 'active' to the correct article */
      targetArticle.classList.add('active');
};

//------Generate title list

function generateTitleLinks(customSelector = '') {
  /* remove contents of titleList */
  const titleList = document.querySelector(titleListSelector);
  // console.log(titleSelector);
  titleList.innerHTML = ''
  // console.log(titleList);
  // console.log(articleSelector);
  /* find all the articles and save them to variable: articles */
  const articles = document.querySelectorAll(articleSelector + customSelector);
  // console.log(articles);

  for( let article of articles ) {
    /* get the article id */
    const articleId = article.getAttribute('id');
    // console.log(articleId);
    /* find the title element */
     /* get the title from the title element */
    const articleTitle = article.querySelector(titleSelector).innerHTML;
    // console.log(articleTitle);
    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '">' + articleTitle + '</a></li>';
    titleList.insertAdjacentHTML('afterbegin', linkHTML);
    }
    // console.log(linkHTML);
    /* insert link into html variable */
    // html = html + linkHTML;
    // console.log(html);

    // titleList.innerHTML = html;

    // console.log(titleList);
    const links = document.querySelectorAll('.titles a');
    // console.log(links);
    for(let link of links){
      link.addEventListener('click', titleClickHandler);

  }
}
generateTitleLinks()

//------Generate tags
function calculateTagsParams(tags) {
  const params = {max: 0, min: 999999};
  for(let tag in tags){
    if(tags[tag] > params.max){
      params.max = tags[tag];
    }
    if(tags[tag] < params.min){
      params.min = tags[tag]
    }
  }
  return (params);
}
function calculateTagClass(count, params){

}


function generateTags() {
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};
  /* DONE find all articles */
  const articles = document.querySelectorAll(articleSelector);
  // console.log(articles);
  /* DONE START LOOP: for every article: */
  for (let article of articles){
    /* DONE find tags wrapper */
    const tagsList = article.querySelector(listTags);
    // console.log(tagsList)
    /* DONE make html variable with empty string */
    let html = '';
    /* DONE get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    // console.log(articleTags);
    /* DONE split tags into array */
    const  articleTagsArray = articleTags.split(' ');
    // console.log(articleTagsArray);
    /* DONE START LOOP: for each tag */
    for (let tag of articleTagsArray){
      console.log(tag);
      /* DONE generate HTML of the link */

      const linkHTML = ' <li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      html = html + ' ' + linkHTML;
      // console.log(linkHTML);
      /* DONE add generated code to html variable */
        // tagsList.insertAdjacentHTML('afterbegin', linkHTML);
      /* [NEW] check if this link is NOT already in allTags */
      if(!allTags[tag]) {
        /* [NEW] add generated code to allTags array */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }

    /* END LOOP: for each tag */
    }
  /* DONE insert HTML of all the links into the tags wrapper */
  tagsList.innerHTML = html;

  /* END LOOP: for every article: */
  }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(tagsListSelector);
  const tagsParams = calculateTagsParams(allTags);
  console.log('tagsParams:', tagsParams)
  /* [NEW] create variable for all links HTML code */
  let allTagsHTML = '';

  /* [NEW] START LOOP: for each tag in allTags: */
  for(let tag in allTags){
    /* [NEW] generate code of a link and add it to allTagsHTML */
    const tagLinkHTML = '<li>' + calculateTagClass(allTags[tag], tagsParam) + '</li>';
    console.log('tagLinkHTML:', tagLinkHTML);
    allTagsHTML += tagLinkHTML;
  }
  /* [NEW] END LOOP: for each tag in allTags: */

  /*[NEW] add HTML from allTagsHTML to tagList */
  tagList.innerHTML = allTagsHTML;

}


generateTags();

// --------Tag click handler

function tagClickHandler(event){
  /* DONE prevent default action for this event */
  event.preventDefault();
  /* DONE make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* DONE make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log(href);
  /* DONE make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '')
  console.log(tag);
  /* DONE find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]')
  console.log(activeTags);
  /* DONE START LOOP: for each active tag link */
  for (let activeTag of activeTags) {
    /* DONE remove class active */
    activeTag.classList.remove('.active');
    /* DONE END LOOP: for each active tag link */
  }
  /* DONE find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
  console.log(tagLinks);
  /* START LOOP: for each found tag link */
  for (let tagLink of tagLinks){
    /* add class active */
    tagLink.classList.add('.active')
    console.log(tagLinks);
    /* DONE END LOOP: for each found tag link */
  }
  /* DONE execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}
function addClickListenersToTags(){
  /* find all links to tags */
  const allTagLinks = document.querySelectorAll('.tags a, .post-tags a');
  /* START LOOP: for each link */
  for (let tagLink of allTagLinks){
    /* add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click',tagClickHandler);
    /* END LOOP: for each link */
  }
}
addClickListenersToTags();

//----- Generate authors -----
const generateAuthors = function () {
  //find all articles - DONE
  const articles = document.querySelectorAll(articleSelector)
  console.log(articles);
  //start loop - for every article - DONE
  for (let article of articles) {
    //find author wrapper - DONE
    const authorList = article.querySelector(listAuthor)
    //get author from data-author attr - DONE
    const authorTags = article.getAttribute('data-author')
    console.log(authorTags);

    const linkHTML = '<a href="#author-' + authorTags + '">' + authorTags + '</a></li>';
    console.log(linkHTML);
    authorList.insertAdjacentHTML('afterbegin', linkHTML);


  }
}
generateAuthors();

//----Author tag handler
function authorClickHandler(event){
   /* DONE prevent default action for this event */
   event.preventDefault();
   /* DONE make new constant named "clickedElement" and give it the value of "this" */
   const clickedElement = this;
   /* DONE make a new constant "href" and read the attribute "href" of the clicked element */
   const href = clickedElement.getAttribute('href');
   const author = href.replace('#author-', '')
   console.log(author);
   /* DONE find all tag links with class active */
   const activeAuthorTags = document.querySelectorAll('a.active[href^="#author-"]')
   console.log(activeAuthorTags);
   /* DONE START LOOP: for each active author link */
   for (let activeAuthorTag of activeAuthorTags) {
     /* DONE remove class active */
     activeAuthorTag.classList.remove('.active');
     /* DONE END LOOP: for each active tag link */
   }
   /* DONE find all tag links with "href" attribute equal to the "href" constant */
   const allAuthorLinks = document.querySelectorAll('a[href="' + href + '"]');
   console.log(allAuthorLinks);
   //DONE START Loop
    for (let allAuthorLink of allAuthorLinks){
      //add class active
      allAuthorLink.classList.add('.active')
    //END loop
    }

   /* DONE execute function  with authors selector as argument */
   generateTitleLinks('[data-author="' + author + '"]');
 }
 // --- Click Listener for authors
 function addClickListenersToAuthors(){
  /* find all links to tags */
  const allAuthorsLinks = document.querySelectorAll(' .post-author a, .authors a');
  /* START LOOP: for each link */
  for (let authorLink of allAuthorsLinks){
    /* add authorClickHandler as event listener for that link */
    authorLink.addEventListener('click',authorClickHandler);
    /* END LOOP: for each link */
  }
}

addClickListenersToAuthors()






