export default function calc() {
   //Имплементация калькулятора активности
   const male = document.querySelector('#male');
   const female = document.querySelector('#female');

   const userHeight = document.querySelector('#height');
   const userWeight = document.querySelector('#weight');
   const userAge = document.querySelector('#age');

   const low = document.querySelector('#low');
   const small = document.querySelector('#small');
   const medium = document.querySelector('#medium');
   const high = document.querySelector('#high');
   const activitiyBtn = [low, small, medium, high];
   let BMR = 0;
   let indexActivity = 1.375;
   let calories = 0;


   const btnCalculatingChoose = document.querySelectorAll('.calculating__choose');
   btnCalculatingChoose.forEach(item => item.addEventListener('click', (e) => {
      if(e.target.id === 'female') {
         female.classList.add('calculating__choose-item_active');
         male.classList.remove('calculating__choose-item_active');
      } else if(e.target.id === 'male') {
         male.classList.add('calculating__choose-item_active');
         female.classList.remove('calculating__choose-item_active');
      } else if(e.target.id === 'low') {
         activitiyBtn.forEach(item => item.classList.remove('calculating__choose-item_active'));
         low.classList.add('calculating__choose-item_active');
         indexActivity = 1.2;
      } else if(e.target.id === 'small') {
         activitiyBtn.forEach(item => item.classList.remove('calculating__choose-item_active'));
         small.classList.add('calculating__choose-item_active');
         indexActivity = 1.375;
      } else if(e.target.id === 'medium') {
         activitiyBtn.forEach(item => item.classList.remove('calculating__choose-item_active'));
         medium.classList.add('calculating__choose-item_active');
         indexActivity = 1.55;
      } else if(e.target.id === 'high') {
         activitiyBtn.forEach(item => item.classList.remove('calculating__choose-item_active'));
         high.classList.add('calculating__choose-item_active');
         indexActivity = 1.725;
      };
   }));

   const activityСalculation = () => {
      if(userHeight.value != '' && userWeight.value != '' && userAge.value != '' &&  Number(userHeight.value)>0 && Number(userAge.value)>0 && Number(userWeight.value)>0 &&  Number(userHeight.value)<280 && Number(userAge.value)<=120 && male.classList.contains('calculating__choose-item_active')) {
         BMR = 88.36 + (13.4 * Number(userWeight.value)) + (4.8 * Number(userHeight.value)) - (5.7 * Number(userAge.value));
         calories = Math.round(BMR * indexActivity);
      } else if(userHeight.value != '' && userWeight.value != '' && userAge.value != '' &&  Number(userHeight.value)>0 && Number(userAge.value)>0 && Number(userWeight.value)>0 &&  Number(userHeight.value)<280 && Number(userAge.value)<=120 && female.classList.contains('calculating__choose-item_active')) {
         BMR = 447.6 + (9.2 * Number(userWeight.value)) + (3.1 * Number(userHeight.value)) - (4.3 * Number(userAge.value));
         calories = Math.round(BMR * indexActivity);
      }
   }

   setInterval(()=>{
      activityСalculation();
      document.querySelector('#calories').textContent = calories;
   },1000)
}