let indexPhoto = 1;

showPhoto(indexPhoto);

function nextPhoto() {
    showPhoto(indexPhoto += 1);
}

function previousPhoto() {
    showPhoto(indexPhoto -= 1);
}

function showPhoto(n) {
    let photos = document.getElementsByClassName('item');

    if(n > photos.length){
        indexPhoto = n - photos.length;
    }else if (n == 0) {
        indexPhoto = photos.length;
    }
    else if (n < 0) {
        indexPhoto = photos.length + n;
    } 

    console.log(indexPhoto);

    for (let photo of photos) {
        photo.style.display = 'none';
    }

    photos[indexPhoto - 1].style.display = 'block';
}