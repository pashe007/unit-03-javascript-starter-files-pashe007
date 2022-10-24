function getGrade (total){
  if (total > 90)  {
    console.log('The student grade: A+')
  } else if (total > 80 && total <= 90){
    console.log('The student grade: A')
  } else if (total > 70 && total <= 80){
    console.log('The student grade: B')
  } else if (total > 60 && total <= 70){
    console.log('The student grade: C')
  } else if (total > 50 && total <= 60){
    console.log('The student grade: D')
  } else if (total > 40 && total <= 50){
    console.log('The student grade: E')
  } else if (total > 30 && total <= 40){
    console.log('The student grade: F')
  }  else {
    console.log ('The student grade: Fail')
      }
  }

getGrade(30)

//conditional ternary operator//

function gateFee (isMember){
    return isMember ? '£2' : '£10';
}
console.log(gateFee(true));
console.log(gateFee(false));
console.log(gateFee(1));
console.log(gateFee(0));

const score = (Number)

switch (score){
  case (score > 90):  
    console.log('The student grade: A+');
    break;
   case (score > 80 ):
    console.log('The student grade: A');
    break;
    case (score > 70 ):
    console.log('The student grade: B');
    break;
    case (score > 60 ):
    console.log('The student grade: C');
    break;
    case (score > 50 ):
    console.log('The student grade: D');
    break;
    case (score > 40 ):
    console.log('The student grade: F');
    break;
    default:
    console.log('The student grade: FAIL');
    break;

      }
 

getGrade(63)