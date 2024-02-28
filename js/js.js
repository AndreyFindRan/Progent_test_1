window.addEventListener('load', function () {

	let itemBlock = document.querySelectorAll('.flex__item')
	 	popupBg = document.querySelector('.popup__bg')
	 	popup = document.querySelector('.popup')
	 	body = document.querySelector('body')

	function itemheight() {
		itemBlock.forEach(element => {
		element.style.height = getComputedStyle( element ).width
		});
	}

	//активность чекбокса
	function checkbox_color() {
		//активность
		let itemBlock = document.querySelectorAll('.flex__item')

		//чекбокс
		let checkedInput = document.querySelector('.checkbox_color')

		if(checkedInput.checked){
				itemBlock.forEach((element,index) => {
					if((Number(index) + Number(1)) % 4 == 0){
						element.style['background-color'] = '#696969';
						element.style['color'] = '#ffffff';
					}
				});
			}
			//не активность
			else{
				itemBlock.forEach((element,index) => {
					if((Number(index) + Number(1)) % 4 == 0){
						element.style['background-color'] = '';
						element.style['color'] = '';
					}
				});
			}
	}

	function popap_active(event) {

		//меняет текст модального окна
		let element ;

		if(!event.target.classList.contains('flex__item')){

			element = event.target.closest('.flex__item')

		}else{

			element = event.target

		}

		let span = createSpan(element,'modal')

		document.querySelector('.text-popup').innerHTML = `<div class="felx__item_text">${span}</div>`

		popupBg.classList.add('active')

	}

	function popap_not_active(event) {

		popupBg.classList.remove('active')

	}

	function createSpan(element,modal=null) {

		let span = "";

		for (var i = 0; i < element.children[0].children.length; i++) {

			if(element.children[0].children.length - 1 == i && modal == null){

				span += `<span>${Number(element.children[0].children[i].innerHTML) + Number(1)}</span>`;

			}else{

				span += `<span>${element.children[0].children[i].innerHTML}</span>`;

			}
		  }

		return span ;

	}
	

	function addElement() {

		let newDiv = document.createElement("div");

		let endItemBlock = document.querySelectorAll('.flex__item');
		
		endItemBlock = endItemBlock[endItemBlock.length - 1];

		newDiv.className = "flex__item";

		let span = createSpan(endItemBlock)

		  
		newDiv.innerHTML=`<div class="felx__item_text">${span}</div>`

		endItemBlock.after(newDiv)

		newDiv.style.height = getComputedStyle( newDiv ).width

		checkbox_color()
    }

	itemheight()

	body.addEventListener('click' , function(event){
	//клик по чекбоксу
	
		if(event.target.classList.contains('checkbox_color')){
			
			checkbox_color()

		}
		//Клик по блоку
		if(event.target.classList.contains('flex__item') || event.target.closest('.flex__item')){
			
			popap_active(event)

		}
		else if(popupBg.classList.contains('active') && !event.target.closest('.popup') || event.target.classList.contains('close-popup-img')){

			popap_not_active(event)

		}
		//добавить блок
		if(event.target.classList.contains('button')){
			
			addElement()

		}


	})
})
