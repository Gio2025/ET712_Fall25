/* 
George Athanasopoulos
Homework 3 – Objects and exception handling in JS 
*/

const createMovie = function(title, director, year) {
    return {
        title: title,
        director: director,
        year: year,
        getDetails: function() {
            return `${this.title}, directed by ${this.director} (${this.year})`;
        }
    };
};

const MovieCollection = {
    movies: [],
    addMovie: function(title, director, year) {
        const movie = createMovie(title, director, year);
        this.movies.push(movie);
        console.log(`✅ Movie "${title}" added to collection.`);
    },
    removeMovie: function(title) {
        try {
            const index = this.movies.findIndex(function(movie) {
                return movie.title.toLowerCase() === title.toLowerCase();
            });
            if (index === -1) {
                throw new Error(`Movie titled "${title}" not found in collection.`);
            }
            const removed = this.movies.splice(index, 1)[0];
            console.log(`🗑️ Movie "${removed.title}" removed from collection.`);
        } catch (error) {
            console.log("❌ ERROR:", error.message);
        }
    },
    showMovies: function() {
        try {
            if (this.movies.length === 0) {
                throw new Error("No movies in the collection.");
            }
            console.log("🎬 Movies in collection:");
            this.movies.forEach(function(movie, index) {
                console.log(`${index + 1}. ${movie.getDetails()}`);
            });
        } catch (error) {
            console.log("❌ ERROR:", error.message);
        }
    }
};

function addMovieToCollection(title, director, year) {
    MovieCollection.addMovie(title, director, year);
}

function removeMovieFromCollection(title) {
    MovieCollection.removeMovie(title);
}

function showAllMovies() {
    MovieCollection.showMovies();
}
