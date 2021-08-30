// console.log('connedted')
const searchFood = () => {
    const searchInput = document.getElementById('search-field');
    const searchText = searchInput.value;
    // console.log(searchText);
    searchInput.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.meals))
}