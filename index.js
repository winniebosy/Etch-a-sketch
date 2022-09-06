let divContainer = document.querySelector('.container');
//console.log(divContainer);
let submitBtn = document.querySelector('#submit-btn');
let clearBtn = document.querySelector('#clear-btn')

let inputRow = document.querySelector('#row');
//console.log(inputRow)
let inputColumn = document.querySelector('#column')
let colorSelector = document.querySelector('#color');

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
            gridCells.setAttribute("tabindex", 0);
            gridCells.focus();
            gridRow.appendChild(gridCells);
            //styles the background layer color
            gridCells.addEventListener('mouseenter', (e) => {
                let colorValue = colorSelector.value;
                //color value based on user choice
                gridCells.style.backgroundColor = colorValue;
            });

            //continue from here

            //console.log(firstElement)
            //adding color using arrow keys
            // gridCells.addEventListener('keydown', (e) => {
            //     //e.key === 9 || e.key === 'Tab'
            //     //up arrow
            //     if (e.key === 38 || e.key === 'ArrowUp') {
            //         e.target.style.backgroundColor = 'red';
            //         gridCells.focus();
            //         console.log(e.key);
            //         //down arrow
            //     } else if (e.key === 40 || e.key === 'ArrowDown') { //down arrow 
            //         e.target.style.backgroundColor = 'red';
            //         console.log(e.key);

            //     } else if (e.key === 39 || e.key === 'ArrowRight') {
            //         e.target.style.backgroundColor = 'red';
            //         console.log(e.key);

            //     } else if (e.key === 37 || e.key === 'ArrowLeft') {
            //         e.target.style.backgroundColor = 'red';
            //         console.log(e.key);

            //     }
            // })

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


//selecting color