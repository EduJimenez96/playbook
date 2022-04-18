class Repo{
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open
        this.issues_close = issues_close
    }

    getTotalIssues() {
        return this.issues_open + this.issues_close
    }

    getGeneralInfo() {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

const repo = new Repo("LaunchX", "carlogilmar", "JavaScript", 100, 199, 299, 10, 10)

console.log("Clase:")
console.log(repo)
console.log("Nombre del repo: " + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

class Twitter{
    constructor(user, trendingTopic, hashTag){
        this.user = user
        this.trendingTopic = trendingTopic
        this.hashTag = hashTag
    }

    getTrendingTopicNumberOne() {
        return this.trendingTopic[0]
    }

    getHashtag() {
        return `${this.user}\'s hashtag is: ${this.hashTag}`
    }
}

const twitter = new Twitter("Eduardo", ['Fútbol', 'Astronomía', 'Videojuegos', 'Metal', 'Gatitos'], "#hallo")

console.log("\nClase:");
console.log(twitter);
console.log("Usuario de Twitter: " + twitter.user)
console.log("Mejor trending topic: " + twitter.getTrendingTopicNumberOne())
console.log(twitter.getHashtag())

class Facebook{
    constructor(user, bio, status, photos){
        this.user = user
        this.bio = bio
        this.status = status
        this.photos = photos
    }

    getTotalPosts() {
        return this.status + this.photos
    }

    getBio() {
        return `${this.user}\'s bio says: ${this.bio}`
    }
}

const facebook = new Facebook("Eduardo", "Sólo soy una persona que disfruta de su efímera estadía en este longevo universo", 16, 22)

console.log("\nClase:");
console.log(facebook);
console.log("Usuario de Facebook: " + facebook.user)
console.log("Total de publicaciones: " + facebook.getTotalPosts())
console.log(facebook.getBio())

class Uber {
    constructor(profile, origin, destiny){
        this.profile = profile
        this.origin = origin
        this.destiny = destiny
    }

    getTravel() {
        return `${this.profile} traveled from ${this.origin} to ${this.destiny}`
    }
}

const uber = new Uber("Eduardo", "Jalisco", "Ushuaia")

console.log("\nClase:");
console.log(uber);
console.log("Perfil de Uber: " + uber.profile)
console.log(uber.getTravel())
