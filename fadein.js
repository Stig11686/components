//check if element is in view
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

//grab whatever elements you need
const images = Array.from(document.querySelectorAll('.slide-in'))

//add scroll event listener - loop through elements
window.addEventListener('scroll', function(){
	images.forEach((image, index) => {
//check they are in viewport
	if(isInViewport(image)){
//wrap in setTimeout function to add class one after the other
		setTimeout(function(){
			image.classList.add('active');
		}, 300 * index)
		} else {
		setTimeout(function(){
			image.classList.remove('active');
		}, 300 * index)
		}
	})
})
