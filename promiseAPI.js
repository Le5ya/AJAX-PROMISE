document.addEventListener('DOMContentLoaded', () => {
  'use strict';

      const select = document.getElementById('cars'),
      output = document.getElementById('output');

    const getData = (url) => {
      return new Promise((resolve, reject) =>{
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.addEventListener('readystatechange', () => {
          if(request.readyState !== 4){
            return;
          }
          if(request.status === 200) {
            const response = JSON.parse(request.responseText);
            resolve(response);
          }else {
            reject(request.statusText);
          }
        });
        request.send();
        });
      }
      const outputData = (data) => {
          data = JSON.parse(request.responseText);
          data.cars.forEach(item => {
            if (item.brand === select.value) {
                const {brand, model, price} = item;
                output.innerHTML = `Тачка ${brand} ${model} <br>
                Цена: ${price}$`;
            }
        });
      }
      const urlData = getData('cars.json');

      const bmw = getData('cars.json/"cars"/1'),
            volvo = getData('cars.json/"cars"/2');



      PromiseAll([bmw, volvo])
        .then(outputData)
        .then(error => console.error(error));
});

    