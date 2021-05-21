class Park {

    public readonly id = ""
    public readonly name = ""
    public readonly description = ""
    public readonly location = ""
    public readonly image = ""

    constructor(id, name, description, location, image) {
        this.id = id
        this.name = name
        this.description = description
        this.location = location
        this.image = image
    }
}

class Impression<T>{
    constructor(newContent: T) {
        this.content = newContent
    }
    content: T
    toString: ()=>string
}

class ImpressionComment extends Impression<string>{
    toString = () => {
        return this.content
    }
}

class ImpressionStars extends Impression<number>{    
    toString = () => {

    let stars = ["⭐️", "⭐️⭐️", "⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️", "⭐️⭐️⭐️⭐️⭐️"]
        if (this.content >= 1 && this.content <= 5) {
            return stars[this.content -1]
        }
    }
}


class Rating {

    public readonly visitorName : string
    public readonly impression : ImpressionComment | ImpressionStars

    constructor( newName : string, newImpression : ImpressionComment|ImpressionStars ) {
        this.visitorName = newName
        this.impression = newImpression
    }
}


type ParkWithRating = [Park, Rating[]]

// variables -----------------------------------------------------

var venueCatalogue : ParkWithRating[] = []
// venueCatalogue.push(new Park("p001", "Yosemite", "Home of the Half Dome and El Capitan.", "California", "images/yosemite.jpg"))
// venueCatalogue.push(new Park("p002", "Yellowstone", "The first national park of the United States.", "Wyoming", "images/yellowstone.jpg"))
// venueCatalogue.push(new Park("p003", "Volcano", "New lands in the making. Witness Mother Nature at work!", "Hawaii", "images/volcano.jpg"))
// venueCatalogue.push(new Park("p004", "Zion", "Follow the paths where ancient native people and pioneers walked.", "Utah", "images/zion.jpg"))
// venueCatalogue.push(new Park("p005", "Acadia", "Highest rocky headlands along the Atlantic coastline of the United States.", "Maine", "images/acadia.jpg"))
// venueCatalogue.push(new Park("p006", "Denali", "Solitude, tranquility and wilderness await.", "Alaska", "images/denali.jpg"))

// var ratings : Rating[] = []
// ratings.push(new Rating("p001", "Katie", "Best park ever!"))
// ratings.push(new Rating("p001", "Mike", "How did I not do this sooner?"))
// ratings.push(new Rating("p001", "Johan", "Classic, a must-see!"))
// ratings.push(new Rating("p001", "Hector", 4))
// ratings.push(new Rating("p001", "Kamal", 3))

// ratings.push(new Rating("p002", "Katie", "Sensational! Book early in the summer!"))
// ratings.push(new Rating("p002", "Mike", "It was amazing!"))
// ratings.push(new Rating("p002", "Marianne", "Simply inspirational!"))

// ratings.push(new Rating("p003", "Syd", 5))
// ratings.push(new Rating("p003", "Peter", 3))
// ratings.push(new Rating("p003", "X. Zheng", 4))
// ratings.push(new Rating("p003", "Han", "Felt like out of this world!"))

// ratings.push(new Rating("p004", "Jim", "How did I not do this sooner?"))
// ratings.push(new Rating("p004", "S. Patel", "Classic, a must-see!"))
// ratings.push(new Rating("p004", "Gloria", 3))
// ratings.push(new Rating("p004", "Samuel G.", 4))
// ratings.push(new Rating("p001", "Katie", new ImpressionComment("Best park ever!")))
// ratings.push(new Rating("p001", "Mike", new ImpressionComment("How did I not do this sooner?")))
// ratings.push(new Rating("p001", "Johan", new ImpressionComment("Classic, a must-see!")))
// ratings.push(new Rating("p001", "Hector", new ImpressionStars(4)))
// ratings.push(new Rating("p001", "Vidya", new ImpressionStars(5)))

// ratings.push(new Rating("p002", "Katie", new ImpressionComment("Sensational! Book early in the summer!")))
// ratings.push(new Rating("p002", "Mike", new ImpressionComment("It was amazing!")))
// ratings.push(new Rating("p002", "Marianne", new ImpressionComment("Simply inspirational!")))

// ratings.push(new Rating("p003", "Syd", new ImpressionStars(5)))
// ratings.push(new Rating("p003", "Peter", new ImpressionStars(3)))
// ratings.push(new Rating("p003", "X. Zheng", new ImpressionStars(4)))
// ratings.push(new Rating("p003", "Han", new ImpressionComment("Felt like out of this world!")))

