function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}





function nowServing (katzDeliLine) {
  if (katzDeliLine.length>0) {
     console.log(`Currently serving ${katzDeliLine[0]}.`);
      return katzDeliLine.shift(katzDeliLine[0]);
  } else {
     return `There is nobody waiting to be served!`;
  }
}




function currentLine (katzDeliLine) {
  if (katzDeliLine.length>0) {
    for (let i = 1; i<katzDeliLine.length + 1; i++){
    return `The Line is currently: ${i}. ${katzDeliLine[i-1]}`;
    }
  } else { 
    return `The line is currently empty.`;
  }
  
}