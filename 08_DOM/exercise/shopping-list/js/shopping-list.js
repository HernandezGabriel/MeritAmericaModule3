// add pageTitle

var pageTitle = 'My Shopping List';

// add groceries

var groceries = ['Bannanas', 'Milk','Eggs', 'Bacon', 'Sandwich Bread', 'Crossaint Bread', 'Coffee', 'Potato', 'Onion',' Ribeye Roast'];

/**
 * This function will get a reference to the title and set its text to the value
 * of the pageTitle variable that was set above.
 */
function setPageTitle() {

  let titleDOMelement = document.getElementById('title');
  titleDOMelement.innerText = pageTitle;

}

/**
 * This function will loop over the array of groceries that was set above and add them to the DOM.
 */
function displayGroceries() {

  let listDOMelement = document.getElementById('groceries');

  groceries.forEach((string) => {
    let newListItem= document.createElement('li');
    newListItem.innerText = string ;
    newListItem.classList.add('list-item');
    listDOMelement.insertAdjacentElement("beforeend", newListItem);
  });



}

/**
 * This function will be called when the button is clicked. You will need to get a reference
 * to every list item and add the class completed to each one
 */
function markCompleted() {

  let ulDOM = document.getElementById('groceries');
  let arrayOfDOMList = ulDOM.querySelectorAll('.list-item');

  arrayOfDOMList.forEach((element)=>{
    element.classList.add('completed');
  });


}

setPageTitle();

displayGroceries();

// Don't worry too much about what is going on here, we will cover this when we discuss events.
document.addEventListener('DOMContentLoaded', () => {
  // When the DOM Content has loaded attach a click listener to the button
  const button = document.querySelector('.btn');
  button.addEventListener('click', markCompleted);
});