// ratings.push(new Rating("p004", "Jim", new ImpressionComment("How did I not do this sooner?")))
// ratings.push(new Rating("p004", "S. Patel", new ImpressionComment("Classic, a must-see!")))
// ratings.push(new Rating("p004", "Gloria", new ImpressionStars(3)))
// ratings.push(new Rating("p004", "Samuel G.", new ImpressionStars(4)))

venueCatalogue.push(
    // make a new tuple
    [
        new Park("p001", "Yosemite", "Home of the Half Dome and El Capitan.", "California", "images/yosemite.jpg"),

        // array of ratings
        [
            new Rating("Katie", new ImpressionComment("Best park ever!")),
            new Rating("Mike", new ImpressionComment("How did I not do this sooner?")),
            new Rating("Johan", new ImpressionComment("Classic, a must-see!")),
            new Rating("Hector", new ImpressionStars(4)),
            new Rating("Vidya", new ImpressionStars(5))
        ]
    ]
)

venueCatalogue.push(
    // make a new tuple
    [
        new Park("p002", "Yellowstone", "The first national park of the United States.", "Wyoming", "images/yellowstone.jpg"),

        // array of ratings
        [
            new Rating("Katie", new ImpressionComment("Sensational! Book early in the summer!")),
            new Rating("Mike", new ImpressionComment("It was amazing!")),
            new Rating("Johan", new ImpressionComment("Simply inspirational!"))
        ]
    ]
)

venueCatalogue.push(
    // make a new tuple
    [
        new Park("p003", "Volcano", "New lands in the making. Witness Mother Nature at work!", "Hawaii", "images/volcano.jpg"),

        // array of ratings
        [
            new Rating("Syd", new ImpressionStars(5)),
            new Rating("Peter", new ImpressionStars(3)),
            new Rating("X. Zheng", new ImpressionStars(4)),
            new Rating("Han", new ImpressionComment("Felt like out of this world!"))
        ]
    ]
)

venueCatalogue.push(
    // make a new tuple
    [
        new Park("p004", "Zion", "Follow the paths where ancient native people and pioneers walked.", "Utah", "images/zion.jpg"),

        // array of ratings
        [
            new Rating("Jim", new ImpressionComment("How did I not do this sooner?")),
            new Rating("S. Patel", new ImpressionComment("Classic, a must-see!")),
            new Rating("Gloria", new ImpressionStars(3)),
            new Rating("Samuel G.", new ImpressionStars(4))
        ]
    ]
)

venueCatalogue.push(
    // make a new tuple
    [
        new Park("p005", "Acadia", "Highest rocky headlands along the Atlantic coastline of the United States.", "Maine", "images/acadia.jpg"),

        // array of ratings
        []
    ]
)

venueCatalogue.push(
    // make a new tuple
    [
        new Park("p006", "Denali", "Solitude, tranquility and wilderness await.", "Alaska", "images/denali.jpg"),

        // array of ratings
        []
    ]
)

// functions -----------------------------------------------------


function buildImpressionSectionFor(ratingsForVenue: Rating[]) : string {

    var resultString = ""

    const htmlTemplate = 
    `<p class="park-rating">~~impression~~ - ~~visitor-name~~</p>`

    ratingsForVenue.forEach(entry => {
        
        var entryHtml = ""

entryHtml = htmlTemplate.replace("~~impression~~", entry.impression.toString)
        entryHtml = entryHtml.replace("~~visitor-name~~", entry.visitorName)
        resultString += entryHtml
    })

    if (resultString.length > 0) {
        resultString = "<p class='reviews-heading'>What visitors say:</p><hr class='reviews-hr'>" + resultString
    }
    return resultString
}

function buildParkTable() {

    const htmlTemplate = 
   `<td class="park-image">
        <img class="park-image" src="~~image~~" alt="image">
    </td>
    <td>
        <p class="park-name">~~name~~</p>
        <p class="park-location">~~location~~</p>
        <p class="park-description">~~description~~</p>
        ~~impression-section~~
    </td>`

    let parkTable = <HTMLTableElement>document.getElementById("park-table")

    if (parkTable == null) return

    venueCatalogue.forEach((park, index) =>  {

        let row = parkTable.insertRow(index)
        row.className = "park-row"

        let rowHTML = htmlTemplate.replace("~~index~~", index.toString())

        rowHTML = rowHTML.replace("~~image~~", park[0].image)
        rowHTML = rowHTML.replace("~~name~~", park[0].name.toUpperCase())
        rowHTML = rowHTML.replace("~~location~~", park[0].location)
        rowHTML = rowHTML.replace("~~description~~", park[0].description)
        rowHTML = rowHTML.replace("~~impression-section~~", buildImpressionSectionFor(park[1]))

        row.innerHTML = rowHTML
    })
}

buildParkTable()