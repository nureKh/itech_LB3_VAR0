function changeSize() {
// Получаем ссылку на элемент по его идентификатору
var img = document.getElementById('img');

// Присваиваем переменным значения введенные пользователем
// parseInt() принимает строку в качестве аргумента и возвращает целое число
var imgWidth = parseInt(document.getElementById('width').value);
var imgHeight = parseInt(document.getElementById('height').value);
var imgBorder = parseInt(document.getElementById('border').value);

// Для добавления новых стилей к HTML-элементу нужно воспользоваться свойством
// имя которого будет совпадать с именем CSS свойства, значение которого мы хотим изменить
// Свойство style представляет глобальный атрибут style HTML-элемента.
	if (img && img.style) {
		img.style.width = '' + imgWidth + 'px';
		img.style.height = '' + imgHeight + 'px';
		img.style.border = '' + imgBorder + 'px solid red';
	}
}

function changeImage() {
	// Метод Math.random() возвращает псевдослучайное число с плавающей запятой
	// из диапазона [0, 9), то есть, от 0 (включительно) до 9 (но не включая 9)
	const random = Math.floor(Math.random() * 9) + 1;
	var randomImg = '<img src="images/'+random+'.png" id="img" />';

	// Установка нового содержимого (картинки) для элемента
	document.getElementById("imgBlock").innerHTML = randomImg;

	//Вызываем changeSize(), если пользователь ввел какие-то значения
	var checkChangeSize = changeSize();
}