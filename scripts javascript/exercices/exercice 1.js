let option = parseInt(prompt("what do you want to calculate? \n 1-calculate the triangle´s perimeter \n 2-calculate the triangle´s area \n 3-show the formulas for calculating the area and perimeter of the triangle \n enter the number of the option do you want"))

switch(option) {
    case 1:
    let side1 = parseInt(prompt("enter the value of triangle´s first side :"))
    let side2 = parseInt(prompt("enter the value of the triangle second side:"))
    let side3 = parseInt(prompt("enter the value of the triangle third side:"))
    console.log("the perimeter of the triangle is:", side1 + side2 + side3)
    break
    case 2:
    let base = parseInt(prompt("enter the value of triangle´s base:"))
    let height = parseInt(prompt("enter the height of the triangle:"))
    console.log("the area of the triangle is:", base * height / 2)
    break
    case 3:
    console.log("the formula for the area of a triangle is base times=s height divided by two, and the perimeter is the sum of the three sides.")
    break
    default:
    console.log("invalid option")
}