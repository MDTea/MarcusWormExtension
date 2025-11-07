let marcusImages = [
    "https://static.wikia.nocookie.net/vrchat-legends/images/f/fb/Marcus_VRChat_portrayed_by_Jouffa.jpg/revision/latest?cb=20250414161015",
    "https://i.pinimg.com/736x/27/07/a4/2707a4ffb2133601e52eccaed4c6c0f9.jpg",
    "https://i.pinimg.com/736x/b4/b7/d6/b4b7d6880bf596412672b4fe7bc260af.jpg",
    "https://i.pinimg.com/736x/e1/b0/49/e1b049e2b0439399b0c9fff6dd6e7fb3.jpg",
    "https://i.pinimg.com/736x/09/a3/fa/09a3fac6dca09283ff864bb91268eb88.jpg",
    "https://i.pinimg.com/736x/5c/b7/b5/5cb7b5e033325eb02ea887bd54ce91f0.jpg",
];

const imgs = document.getElementsByTagName("img");

for(image of imgs){
    const index = Math.floor(Math.random() * marcusImages.length);
    image.src = marcusImages[index];
}