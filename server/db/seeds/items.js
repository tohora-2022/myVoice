exports.seed = function (knex) {
  return knex('items').del()
    .then(function () {
      return knex('items').insert([
        { id: 1, word: 'all done', image: 'www.hereitis.co', categories_id: 102, tag: 'verb' },
        { id: 2, word: 'drink', image: 'www.hereitis.co', categories_id: 102, tag: 'verb' },
        { id: 3, word: 'eat', image: 'www.hereitis.co', categories_id: 102, tag: 'verb' },
        { id: 4, word: 'have', image: 'www.hereitis.co', categories_id: 102, tag: 'verb' },
        { id: 5, word: 'help', image: 'www.hereitis.co', categories_id: 102, tag: 'verb' },
        { id: 6, word: 'leave', image: 'www.hereitis.co', categories_id: 102, tag: 'verb' },
        { id: 7, word: 'play', image: 'www.hereitis.co', categories_id: 102, tag: 'verb' },
        { id: 8, word: 'quiet', image: 'www.hereitis.co', categories_id: 102, tag: 'verb' },
        { id: 9, word: 'want', image: 'www.hereitis.co', categories_id: 102, tag: 'verb' },
        { id: 10, word: 'he', image: 'www.hereitis.co', categories_id: 103, tag: 'pronoun' },
        { id: 11, word: 'her', image: 'www.hereitis.co', categories_id: 103, tag: 'pronoun' },
        { id: 12, word: 'I', image: 'www.hereitis.co', categories_id: 103, tag: 'pronoun' },
        { id: 13, word: 'it', image: 'www.hereitis.co', categories_id: 103, tag: 'pronoun' },
        { id: 14, word: 'me', image: 'www.hereitis.co', categories_id: 103, tag: 'pronoun' },
        { id: 15, word: 'mine', image: 'www.hereitis.co', categories_id: 103, tag: 'pronoun' },
        { id: 16, word: 'them', image: 'www.hereitis.co', categories_id: 103, tag: 'pronoun' },
        { id: 17, word: 'we', image: 'www.hereitis.co', categories_id: 103, tag: 'pronoun' },
        { id: 18, word: 'brush teeth', image: 'www.hereitis.co', categories_id: 107, tag: 'verb' },
        { id: 19, word: 'catch', image: 'www.hereitis.co', categories_id: 107, tag: 'verb' },
        { id: 20, word: 'conversation', image: 'www.hereitis.co', categories_id: 107, tag: 'noun' },
        { id: 21, word: 'dance', image: 'www.hereitis.co', categories_id: 107, tag: 'verb' },
        { id: 22, word: 'draw', image: 'www.hereitis.co', categories_id: 107, tag: 'verb' },
        { id: 23, word: 'eat', image: 'www.hereitis.co', categories_id: 107, tag: 'verb' },
        { id: 24, word: 'hold hands', image: 'www.hereitis.co', categories_id: 107, tag: 'verb' },
        { id: 25, word: 'homework', image: 'www.hereitis.co', categories_id: 107, tag: 'noun' },
        { id: 26, word: 'jump rope', image: 'www.hereitis.co', categories_id: 107, tag: 'verb' },
        { id: 27, word: 'run', image: 'www.hereitis.co', categories_id: 107, tag: 'verb' },
        { id: 28, word: 'pants', image: 'www.hereitis.co', categories_id: 108, tag: 'noun' },
        { id: 29, word: 'shorts', image: 'www.hereitis.co', categories_id: 108, tag: 'noun' },
        { id: 30, word: 'swimsuit', image: 'www.hereitis.co', categories_id: 108, tag: 'noun' },
        { id: 31, word: 'shirt', image: 'www.hereitis.co', categories_id: 108, tag: 'noun' },
        { id: 32, word: 'sweater', image: 'www.hereitis.co', categories_id: 108, tag: 'noun' },
        { id: 33, word: 'socks', image: 'www.hereitis.co', categories_id: 108, tag: 'noun' },
        { id: 34, word: 'underwear', image: 'www.hereitis.co', categories_id: 108, tag: 'noun' },
        { id: 35, word: 'umbrella', image: 'www.hereitis.co', categories_id: 108, tag: 'noun' },
        { id: 36, word: 'pajamas', image: 'www.hereitis.co', categories_id: 108, tag: 'noun' },
        { id: 37, word: 'get dressed', image: 'www.hereitis.co', categories_id: 108, tag: 'verb' },
        { id: 38, word: 'angry', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 39, word: 'bad', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 40, word: 'feel', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 41, word: 'frustrated', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 42, word: 'good', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 43, word: 'happy', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 44, word: 'hot', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 45, word: 'I have', image: 'www.hereitis.co', categories_id: 104, tag: 'verb' },
        { id: 46, word: 'lost', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 47, word: 'need help', image: 'www.hereitis.co', categories_id: 104, tag: 'verb' },
        { id: 48, word: 'sad', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 49, word: 'rest', image: 'www.hereitis.co', categories_id: 104, tag: 'verb' },
        { id: 50, word: 'scared', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 51, word: 'shocked', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 52, word: 'sick', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 53, word: 'thirsty', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 54, word: 'tired', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 55, word: 'too loud', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 56, word: 'uncomfortable', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 57, word: 'worried', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 58, word: 'hurt', image: 'www.hereitis.co', categories_id: 104, tag: 'adjective' },
        { id: 59, word: 'stomack hurts', image: 'www.hereitis.co', categories_id: 104, tag: 'verb' },
        { id: 60, word: 'milk', image: 'www.hereitis.co', categories_id: 106, tag: 'noun' },
        { id: 61, word: 'juice', image: 'www.hereitis.co', categories_id: 106, tag: 'noun' },
        { id: 62, word: 'hungry', image: 'www.hereitis.co', categories_id: 106, tag: 'adjective' },
        { id: 63, word: 'drink', image: 'www.hereitis.co', categories_id: 106, tag: 'verb' },
        { id: 64, word: 'water', image: 'www.hereitis.co', categories_id: 106, tag: 'noun' },
        { id: 65, word: 'fruit', image: 'www.hereitis.co', categories_id: 106, tag: 'noun' },
        { id: 66, word: 'dinner', image: 'www.hereitis.co', categories_id: 106, tag: 'noun' },
        { id: 67, word: 'snack', image: 'www.hereitis.co', categories_id: 106, tag: 'noun' },
        { id: 68, word: 'breakfast', image: 'www.hereitis.co', categories_id: 106, tag: 'noun' },
        { id: 69, word: 'lunch', image: 'www.hereitis.co', categories_id: 106, tag: 'noun' },
        { id: 70, word: 'no', image: 'www.hereitis.co', categories_id: 109, tag: 'determiner' },
        { id: 71, word: 'yes', image: 'www.hereitis.co', categories_id: 109, tag: 'determiner' },
        { id: 72, word: 'sister', image: 'www.hereitis.co', categories_id: 105, tag: 'noun' },
        { id: 73, word: 'babysitter', image: 'www.hereitis.co', categories_id: 105, tag: 'noun' },
        { id: 74, word: 'paramedic', image: 'www.hereitis.co', categories_id: 105, tag: 'noun' },
        { id: 75, word: 'brother', image: 'www.hereitis.co', categories_id: 105, tag: 'noun' },
        { id: 76, word: 'friend', image: 'www.hereitis.co', categories_id: 105, tag: 'noun' },
        { id: 77, word: 'police', image: 'www.hereitis.co', categories_id: 105, tag: 'noun' },
        { id: 78, word: 'mom', image: 'www.hereitis.co', categories_id: 105, tag: 'noun' },
        { id: 79, word: 'you', image: 'www.hereitis.co', categories_id: 105, tag: 'pronoun' },
        { id: 80, word: 'doctor', image: 'www.hereitis.co', categories_id: 105, tag: 'noun' },
        { id: 81, word: 'teacher', image: 'www.hereitis.co', categories_id: 105, tag: 'noun' },
        { id: 82, word: 'What is your name?', image: 'www.hereitis.co', categories_id: 105, tag: 'question' },
        { id: 83, word: 'want', image: 'www.hereitis.co', categories_id: 101, tag: 'verb' },
        { id: 84, word: 'like', image: 'www.hereitis.co', categories_id: 101, tag: 'verb' },
        { id: 85, word: 'need', image: 'www.hereitis.co', categories_id: 101, tag: 'verb' },
        { id: 86, word: 'okay', image: 'www.hereitis.co', categories_id: 101, tag: 'determiner' },
        { id: 87, word: 'out', image: 'www.hereitis.co', categories_id: 101, tag: 'preposition' },
        { id: 88, word: 'please', image: 'www.hereitis.co', categories_id: 101, tag: 'question' },
        { id: 89, word: 'thank you', image: 'www.hereitis.co', categories_id: 101, tag: 'conjunction' },
        { id: 90, word: 'wait', image: 'www.hereitis.co', categories_id: 101, tag: 'verb' },
        { id: 91, word: 'what', image: 'www.hereitis.co', categories_id: 101, tag: 'determiner' },
        { id: 92, word: 'and', image: 'www.hereitis.co', categories_id: 101, tag: 'preposition' },
        { id: 93, word: 'go to the bathroom', image: 'www.hereitis.co', categories_id: 101, tag: 'conjunction' },
        { id: 94, word: 'help', image: 'www.hereitis.co', categories_id: 101, tag: 'verb' },
        { id: 95, word: 'in', image: 'www.hereitis.co', categories_id: 101, tag: 'preposition' },
        { id: 96, word: 'I want', image: 'www.hereitis.co', categories_id: 101, tag: 'conjunction' },
        { id: 97, word: 'Hello', image: 'www.hereitis.co', categories_id: 101, tag: 'noun' },
        { id: 98, word: 'repeat', image: 'www.hereitis.co', categories_id: 101, tag: 'verb' },
        { id: 99, word: 'sorry', image: 'www.hereitis.co', categories_id: 101, tag: 'adjective' },
        { id: 100, word: 'stop sign', image: 'www.hereitis.co', categories_id: 101, tag: 'conjunction' },
        { id: 101, word: 'bye', image: 'www.hereitis.co', categories_id: 101, tag: 'noun' },
        { id: 102, word: 'do not know', image: 'www.hereitis.co', categories_id: 101, tag: 'important' },
        { id: 103, word: 'do not want', image: 'www.hereitis.co', categories_id: 101, tag: 'important' }
      ])
    })
}