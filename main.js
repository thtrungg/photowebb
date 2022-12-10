const videoPlayer = document.querySelector('.video-player');
const player = document.querySelector('.video');
const playButton = document.querySelector('.play-button');



function onPlayerReady(event){
  var playButton = document.getElementsByClassName("play-button")
  playButton.addEventListener('click', function() {
    player.videoPlayer();
  })
}


var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-img img')
var preBtn = document.querySelector('#prev')
var nextBtn = document.querySelector('#next')

var currentIndex = 0; 
function updateIndex(index){
  //remove active
  document.querySelectorAll('.list-img div').forEach( item => {
    item.classList.remove('active')
  })

  currentIndex = index;
  imgFeature.src = listImg[index].getAttribute('src')
  listImg[index].parentElement.classList.add('active')
}

updateIndex(0);

listImg.forEach((imgElement, index)=>{

  imgElement.addEventListener('click', e=>{
    updateIndex(index)
  })
})

preBtn.addEventListener('click', e=> {
  if(currentIndex==0){
    currentIndex = listImg.length - 1
  }
  else{
    currentIndex--
  }

  updateIndex(currentIndex)
})

nextBtn.addEventListener('click', e=> {
  if(currentIndex == listImg.length-1){
    currentIndex = 0
  }
  else{
    currentIndex++
  }

  updateIndex(currentIndex)
})


