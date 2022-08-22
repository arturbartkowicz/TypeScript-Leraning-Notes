// AGENDA:
// - Exporting Modules
// - Module re-exporting


// ----------     Exporting Modules     ----------


export class TestModule {
    constructor(public moduleName: string){}

    display(){
        console.log(this.moduleName + 'Artur')
    }
}


// ----------     Module re-exporting     ----------



// Jeśli mamy wiele modułów do wyeksportowania, możemy stworzyć osobny plik indexe.js który 
// posłuży nam za (wiadro z eksportami) i później jeśli potrzebujemy wielu modułów e jednym pliku
// to zaimportujemy tylko index.js