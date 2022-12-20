//Вариант 2 для нескольких кнопок:
const dropdownBattons = document.querySelectorAll(".dropdown");

//Функция открытия/закрытия меню:
function openCloseMenu (dropdownList){
    if (dropdownList.className == "dropdown__list") {
        dropdownList.className = "dropdown__list_active";
    } else {dropdownList.className = "dropdown__list";}
}

//Открытие/закрытие меню при нажатии на кнопку:
for (let i1 = 0; i1<(dropdownBattons.length); i1++) {
    dropdownBattons[i1].children[0].onclick = function(event) {openCloseMenu(dropdownBattons[i1].children[1])}
}

//Оновление значения и закрытия меню при выборе пункта подменю:
for (let i1 = 0; i1<(dropdownBattons.length); i1++) {
    for (let i2 = 0; i2<(dropdownBattons[i1].children[1].children.length); i2++) {
        dropdownBattons[i1].children[1].children[i2].onclick = function(event) {
            dropdownBattons[i1].children[0].textContent = dropdownBattons[i1].children[1].children[i2].textContent;
            openCloseMenu(dropdownBattons[i1].children[1]);
            return false;
        }
    }
}