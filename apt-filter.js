//Only start playing with this file if you're done with all the basics

const must = (radio) => radio.filter(rb => rb.checked).length //returns all radio buttons (chechboxes) that are checked - the function checks how many were checked

const findRelevantApts2 = function (address, minPrice, maxPrice, minRooms, maxRooms, immediate,parking) {
    debugger
    let relevantApts = apartments.filter(a =>
        a.address.toLowerCase().includes(address.toLowerCase() || "") &&
        a.price >= (minPrice || 0) &&
        a.price <= (maxPrice || a.price) &&
        a.rooms >= (minRooms || 0) &&
        a.rooms <= (maxRooms || a.rooms)
    )
    
    immediate = !immediate[0].checked // extracts the boolean value of this radio button, populated by jQuery, and changes it to the other value (true => false, false => true)
    parking = !parking[0].checked

    relevantApts = immediate ? relevantApts : relevantApts.filter(a => (a.immediate))
    relevantApts = parking ? relevantApts : relevantApts.filter(a => a.parking)

    return relevantApts
}


const findRelevantApts = function(address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking) {
    let filteredApt = []

    for (let apt of apartments) {
        
        let checkingArr = []
        
        for (let key in apt) {   //iterates over each key in an object
            
            switch (key) {       //iterates over the relevant properties in the original array, and checks if there's a match
                
                case 'address':
                    checkingArr.push(apt.address.toLowerCase().includes(address.toLowerCase() || '') ? true : false)
                    break

                case 'price':
                    checkingArr.push(apt.price >= (minPrice || 0) && apt.price <= (maxPrice || apt.price) ? true : false)
                    break

                case 'rooms':
                    checkingArr.push(apt.rooms >= (minRooms || 0) && apt.rooms <= (maxRooms || apt.rooms) ? true : false)
                    break

                case 'parking':
                    let isParkingClicked = parking[0].checked
                    if (isParkingClicked) {
                        checkingArr.push(apt.parking == true ? true : false)
                    }
                    else {
                        checkingArr.push(true)
                    }
                    break;

                case 'immediate':
                    let isImeddiateClicked = immediate[0].checked
                    if (isImeddiateClicked) {
                        checkingArr.push(apt.immediate == true ? true : false)
                    }
                    else {
                        checkingArr.push(true)
                    }
                    break
                    
                default:
                    break
                }
            }
            if (!checkingArr.includes(false) && checkingArr.length != 0) {
                filteredApt.push(apt)
            }
        }
        
    return filteredApt
};