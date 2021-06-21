// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

let brusselImg = new Image();
brusselImg.src = './public/images/brusselSprouts.jpg';

let mashImg = new Image();
mashImg.src = './public/images/mashPotatoes.jpg';

let steakImg = new Image();
steakImg.src = './public/images/steak.jpg';

let table = document.getElementById('table')

addFood(mashPotatoes[0], '#mashPotatoes')
  .then(() => addFood(mashPotatoes[1], '#mashPotatoes'))
  .then(() => addFood(mashPotatoes[2], '#mashPotatoes'))
  .then(() => addFood(mashPotatoes[3], '#mashPotatoes'))
  .then(() => addFood(mashPotatoes[4], '#mashPotatoes'))
  .then(() => table.appendChild(mashImg))

addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                table.appendChild(steakImg);
              })
            })
          })
        })
      })
    })
  })
});

addFood(brusselSprouts[0], '#brusselSprouts')
  .then(() => addFood(brusselSprouts[1], '#brusselSprouts'))
  .then(() => addFood(brusselSprouts[2], '#brusselSprouts'))
  .then(() => addFood(brusselSprouts[3], '#brusselSprouts'))
  .then(() => addFood(brusselSprouts[4], '#brusselSprouts'))
  .then(() => addFood(brusselSprouts[5], '#brusselSprouts'))
  .then(() => addFood(brusselSprouts[6], '#brusselSprouts'))
  .then(() => addFood(brusselSprouts[7], '#brusselSprouts'))
  .then(() => addFood(brusselSprouts[8], '#brusselSprouts'))
  .then(() => table.appendChild(brusselImg))
