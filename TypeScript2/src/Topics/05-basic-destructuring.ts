

interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "THE SCIENTIST",
    details: {
        author: "Coldplay",
        year: 2002

    }
}

//Object destructuring
//Destructuring allows me to extract the pieces that interest me.

//const song = 'New Song';
//Allows us to rename existing elements
//const { song:anotherSong, songDuration:duration, details} = audioPlayer;
//Nos permite desestructurar los details
//const {author} = details;
//
//console.log('Song: ', anotherSong);
//console.log('Duration: ', duration);
//console.log('Author: ', author);

//Desestructuracion de arreglos  

const[, , trunks = 'Not found'] = ['Goku', 'Vegeta', ];

console.log('Personaje 3:', trunks);






export{

}