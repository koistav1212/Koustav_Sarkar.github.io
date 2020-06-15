//function expression to select elements
const select = (z) => document.querySelector(z);



//open the menu on click
select('.open').addEventListener('click', function() {
    select('.nav-list').classList.add('active');
});

//close the menu on click


select('.close').addEventListener('click', function() {
    select('.nav-list').classList.remove('active');
});
