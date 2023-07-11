fetch('https://www.themealdb.com/api/json/v1/1/random.php')
	.then(res => {
		return res.json();
	})
	.then(data => {
        //Logging the api output
		console.log(data.meals[0]);

		const main = document.querySelector("body > main .container .card .front");

        //Thumbnail
		const thumbnail = document.createElement("thumbnail");
		main.appendChild(thumbnail);
		thumbnail.insertAdjacentHTML('beforeend', `   
            <img src="${data.meals[0].strMealThumb}" alt="Recipe thumbnail">
        `);

         //Source
         const source = document.createElement("source");
         main.appendChild(source);
         source.insertAdjacentHTML('beforeend', `   
             <a href="${data.meals[0].strSource}" class="arrow-btn">
             Original
                <div class="arrow-wrapper">
                    <div class="arrow"></div>
                </div>
            </a>
         `);

		//Check if tags are nulled or not
		//Tags & Heading
		let tagdata = data.meals[0].strTags
		if (!tagdata) {
            const heading = document.createElement("heading");
			main.appendChild(heading);
			heading.insertAdjacentHTML('beforeend', `
                <h1>${data.meals[0].strMeal}</h1>
                <h2>${data.meals[0].strCategory}</h2>
            `);
		} else {
			const heading = document.createElement("heading");
			main.appendChild(heading);
			heading.insertAdjacentHTML('beforeend', `
                <h1>${data.meals[0].strMeal}</h1>
                <h2>${data.meals[0].strCategory}</h2>
                <h4>${tagdata}</h4>
            `);
		}


        const back = document.querySelector("body > main .container .card .back");

        //Ingredients and measurements
        const ingredients = document.createElement("ingredients");
		back.appendChild(ingredients);
		ingredients.insertAdjacentHTML('beforeend', ` 
            <table>
                <tr>
                    <td>${data.meals[0].strIngredient1}</td>
                    <td>${data.meals[0].strMeasure1}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient2}</td>
                    <td>${data.meals[0].strMeasure2}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient3}</td>
                    <td>${data.meals[0].strMeasure3}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient4}</td>
                    <td>${data.meals[0].strMeasure4}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient5}</td>
                    <td>${data.meals[0].strMeasure5}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient6}</td>
                    <td>${data.meals[0].strMeasure6}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient7}</td>
                    <td>${data.meals[0].strMeasure7}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient8}</td>
                    <td>${data.meals[0].strMeasure8}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient9}</td>
                    <td>${data.meals[0].strMeasure9}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient10}</td>
                    <td>${data.meals[0].strMeasure10}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient11}</td>
                    <td>${data.meals[0].strMeasure11}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient12}</td>
                    <td>${data.meals[0].strMeasure12}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient13}</td>
                    <td>${data.meals[0].strMeasure13}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient14}</td>
                    <td>${data.meals[0].strMeasure14}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient15}</td>
                    <td>${data.meals[0].strMeasure15}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient16}</td>
                    <td>${data.meals[0].strMeasure16}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient17}</td>
                    <td>${data.meals[0].strMeasure17}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient18}</td>
                    <td>${data.meals[0].strMeasure18}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient19}</td>
                    <td>${data.meals[0].strMeasure19}</td>
                </tr>
                <tr>
                    <td>${data.meals[0].strIngredient20}</td>
                    <td>${data.meals[0].strMeasure20}</td>
                </tr>
        `);

        //Instructions
        const instructions = document.createElement("instructions");
		back.appendChild(instructions);
		instructions.insertAdjacentHTML('beforeend', `   
            <p>${data.meals[0].strInstructions}</p>
        `);
 
	})
	.catch(error => console.log(error));