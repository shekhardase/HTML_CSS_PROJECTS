function fetchData() {
    fetch('https://catfact.ninja/fact')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            return response.json();
        })
        .then(fact => {
            console.log(fact);
            let cat = document.getElementById("fact");
            cat.textContent = fact.fact;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

fetchData();



function RELOAD() {
    window.location.reload();
}