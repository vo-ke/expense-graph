const json1 = document.querySelector('#json1');
const json2 = document.querySelector('#json2');
const json3 = document.querySelector('#json3');
const json4 = document.querySelector('#json4');
const json5 = document.querySelector('#json5');
const json6 = document.querySelector('#json6');
const json7 = document.querySelector('#json7');
const first = document.querySelector('#first');
const second = document.querySelector('#second');



const fetchData = async () => { 
    const file = "./JSONS/data.json";
    try {
      const response = await fetch(file);
      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }
      const data = await response.json();
       json1.innerHTML = `$${data[0].amount}`; 
       json2.innerHTML = `$${data[1].amount}`; 
       json3.innerHTML = `$${data[2].amount}`; 
       json4.innerHTML = `$${data[3].amount}`; 
       json5.innerHTML = `$${data[4].amount}`;
       json6.innerHTML = `$${data[5].amount}`; 
       json7.innerHTML = `$${data[6].amount}`; 

    } catch (error) {
      console.error(error);
    }
  };

  fetchData(); 

  