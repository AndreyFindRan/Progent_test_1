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
		
		document.querySelector('.text-popup').textContent = event.target.textContent

		popupBg.classList.add('active')

	}

	function popap_not_active(event) {

		popupBg.classList.remove('active')

	}

	function addElement() {

		let newDiv = document.createElement("div");

		let endItemBlock = document.querySelectorAll('.flex__item');
		
		endItemBlock = endItemBlock[endItemBlock.length - 1];

		newDiv.className = "flex__item";

		newDiv.innerHTML=`<span>${Number(endItemBlock.lastElementChild.textContent) + Number(1)}</span>`

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
