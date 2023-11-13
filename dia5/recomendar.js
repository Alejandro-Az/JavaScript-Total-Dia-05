function recomendar(genero) {
    let edad = document.getElementById('ageInput').value;
    let comedyOptions = document.getElementById('comedyOptions');

    switch(genero) {
        case 'comedia':
            if(edad <= 13) {
                comedyOptions.textContent = "Back to the future";
            } else {
                if(edad > 13 && edad <= 16)  {
                    comedyOptions.textContent = "Back to the future, The Truman Show";
                } else {
                    comedyOptions.textContent = "Back to the future, The Truman Show, The wolf of wall street";
                }
            }
            break;
        
        case 'crimen':
            if(edad <= 13) {
                crimeOptions.textContent = "No hay peliculas ATP";
            } else {
                if(edad > 13 && edad <= 16)  {
                    crimeOptions.textContent = "El secreto de sus ojos";
                } else {
                    crimeOptions.textContent = "El secreto de sus ojos, The godfather";
                }
            }
            break;
        
        case 'drama':
            if(edad <= 13) {
                dramaOptions.textContent = "casablanca";
            } else {
                if(edad > 13 && edad <= 16)  {
                    dramaOptions.textContent = "casablanca, The shawshank redemption";
                } else {
                    dramaOptions.textContent = "casablanca, The shawshank redemption, Taxi driver";
                }
            }
            break;

        case 'musical':
            if(edad <= 13) {
                musicalOptions.textContent = "la la land";
            } else {
                if(edad > 13 && edad <= 16)  {
                    musicalOptions.textContent = "la la land, los miserables";
                } else {
                    musicalOptions.textContent = "la la land, los miserables, The rocky horror picture show";
                }
            }
            break;
    }

}