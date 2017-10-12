//To prevent any unauthorized changes to the program
"use strict";
 
 //Delcaring the variables
let studentItems = $('.student-item');
let pagination ='<div class="pagination"><ul></ul></div>';
let studentList = pages(studentItems);
 

//Setting up an array to limit the list to 10 students at a time
function pages(list) {
                let oldList = list.slice();
                let pagesArray = [];
                while (oldList.length) {
                                pagesArray.push(oldList.splice(0,10));
                }
                return pagesArray;
}
 
// Making the function work to it shows the first 10 and then hide the others
function showPages(pageNumber, pageList) {
  $(".student-list li").hide();
  $.each(pageList, function(index, page){
      if (pageNumber === index) {
        $.each(page, function(i, listItem){
          $(listItem).fadeIn('fast');
        });
      }
  });
}
 
// appending the button unto the page
function appendButtons(pageList) {
                $('.page').append(pagination);
                let numPages = pageList.length;
                for (let i = 1; i <= numPages; i++) {
                                let buttons = '<li><a href="#">' + i + '</a></li>';
                                $('.pagination ul').append(buttons);
                }
                $('.pagination ul li a').first().addClass('active');
 
                //Add click listeners
                  $(".pagination ul li a").on("click", function(e) {
                    let pageSelection = parseInt($(this)[0].text) - 1;
                    showPages(pageSelection, pageList);
                    $(".pagination ul li a").removeClass();
                    $(this).addClass("active");
                    e.preventDefault();
                  });
}
 
               

 
// Dispaly the button and the students
appendButtons(studentList);
showPages(0, studentList);
 
