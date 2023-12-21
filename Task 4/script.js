/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */




const ENDPOINT = 'cars.json';
const output = document.getElementById('output');

const loadData = () => {
    return fetch(ENDPOINT).then(resp => resp.json());
};

const printData = (data) => {
    output.innerHTML = '';

    data.forEach(car => {
        const carElement = document.createElement('div');
        carElement.classList.add('card');
        carElement.innerHTML = `
            <h1>${car.brand}</h1>
            <h2>Models:</h2>
            <ul>
                ${car.models.map(model => `<li>${model}</li>`).join('')}
            </ul>
        `;
        output.appendChild(carElement);
    });
};

loadData().then(printData)