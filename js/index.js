function getInputValue(elementId)
{
    const textField = document.getElementById(elementId);
    const textFieldString = textField.value;
    const value = parseFloat(textFieldString);
    return value;
}

function setValue(id, values)
{
    const textField = document.getElementById(id);
    
    textField.innerText = values;
    
}

function calculationBtn()
{
    /// input section
   const totalIncome = getInputValue('Total-income');
   
   const foodCost = getInputValue('food-cost');
   const rentCost = getInputValue('rent-Cost');
   const clothesCost = getInputValue('clothes-Cost');

   if(isNaN(totalIncome) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost))
   {
    alert('pls valid number');
    return;
   }
  
   const allCost = foodCost + rentCost + clothesCost ;
   const totalIncomeAllCost = totalIncome - allCost;

    /// display section
      
    setValue('total-Espenses', allCost);
    setValue('Balance', totalIncomeAllCost);


    

}


function savingCalculation()
{
    const totalIncome = getInputValue('Total-income');
   const foodCost = getInputValue('food-cost');
   const rentCost = getInputValue('rent-Cost');
   const clothesCost = getInputValue('clothes-Cost');
   const saving = getInputValue('saveing');
   if(isNaN(totalIncome) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost) || isNaN(saving))
   {
    alert('pls valid number');
    return;
   }
  
   const allCost = foodCost + rentCost + clothesCost ;
   const totalIncomeAllCost = totalIncome - allCost;

    const saveingCalculation = (totalIncome / 100) * saving;
    const totalBalance = totalIncomeAllCost - saveingCalculation;

    setValue('saving-Amount', saveingCalculation);
    setValue('remainingBalance', totalBalance);






    
    const totalExpenses = document.getElementById('total-Espenses');
    const Balance = document.getElementById('Balance');
    const savingAmount = document.getElementById('saving-Amount');
    const remainingBalance = document.getElementById('remainingBalance');


}