// =============================================== //
// fetching data with fetch and with async await !!!!!
// =============================================== //
// async function getData() {
//   try {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// =============================================== //
// fetching data with axios and with async await !!!!!
/*
    axios cdn 
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js"
      integrity="sha512-u9akINsQsAkG9xjc1cnGF4zw5TFDwkxuc9vUp5dltDWYCSmyd0meygbvgXrlc/z7/o4a19Fb5V0OUE58J7dcyw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
*/
// =============================================== //
// async function getData() {
//   try {
//     const response = await axios("https://pokeapi.co/api/v2/pokemon/ditto");
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// =============================================== //
// fetching data with fetch and without async await !!!!!
// =============================================== //
// function getDataWithoutAsync() {
//   fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
// }

// =============================================== //
// fetching data with axios and without async await !!!!!
/*
    axios cdn 
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js"
      integrity="sha512-u9akINsQsAkG9xjc1cnGF4zw5TFDwkxuc9vUp5dltDWYCSmyd0meygbvgXrlc/z7/o4a19Fb5V0OUE58J7dcyw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
*/
// =============================================== //
// async function getDataWithoutAsync() {
//   axios("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((response) => console.log(response.data))
//     .catch((err) => console.error(err));
// }