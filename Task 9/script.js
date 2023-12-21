class Movie {
    constructor(title, director, budget) {
      this.title = title
      this.director = director
      this.budget = budget
    }
  
    wasExpensive() {
      return this.budget > 100000000
    }
  }
  
  const avengersEndgame = new Movie("Avengers: Endgame", "Anthony Russo, Joe Russo", 356000000)

  const mrNobody = new Movie("Mr. Nobody", "Jaco Van Dormael", 35000000)
  
  console.log(`${avengersEndgame.title} biudžetas ${avengersEndgame.wasExpensive() ? 'viršijo' : 'neviršijo'} 100 mln. USD`)

  console.log(`${mrNobody.title} biudžetas ${mrNobody.wasExpensive() ? 'viršijo' : 'neviršijo'} 100 mln. USD`)
  