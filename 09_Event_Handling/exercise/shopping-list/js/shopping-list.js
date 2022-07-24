let allItemsIncomplete = true;
const pageTitle = 'My Shopping List';
const groceries = [
  { id: 1, name: 'Oatmeal', completed: false },
  { id: 2, name: 'Milk', completed: false },
  { id: 3, name: 'Banana', completed: false },
  { id: 4, name: 'Strawberries', completed: false },
  { id: 5, name: 'Lunch Meat', completed: false },
  { id: 6, name: 'Bread', completed: false },
  { id: 7, name: 'Grapes', completed: false },
  { id: 8, name: 'Steak', completed: false },
  { id: 9, name: 'Salad', completed: false },
  { id: 10, name: 'Tea', completed: false }
];

/**
 * This function will get a reference to the title and set its text to the value
 * of the pageTitle variable that was set above.
 */
function setPageTitle() {
  const title = document.getElementById('title');
  title.innerText = pageTitle;
}

/**
 * This function will loop over the array of groceries that was set above and add them to the DOM.
 */
function displayGroceries() {
  const ul = document.querySelector('ul');
  groceries.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item.name;
    const checkCircle = document.createElement('i');
    checkCircle.setAttribute('class', 'far fa-check-circle');
    li.appendChild(checkCircle);
    ul.appendChild(li);
  });
}

function toggleAll(){
  let arrayOfList=document.querySelectorAll('li');
  if(allItemsIncomplete){
    //SWITCH incomplete to complete

    arrayOfList.forEach((listItem)=> {
        let icon = listItem.querySelector('i');
        if(!listItem.classList.contains('completed')){
          listItem.classList.add('completed');
          icon.classList.add('completed');
        }
    });

    allItemsIncomplete=false;
    document.getElementById("toggleAll").innerText="Mark All Incomplete";
  }
  else{
    arrayOfList.forEach((listItem)=> {
        let icon = listItem.querySelector('i');
        if(listItem.classList.contains('completed')){
          listItem.classList.remove('completed');
          icon.classList.remove('completed');
        }
    });
    allItemsIncomplete=true;
    document.getElementById("toggleAll").innerText="Mark All Complete";

  }
}

//EVENT LISTENER
document.addEventListener("DOMContentLoaded", () => {
  // Register all of your event listeners here

  setPageTitle();
  displayGroceries();

  //TOGGLE ALL
  document.getElementById("toggleAll").addEventListener('click', ()=>{
    toggleAll();
  });

//SINGLE AND DOUBLE CLICK ON EACH LIST ITEM
  let arrayOfList=document.querySelectorAll('li');
  arrayOfList.forEach((listItem)=> {

    let icon = listItem.querySelector('i');

    listItem.addEventListener('click', () =>{
      if(!listItem.classList.contains('completed')){
        listItem.classList.add('completed');
        icon.classList.add('completed');
      }

    } );

    listItem.addEventListener('dblclick',()=>{
      if(listItem.classList.contains('completed')){
        listItem.classList.remove('completed');
        icon.classList.remove('completed');
      }
    });


  });

});