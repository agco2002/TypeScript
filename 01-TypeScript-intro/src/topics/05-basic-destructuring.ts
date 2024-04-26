
interface AudioPlayer {
    audioVolume: number;
    SongDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    SongDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

//Mostrando el nombre de la cancion en la consola 
const song = 'New Song';

const {song:anotherSong, SongDuration:duration, details} = audioPlayer;
const{author} = details;



//console.log('Song: ', anotherSong);
//console.log('Song duration: ', duration);
//console.log('Author: ', audioPlayer.details.author);
//console.log('Author: ', author);

//Destructuracion de arreglos 
//                       0        1         2
const dbz: string[] = ['Goku', 'Vegeta', 'Trunk'];

//Imprimir el nombre de Trunk con en el indice o posicion de cada jugador

console.log('Personaje 3:', dbz[2]);

export {};