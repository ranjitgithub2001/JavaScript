let api='https://www.themealdb.com/api/json/v1/1/'
let app= document.querySelector('.app')

let screen={
    main:app.querySelector('.main-screen'),
    recipe:app.querySelector('.recipe-screen')
}

// (async function(){
//     try {
//         let response=await fetch(api + 'list.php?c=list')
//         if(!response.ok){
//             throw new Error('Failed to fetch categories')
//         }
//         let data= await response.json()
//         let categories=data.meals;
//         categories.forEach((category,index)=>{
//             let div=document.createElement('div')
//             div.innerText=category.strCategory;
//             div.addEventListener('click', ()=>{
//                 screen.main.querySelector('.catagories .active').classList.remove('active')
//                 div.classList.add('active')
//                 getRecipeOfCategory(category.strCategory);
//         });
//         if(index === 0){
//             div.classList.add('active')
//         }
//         screen.main.querySelector('.categories').appendChild(div)
//     })
//     } catch (error) {
        
//     }
    
// })
async function getRecipeOfCategory(category){
    screen.main.querySelector('.recipe-list').innerHTML=''
    try {
        let res=await fetch(api + 'filter.php?c=' + category)
        let data= await res.json()
        let recipe=data.meals;
        for (let i = 0; i < recipe.length; i++) {
            let div=document.createElement('div')
            div.classList.add('item')
            div.addEventListener('click',()=>{
                showFullRecipe(recipe[i].idMeal)
            })
            div.innerHTML=`
            <div class='thumbnail'>
                <img src='${recipe[i].strMealThumb}'/>
            </div>
            <div class='details'>
                <h2>${recipe[i].strMeal}</h2>
            </div>
            `;
            screen.main.querySelector('.recipe-list').appendChild(div)
        }
    } catch (error) {
        
    }
}
(async function(){
    let res=await fetch(api + 'list.php?c=list')
    if (!res.ok) {
        console.log('Failed to fetch categories');
    }
    let data= await res.json()
    let catagories=data.meals;
    for (let i = 0; i < catagories.length; i++) {
        let div=document.createElement('div')
        div.innerText=catagories[i].strCategory
        div.addEventListener('click', ()=>{
            screen.main.querySelector('.catagories .active').classList.remove('active')
            div.classList.add('active')
            getRecipeOfCategory(catagories[i].strCategory);
        })
        if(i===0){
            div.classList.add('active')
            getRecipeOfCategory(catagories[i].strCategory);
        }
        screen.main.querySelector('.catagories').appendChild(div)
    }
})();

async function showFullRecipe(recipeId){
    screen.main.classList.add('hidden')
    screen.recipe.classList.remove('hidden')
    screen.recipe.querySelector('.back-btn').addEventListener('click',()=>{
        screen.recipe.classList.add('hidden')
        screen.main.classList.remove('hidden')
        screen.recipe.querySelector('thumbnail img').src=''
        screen.recipe.querySelector('details h2').innerText=''
        screen.recipe.querySelector('details ul').innerHTML=''
        screen.recipe.querySelector('details ol').innerHTML=''
    })
    try {
        let res=await fetch(api + 'lookup.php?i=' + recipeId)
        let data=await res.json()
        let recipe=data.meals[0]

        screen.recipe.querySelector('.thumbnail img').src=recipe.strMealThumb;
        screen.recipe.querySelector('.details h2').innerText=recipe.strMeal;

        // for (let i = 0; i <= 20; i++) {
        //     if(recipe['strIngredient'+ i]){
        //         break;
        //     }
        //     let li=document.createElement('li')
        //     li.innerText=recipe['strIngredient' + i] + ' - ' + recipe['strMeasure' + i] 
        //     screen.recipe.querySelector('.details ul').appendChild(li) 
        // }
        for (let i = 1; i <= 20; i++) {
            // Check if ingredient exists
            if (recipe['strIngredient' + i]) {
                // Create list item for ingredient
                let li = document.createElement('li');
                li.innerText = recipe['strIngredient' + i] + ' - ' + recipe['strMeasure' + i];
                // Append ingredient to ingredients list
                screen.recipe.querySelector('.details ul').appendChild(li);
            } else {
                // If no more ingredients, exit loop
                break;
            }
        }
        let instructions=recipe.strInstructions.split('\r\n').filter( v => v)
        for(let i=0; i<instructions.length; i++){
            let li=document.createElement('li')
            li.innerText=instructions[i]
            screen.recipe.querySelector('.details ol').appendChild(li)

        }
    } catch (error) {
        console.error('Error fetching full recipe:', error);
    }
}