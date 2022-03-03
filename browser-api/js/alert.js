console.log('linked');

// alert('Welcome buddy !!! ')
const alertMsg = () => {
    alert('why are you here ??? go to sleep .');
}
const goingTour = () => {
    const result = confirm('Are you interest to go with us ? ')
    console.log(result);
    if (result === true) {
        alert('tk Bkash kore de ')
    }
    else {
        alert('dureee giya mor !!!!')
    }
}

const sendMoney = () => {
    const money = prompt('Send Money 5000 for confirm your tour list')
    if (money === 5000) {
        alert('okay your name listed')
        console.log('get 5000 tk');
    }
    else {
        prompt('Send Money 5000 for confirm your tour list')
    }
}