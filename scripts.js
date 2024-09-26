

class Post {
    constructor(params) {
        let { id, title, subititle, description, image, body, calories, fats, protein } = params;
        this.id = id;
        this.title = title;
        this.subititle = subititle;
        this.description = description;
        this.image = image;
        this.body = body;
        this.calories = calories;
        this.fats = fats;
        this.protein = protein;
    }
}
let posts = [
    new Post(
        {
            id: 2,
            title: 'Pizza',
            subititle: 'with fresh vegetables, goat cheese and confit',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla atque architecto, ab consequuntur, voluptate ratione veritatis natus assumenda, similique tenetur cum eius. Ex provident voluptatibus numquam ab, suscipit dignissimos.',
            image: './images/pexels-photo-5640015.jpeg',
            calories: '320kcal',
            fats: '4.5 gr',
            protein: '5.3 gr'
        }
    ),

    new Post(
        {
            id: 3,
            title: 'Cheese salad',
            subititle: 'with fresh vegetables, goat cheese and confit',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla atque architecto, ab consequuntur, voluptate ratione veritatis natus assumenda, similique tenetur cum eius. Ex provident voluptatibus numquam ab, suscipit dignissimos.',
            image: './images/pexels-photo-5602486.jpeg',
            calories: '320kcal',
            fats: '4.5 gr',
            protein: '5.3 gr'
        }
    ),

    new Post(
        {
            id: 4,
            title: 'Pizza bread',
            subititle: 'with fresh vegetables, goat cheese and confit',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla atque architecto, ab consequuntur, voluptate ratione veritatis natus assumenda, similique tenetur cum eius. Ex provident voluptatibus numquam ab, suscipit dignissimos.',
            image: './images/pexels-photo-3026182.jpeg',
            calories: '320kcal',
            fats: '4.5 gr',
            protein: '5.3 gr'
        }
    ),

    new Post(
        {
            id: 5,
            title: 'Tomato Sauce Cheese',
            subititle: 'with fresh vegetables, goat cheese and confit',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla atque architecto, ab consequuntur, voluptate ratione veritatis natus assumenda, similique tenetur cum eius. Ex provident voluptatibus numquam ab, suscipit dignissimos.',
            image: './images/pexels-photo-691114.jpeg',
            calories: '320kcal',
            fats: '4.5 gr',
            protein: '5.3 gr'
        }
    )
];

let specials= [
    new Post(
        {
            id: 6,
            title: 'Avocado Salad',
            subititle: 'with fresh vegetables, goat cheese and confit',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla atque architecto, ab consequuntur, voluptate ratione veritatis natus assumenda, similique tenetur cum eius. Ex provident voluptatibus numquam ab, suscipit dignissimos.',
            image: './images/pexels-photo-5836624.jpeg',
            calories: '320kcal',
            fats: '4.5 gr',
            protein: '5.3 gr'
        }
    ),

    new Post(
        {
            id: 7,
            title: 'House Chicken',
            subititle: 'with fresh vegetables, goat cheese and confit',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla atque architecto, ab consequuntur, voluptate ratione veritatis natus assumenda, similique tenetur cum eius. Ex provident voluptatibus numquam ab, suscipit dignissimos.',
            image: './images/pexels-photo-1352270.jpeg',
            calories: '320kcal',
            fats: '4.5 gr',
            protein: '5.3 gr'
        }
    ),

    new Post(
        {
            id: 8,
            title: 'Hot Dog',
            subititle: 'with fresh vegetables, goat cheese and confit',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla atque architecto, ab consequuntur, voluptate ratione veritatis natus assumenda, similique tenetur cum eius. Ex provident voluptatibus numquam ab, suscipit dignissimos.',
            image: './images/pexels-photo-1600712.jpeg',
            calories: '320kcal',
            fats: '4.5 gr',
            protein: '5.3 gr'
        }
    ),

    new Post(
        {
            id: 9,
            title: 'Salad',
            subititle: 'with fresh vegetables, goat cheese and confit',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla atque architecto, ab consequuntur, voluptate ratione veritatis natus assumenda, similique tenetur cum eius. Ex provident voluptatibus numquam ab, suscipit dignissimos.',
            image: './images/pexels-photo-1640772.jpeg',
            calories: '320kcal',
            fats: '4.5 gr',
            protein: '5.3 gr'
        }
    ),

    new Post(
        {
            id: 10,
            title: 'Salad',
            subititle: 'with fresh vegetables, goat cheese and confit',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla atque architecto, ab consequuntur, voluptate ratione veritatis natus assumenda, similique tenetur cum eius. Ex provident voluptatibus numquam ab, suscipit dignissimos.',
            image: './images/pexels-photo-376464.jpeg',
            calories: '320kcal',
            fats: '4.5 gr',
            protein: '5.3 gr'
        }
    ),
    new Post(
        {
            id: 11,
            title: 'Salad',
            subititle: 'with fresh vegetables, goat cheese and confit',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla atque architecto, ab consequuntur, voluptate ratione veritatis natus assumenda, similique tenetur cum eius. Ex provident voluptatibus numquam ab, suscipit dignissimos.',
            image: './images/pexels-photo-262959.jpeg',
            calories: '320kcal',
            fats: '4.5 gr',
            protein: '5.3 gr'
        }
    )
];

