function toggleLayout() {
    var layout1 = document.getElementById("layout1");
    var layout2 = document.getElementById("layout2");

    if (layout1.style.display === "none") {
      layout1.style.display = "block";
      layout2.style.display = "none";
    } else {
      layout1.style.display = "none";
      layout2.style.display = "block";
    }
  }

  let result = document.getElementById('result');
  let equation = '';
  
  function appendNumber(num) {
      equation += num;
      result.value = equation;
  }
  
  function appendOperator(operator) {
      equation += operator;
      result.value = equation;
  }
  
  function calculate() {
      try {
          const evaluation = eval(equation);
          result.value = evaluation;
          equation = evaluation;
      } catch (error) {
          result.value = 'Error';
      }
  }
  
  function clearResult()
  