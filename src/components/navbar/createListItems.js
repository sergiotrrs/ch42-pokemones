import { getHtmlPageName } from "./getHtmlPageName";

const createListItems = ( pages, currentHtml ) => {

    pages.forEach( page => {
        const htmlName = getHtmlPageName( page.url );
        if( htmlName === currentHtml ) page.active = true
    });    

    const listItemsArray = pages.map( (page)=> `
        <li
          class="nav-item"          
          style="visibility: ${page.visible? 'visible': 'hidden'}"
        > 
          <a 
            class="nav-link ${page.active? 'active': '' }" 
            href="${page.url}"
            > 
            ${page.icon} ${page.name} 
            </a>            
        </li>
    `);

    return listItemsArray.join("");
}

export { createListItems }; 