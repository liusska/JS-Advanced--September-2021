function pie(pies, startPie, endPie){
    const startIdx = pies.indexOf(startPie);
    const endIdx = pies.indexOf(endPie);
    return  pies.slice(startIdx, endIdx + 1);
}

console.log(pie(['Pumpkin Pie',
            'Key Lime Pie',
            'Cherry Pie',
            'Lemon Meringue Pie',
            'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'

))

console.log(pie(['Apple Crisp',
            'Mississippi Mud Pie',
            'Pot Pie',
            'Steak and Cheese Pie',
            'Butter Chicken Pie',
            'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'

))