/*Descrizione:
-Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
-Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/


// 1 -Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const app = new Vue(
    {
        el: "#root",
        data: {
            titolo: "Ecco il mio primo titolo con VueJs",
            imgUrl: 'https://www.laramind.com/blog/wp-content/uploads/2019/05/1_nq9cdMxtdhQ0ZGL8OuSCUQ.jpg'
        }
    }
);