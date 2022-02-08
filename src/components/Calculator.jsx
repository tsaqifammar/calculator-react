import React, { useState } from 'react';
import DisplayExpression from './DisplayExpression';
import Button from './Button';

const Calculator = () => {
	const operators = ['+', '-', '*', '/'];
  const btnVals = ['<', ...operators, '=', '.', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

	const [expression, setExpression] = useState('');

	const buttonHandler = (val) => {
		if (val === '=') submitBtnHandler();
		else if (val >= '0' && val <= '9') numberBtnHandler(val);
		else if (operators.includes(val)) operatorBtnHandler(val);
		else if (val === '.') dotBtnHandler();
		else backspaceBtnHandler();
	};

	const numberBtnHandler = (num) => {
		if (expression === '0' && num === '0') return;
		setExpression(expression + num);
	};

	const operatorBtnHandler = (op) => {
		if (expression.length === 0) {
			if (op === '-') setExpression(op);
		} else {
			const lastChar = expression.slice(-1);
			if (operators.includes(lastChar)) {
        setExpression(expression.slice(0, -1) + op);
			} else {
        setExpression(expression + op);
			}
		}
	};
  
  const dotBtnHandler = () => {
    if (expression.length === 0 || operators.includes(expression.slice(-1))) {
      setExpression(expression + '0.');
    } else {
			if (expression.slice(-1) === '.') return;
			setExpression(expression + '.');
		}
  };
  
  const backspaceBtnHandler = () => {
    if (expression) setExpression(expression.slice(0, -1));
  };

	const submitBtnHandler = () => {
    setExpression(eval(expression).toString());
	};

	return (
		<div className="container" id="calculator-content">
			<DisplayExpression expression={expression} />
			<div id="numpad">
				{btnVals.map((val, index) => {
					let btnClass = val === '=' ? 'submit' : 'default';
					return (
						<Button
							key={val}
							value={val}
							position={index + 1}
							btnClass={btnClass}
							onPressed={buttonHandler}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Calculator;
