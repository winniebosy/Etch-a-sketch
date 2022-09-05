let divContainer = document.querySelector('.container');
//console.log(divContainer);
let submitBtn = document.querySelector('#submit-btn');
let clearBtn = document.querySelector('#clear-btn')

let inputRow = document.querySelector('#row');
//console.log(inputRow)
let inputColumn = document.querySelector('#column')



//creating out etch-a-sketch divs
function createDivs() {
    //console.log(inputColumn)
    rowsInput = inputRow.value;
    columnsInput = inputColumn.value;
    for (let r = 1; r <= columnsInput; r++) {
        let gridRow = document.createElement('div');
        divContainer.appendChild(gridRow);
        console.log(gridRow)
        for (let c = 1; c <= rowsInput; c++) {
            let gridCells = document.createElement('section')
            gridCells.setAttribute("tabindex", 0)
            gridRow.appendChild(gridCells);
            //styles the background layer color
            gridCells.addEventListener('mouseenter', (e) => {
                    e.target.style.backgroundColor = 'red';


                })
                //adding color using arrow keys
            gridCells.addEventListener('keydown', (e) => {
                if (e.key === 9) {
                    //gridCells.setAttribute("tabindex", 0)


                    console.log('down arrow pressed')

                }
            })

        }
    }

}




//submits value per user preference.
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    createDivs(16, 16)
    disableBtn();

})

//clears the table
clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.reload();
    //resets value to 1 after clear
    inputRow.value = 1
    inputColumn.value = 1;
})

//disable button after submit. Not to reenter values

function disableBtn() {
    submitBtn.disabled = true;
}