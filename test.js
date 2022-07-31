function copy_clipboard(text) {
    navigator.clipboard.writeText(text);
}

function switch_bop(img_id)
{
    let image = document.getElementById(img_id);
    if (image.getAttribute('src') === 'images/bop_open.png') {
        image.setAttribute('src', 'images/bop_close.png');
    } else {
        image.setAttribute('src', 'images/bop_open.png');
    }
};
