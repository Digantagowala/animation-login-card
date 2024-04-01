// document.addEventListener('DOMContentLoaded',()=>{
//     const span = document.querySelectorAll('.boxes span');
//     span.forEach((span) =>{
//         span.addEventListener('mouseenter',() =>{
//             span.style.backgroundColor = '#00494d4'

//         })
//         span.addEventListener ('mouseleave', ()=>{
//             span.style.backgroundColor = '#00b2ff';
//         setTimeout(() => {
//             span.style.backgroundColor = '';
            
//         }, 2000);
//     })
   
        
//     })
document.addEventListener('DOMContentLoaded', ()=>{
     const span = document.querySelectorAll('.boxes span');
     span.forEach((span) =>{
        span.addEventListener('mouseenter', () => {
            span.style.backgroundColor = '#00694d4'
        });
        span.addEventListener('mouseleave', () => {
            span.style.backgroundColor ='#00b2ff'
            setTimeout(() => {
                span.style.backgroundColor =''
            }, 2000);
        })
     })
})


