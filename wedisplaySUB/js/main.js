
/*네비메뉴 언더바 생기기,칼라바꾸기*/

const target = document.querySelector('.target');
const links = document.querySelectorAll('.mynav a');
// const colors = ['deepskyblue','orange','black','green','magenta','dackblue'];

for(let i=0; i<links.length; i++){    
    links[i].addEventListener('click',(e)=>preventDefault());
    links[i].addEventListener('mouseenter', mouseeventFunc);    
}

function mouseeventFunc(){
    if(!this.parentNode.classList.contains('active')){
        for(let i=0; i<links.length; i++){
            if(links[i].parentNode.classList.contains('active')){
                links[i].parentNode.classList.remove('active');                
            }
            links[i].style.opacity = '0.25';
        }//마우스가 올라가지 않는 다른메뉴들마다 할일
        this.parentNode.classList.add('active');
        this.style.opacity = '1';


        const width =this.getBoundingClientRect().width;
        const height =this.getBoundingClientRect().height;
        const left =this.getBoundingClientRect().left + window.pageXOffset;
        const top =this.getBoundingClientRect().top + window.pageYOffset;
        // const color = colors[Math.floor(Math.random() * links.length)];
        
        
        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
        // target.style.borderColor = color;
    }
}

/*네비 메뉴 스크롤 내리면 생기기*/  

const header = document.querySelector('header')

window.addEventListener('scroll', function(){
        header.classList.add('on');
    
        if(window.scrollY === 0){
        header.classList.remove('on');
        }
    })



    var swiper2 = new Swiper(".mini_silder", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        breakpoints: {
        640: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 4,
        spaceBetween: 40,
        },
        1024: {
        slidesPerView: 5,
        spaceBetween: 50,
        },
    },
    loop:true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    });




// /* Q&A */

// const sec9_qq = document.querySelectorAll('.often > p > a');
// const sec9_answer = document.querySelectorAll('.sec9_answer');    



// sec9_qq.forEach((item,index)=>{
//     item.onmouseenter = function(){ 
//         sec9_answer[index].classList.add('active')
//     }  
//     item.onmouseleave = function(){ 
//         sec9_answer[index].classList.remove('active')
//     }      
// })



/*mouseover*/

// const asomI = document.getElementById('.asomI');
// const asom_sub = document.querySelector('.asom_sub');

// asomI.forEach((item,index)=>{
//     item.onmouseenter =function(){
//         asom_sub[index].classList.add('hidden')
//     }
//     item.onmouseleave = function(){ 
//         asom_sub[index].classList.remove('hidden')
//     }   
// })



    const asomI = document.querySelectorAll('.asomI');
    const asom_sub = document.querySelectorAll('.asom_sub');

    asomI.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        asom_sub[index].classList.add('hidden');
    });

    item.addEventListener('mouseleave', () => {
        asom_sub[index].classList.remove('hidden');
    });
    });

