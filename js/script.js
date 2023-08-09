let slider = $(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 3000
  });
});


// burger
$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});

// anim

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}


//   var audio = document.getElementById("myaudio");
//   audio.volume = 0.2;



let tasks = [];


const PRIORITY = [
  { id: 1, name: "Low" },
];

// display elemets from TASKS inner HTML
function setElementOnDOM() {
  const root = document.getElementById("s");
  root.innerHTML = ` <div class="search__result_text" data-id="0">smart galaxy watch 3</div> `;
  tasks.forEach((task) => {
      const div = document.createElement("div");
      div.classList.add("search__result_text");
      // add id to div
      div.setAttribute("data-id", task.id);
      div.innerHTML = 
      task.title
    ;
      root.prepend(div);
  });
}

function setPriorityOptions(id) {
  // insert into the DOM by id
  root = document.getElementById(`${id}`);
  PRIORITY.forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority.id;
    option.textContent = priority.name;
  });
}

setPriorityOptions("priority");
setPriorityOptions("filter_priority");

$(document).keypress(function (e) {
	if (e.which == 13) {
  // get data from input by id
  const title = document.getElementById("tasks").value;

  // create template for task
  if(title.length == 0){
	
	   }else{

  const task = {
    id: tasks.length + 1,
    title: title,
  };
  // push task to TASKS
  tasks.push(task);
  //clear input
  document.getElementById("tasks").value = "";
 
  // delete elements for id
  setElementOnDOM();
  if(task.id == 11){
	let cle = tasks.shift();
	console.log(cle)
}
	   
}
}
});


const btnUp = {
	el: document.querySelector('.btn-up'),
	show() {
	  // удалим у кнопки класс btn-up_hide
	  this.el.classList.remove('btn-up_hide');
	},
	hide() {
	  // добавим к кнопке класс btn-up_hide
	  this.el.classList.add('btn-up_hide');
	},
	addEventListener() {
	  // при прокрутке содержимого страницы
	  window.addEventListener('scroll', () => {
		// определяем величину прокрутки
		const scrollY = window.scrollY || document.documentElement.scrollTop;
		// если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
		scrollY > 400 ? this.show() : this.hide();
	  });
	  // при нажатии на кнопку .btn-up
	  document.querySelector('.btn-up').onclick = () => {
		// переместим в начало страницы
		window.scrollTo({
		  top: 0,
		  left: 0,
		  behavior: 'smooth'
		});
	  }
	}
  }
  
  btnUp.addEventListener();
  



// "use strict"

//   const lazyImages = document.querySelectorAll('img[data-src]');
//   const windowHeight = document.documentElement.clientHeight;
  
//   let lazyImagesPositions = [];
//   if(lazyImages.length > 0) {
// 	lazyImages.forEach(img => {
// 		if(img.dataset.src){
// 			lazyImagesPositions.push(img.getBoundingClientRect().top + pageYoffset);
//             lazyScrollCheck();
// 		}
// 	});
//   }

//   window.addEventListener("scroll", lazyScroll);

//   function lazyScroll() {
// 	if(document.querySelectorAll('img[data-img]').length > 0){
// 		lazyScrollCheck();
// 	}
//   }



//   function lazyScrollCheck(){
// 	let imgIndex = lazyImagesPositions.findIndex(
// 		item => pageYoffset > item - windowHeight
// 	);
// 	if(imgIndex >= 0) {
// 		if (lazyImages[imgIndex].dataset.src){
// 			lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
// 			lazyImages[imgIndex].removeAttrribute('data-src');
// 		}
// 		delete lazyImagesPositions[imgIndex];
// 	}
//   }