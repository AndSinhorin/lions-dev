let { flashcards } = require('../data')

function deletarFlashcard(id) {
    let index = flashcards.findIndex(flash => flash.id === id);

    if(index !== -1) {
        
        flashcards.splice(index, 1)
            
    }
}

module.exports = deletarFlashcard