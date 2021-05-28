var imagesData = [
    {
    photo: 'images/road.jpeg',
    thumb: "images/thumbnails/road_tumbnail.jpeg",
    title: 'Road',
    description: 'Black and white photo of the road.'
    },

    {
    photo: 'images/park.jpeg',
    thumb: "images/thumbnails/park_tumbnail.jpeg",
    title: 'Park',
    description: 'Black and white photo of the park.'
    },

    {
    photo: 'images/sea.jpeg',
    thumb: "images/thumbnails/sea_tumbnail.jpeg",
    title: 'Sea',
    description: 'Black and white photo of the sea.'
    }
]

  var currentPhoto = 0
  var activeIndex = currentPhoto

var loadImageContainer = function(currentPhoto) {
    $("#photo").attr("src", imagesData[currentPhoto].photo)
    $("#photo-title").text(imagesData[currentPhoto].title)
    $("#image-description").text(imagesData[currentPhoto].description)
}

function loadThumbnails(itemData, index) {
    $("#thumbnails-container").append(
        `<div class="thumbnail-box">
            <img class="thumbnail" data-idx="${index}" src="${itemData.thumb}">
            <p class="title">${itemData.title}</p>
        </div>`
    )
}

loadImageContainer(currentPhoto)
imagesData.forEach(loadThumbnails)
$(`.thumbnail[data-idx="${activeIndex}"]`).css({"box-shadow": "0 4px 8px black"})

$(".left").click(function() {
    activeIndex = currentPhoto
    if(currentPhoto > 0) {
        currentPhoto--
    } else {
        currentPhoto = imagesData.length - 1
    }
    loadImageContainer(currentPhoto)
    activeThumbnail(activeIndex)
})

$(".right").click(function() {
    activeIndex = currentPhoto
    if(currentPhoto < imagesData.length - 1) {
        currentPhoto++
    } else {
        currentPhoto = 0
    }
    loadImageContainer(currentPhoto)
    activeThumbnail(activeIndex)
})   

$(".thumbnail").click(function(event) {
    activeIndex = currentPhoto
    var idxClicked = $(event.target).attr("data-idx")
    var idxNumber = parseInt(idxClicked)
    currentPhoto = idxNumber
    activeThumbnail(activeIndex)
    loadImageContainer(currentPhoto)
})

function activeThumbnail (activeIndex) {
    $(`.thumbnail[data-idx="${activeIndex}"]`).removeAttr("style")
    activeIndex = currentPhoto
    $(`.thumbnail[data-idx="${activeIndex}"]`).css("box-shadow", "0 4px 8px black")
}
