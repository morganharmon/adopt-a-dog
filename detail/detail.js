import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
const params = new URLSearchParams(window.location.search);

async function loadData() {
    const dog = await getDog(params.get('id'));
    const div = renderDogDetail(dog);
    dogDetailContainer.append(div);
}

loadData();