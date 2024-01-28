window.onload = function() {
    var images = [
        'Sally_drawing.jpg',
        'Lucy_drawing.jpg',
        'Aggie_drawing.jpg',
        'Coco_drawing.jpg',
        'Luli_drawing.jpg',
        'Snowy_drawing.jpg',
        'Tony_drawing.jpg',
        'Nala_drawing.jpg',
        'Ziggy_drawing.jpg',
        'Luna_and_sounder_drawing.jpg',
        'Annie_drawing.jpg',
        'Lucy_puppy.jpg',
        'Guinea_ping.jpg',
        'Apollo_ink_drawing.jpg'
    ];

    var table = document.querySelector('.image-table');
    var tr;

    images.forEach((image, index) => {
        if (index % 4 === 0) {
            tr = document.createElement('tr');
            table.appendChild(tr);
        }

        var td = document.createElement('td');
        var img = document.createElement('img');
        img.src = 'pets/' + image;
        td.appendChild(img);
        tr.appendChild(td);
    });
};