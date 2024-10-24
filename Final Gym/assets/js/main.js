/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close')
/*================Menu show========================*/
/*================Validate if constant exists========================*/
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
/*================Validate if constant exists========================*/
/*================Menu Hidden========================*/
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link')
const linkAction= () => {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav_link,we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader=()=>{
    const header =document.getElementById('header')
    //when the scroll is greater than 50 view port height ,addthe scroll-header class to the header tag
    this.scrollY>=50?header.classList.add('bg-header') 
                    :header.classList.remove('bg-header') 
}
window.addEventListener('scroll',scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections =document.querySelectorAll('section[id]')

const scrollActive=()=>{
    const scrollY=window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
        sectionTop=current.offsetTop - 58,
        sectionId=current.getAttribute('id'),
        sectionsClass=document.querySelector('.nav__menu a[href*='+sectionId+']')
        if(scrollY>sectionTop&&scrollY<=sectionTop+sectionHeight){
            sectionsClass.classList.add('active=link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll',scrollActive)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollup=()=>{
    const scrollUp=document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height ,add the show-scroll class to the a tag with a scrollup
    this.scrollY>=350?scrollUp.classList.add('show-scroll')
                     :scrollUp.classList.remove('show-scroll')

}

/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateForm=document.getElementById('calculate-form'),
      calculateCm=document.getElementById('calculate-cm'),
      calculateKg=document.getElementById('calculate-kg'),
      calculateMessage=document.getElementById('calculate-message')

const calculateBmi = (e) => {
    e.preventDefault()
    //check if the fields have value
    if(calculateCm.value === ''|| calculateKg.value === ''){
        //add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')
        //show Message
        calculateMessage.textContent = 'Fill in the height and Weight😎'
        //Remove message after 3 seconds
        setTimeout(()=>{
            calculateMessage.textContent=''
        },3000)
    }else{
        //BMI formula
        const cm=calculateCm.value/100,
              kg=calculateKg.value,
              bmi=Math.round(kg/(cm*cm))
              //show your health status
              if (bmi<18.5){
                calculateMessage.classList.add('color-green')
                calculateMessage.textContent=`Your BMI is ${bmi} ,You are under-weight👀`
               

              }
              else if(bmi<=25){
                calculateMessage.classList.add('color-green')
                calculateMessage.textContent=`Your BMI is ${bmi} ,You are Perfectly Healthy😉`
               

              }
              else{
                calculateMessage.classList.add('color-green')
                calculateMessage.textContent=`Your BMI is ${bmi} ,You are Over-weight👀`
               
              }
              //to clear the input fields
              calculateCm.value=''
              calculateKg.value=''
              setTimeout(()=>{
                calculateMessage.textContent=''
              },4000)
    }
    
}

calculateForm.addEventListener('submit',calculateBmi)

/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById('contact-form'),
    contactMessage=document.getElementById('contact-message'),
    contactUser=document.getElementById('contact-user');
const sendEmail = (e) =>{
    e.preventDefault()
    //check if the fields have value
    if(contactUser.value===''){
        //addand remove color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')
        //show message
        contactMessage.textContent='You  Must Enter Your Email 👆👆🏿👆🏽'
        //remove message after 3 seconds
        setTimeout(()=>{
            contactMessage.textContent=''
        },3000)
    }else{
        // serviceID - templateID - #form - publicKey
        emailjs('service_6jxn9u6','template_296vxee','#contact-form','96u8qobVTwi0ie2ZC')
        .then(()=>{
            //show message and add color
            contactMessage.classList.add('color-green')
            contactMessage.textContent='you registered successfully'
            //removing the messsage after 3 seconds
            setTimeout(()=>{
     contactMessage.textContent=''
            },3000)
            
        },(error)=>{
            //Mail sending error
            alert('OOPS!  something has failed...',error)
        }
    )//to clear the input fields
    contactUser.value=''

    }
}
contactForm.addEventListener('submit',sendEmail)