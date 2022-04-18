const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function () {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function () {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const twitter = {
    user: "Eduardo",
    trendingTopic: ['Fútbol', 'Astronomía', 'Videojuegos', 'Metal', 'Gatitos',],
    hashtag: "#hallo",

    getTrendingTopicNumberOne: function () {
        return this.trendingTopic[0]
    },
    getHashtag: function () {
        return `${this.user}\'s hashtag is: ${this.hashtag}`
    }
}

console.log("Usuario de Twitter: " + twitter.user)
console.log("Mejor trending topic: " + twitter.getTrendingTopicNumberOne())
console.log(twitter.getHashtag())


const facebook = {
    user: "Eduardo",
    bio: "Sólo soy una persona que disfruta de su efímera estadía en este longevo universo",
    status: 16,
    photos: 22,    

    getTotalPosts: function () {
        return this.status + this.photos
    },
    getBio: function () {
        return `${this.user}\'s bio says: ${this.bio}`
    }
}

console.log("Usuario de Facebook: " + facebook.user)
console.log("Total de publicaciones: " + facebook.getTotalPosts())
console.log(facebook.getBio())

const uber = {
    profile: "Eduardo",
    origin: "Jalisco", 
    destiny: "Ushuaia",
    
    getTravel: function () {
        return `${this.profile} traveled from ${this.origin} to ${this.destiny}`
    }
}

console.log("Perfil de Uber: " + uber.profile)
console.log(uber.getTravel())