let firstPost = new Post(
    {
        id: 1,
        title: 'Cheese croissant',
        subititle: 'with fresh vegetables, goat cheese and confit',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla atque architecto, ab consequuntur, voluptate ratione veritatis natus assumenda, similique tenetur cum eius. Ex provident voluptatibus numquam ab, suscipit dignissimos.',
        image: './images/pexels-photo-1510690.jpeg',
        calories: '320kcal',
        fats: '4.5 gr',
        protein: '5.3 gr'
    },


)



let aboutContent = `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quod, maxime consequatur est
                        explicabo
                        ex, iste atque eligendi ipsum, facilis dolore rerum exercitationem maiores aperiam beatae.
                        Repellat
                        asperiores error explicabo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quasi repellat asperiores
                        laudantium
                        unde voluptatem in facilis voluptatum voluptate corporis veritatis saepe modi, ratione pariatur
                        assumenda non! Culpa, architecto consequuntur!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestias expedita corrupti iste
                        consequuntur blanditiis beatae temporibus fuga enim. Repellendus obcaecati sunt ad sint neque ex
                        rem
                        recusandae, architecto quo.</p>`;


aboutContentData.innerHTML = aboutContent;


let aboutImage = './images/pexels-photo-3814446.webp';

aboutContentImage.innerHTML = `<img src="${aboutImage}" alt="Not Load">`;


firstPostTitle.innerHTML = `${firstPost.title}`;

firstPostSubtitle.innerHTML = `${firstPost.subititle}`;

firstPostDescription.innerHTML = `${firstPost.description}`;

firstPostCalc.innerHTML = firstPost.calories;

firstPostFats.innerHTML = firstPost.fats;

firstPostProtein.innerHTML = firstPost.protein;

firstPostImage.innerHTML = ` <div>
                    <img src="${firstPost.image}" alt="Not Load">
                </div>`;


function showModal(post) {
    console.log(post);
}
for (let i = 0; i < posts.length; i++) {
    let post = posts[i];

    let box = document.createElement('div');
    box.className = 'col-xl-5 col-md-12 mb-3 rounded p-0 mx-2';

    let img = document.createElement('img');

    img.src = post.image;
    img.alt = 'Not Load';

    img.className = 'rounded';

    box.appendChild(img);

    box.onclick = () => showModal(post)

    firstRecomend.appendChild(box);
}


for(let i = 0; specials.length;i++){
    let post = specials[i];

    let box = document.createElement('div');
    box.className = 'col-xl-5 col-sm-12 mb-3 rounded p-0 mx-2';

    let img = document.createElement('img');

    img.src = post.image;
    img.alt = 'Not Load';

    img.className = 'rounded';

    box.appendChild(img);

    box.onclick = () => showModal(post)


    specialsPosts.appendChild(box);
}