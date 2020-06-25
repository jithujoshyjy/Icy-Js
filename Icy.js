//Icy: It's a Cool waY of coding
class Icy {
  constructor(expression) {
    if(typeof expression === "string") {
        this.expression = expression;
    }
    else throw new Error("Invalid Argument");
    }
	objectify(val) {
	//arg1: a value of any type
	//intent: takes a value and creates an object with a single key:value pair
	//returns: object
	if((typeof val === "string" && val !== "") || typeof val === "number" || typeof val === "boolean" || val === Infinity || val === NaN) {
	let key, value;
	let num = val,
			 decimalPoint = val.toString().includes("."),
			 negativeInt = val < 0,
			specialType = (val === Infinity || val === NaN);
	if(typeof val === "number") {
	 if(negativeInt || decimalPoint) {
		if(negativeInt)
			num = `${num.toString().replace("-", "minus")}`;
		if(decimalPoint)
			num = `${negativeInt ? "" : "_"}${num.toString().replace(".", "dot")}`;
		}
		else num = `_${num}`;
		key = num;
		}
	else if(specialType) {
		key = `_${val}`;
		}
	else key = `${val}`;
	value = val;
	return { [key]: value };
	} else {
		let emptyValue = (val === null) || (val === undefined);
		if(emptyValue)
			return{ [`_${val}`]: val };
	}
}//objectify()
    performOperation( _operator, operation) {
    //arg1: string
    //arg2: object
    //intent: based on the operator represented by arg1 execute a corresponding method of arg2
    //returns: any
    let operands = this.expression.split(_operator),
    	operand1, operand2;
        operand1 = eval("(" + operands[0] + ")");
        operand2 = eval("(" + operands[1] + ")");
let T = {
//null
both_op1_op2_null: (operand1 === null && operand2 === null),
op1_null_op2_undef: (operand1 === null && operand2 === undefined),
op1_undef_op2_null: (operand1 === undefined && operand2 === null),
op1_null_op2_bool: (operand1 === null) && (typeof operand2 === "boolean"),
op1_bool_op2_null: (typeof operand1 === "boolean") && (operand2 === null),
op1_null_op2_num: (operand1 === null) && (typeof operand2 === "number"),
op1_num_op2_null: (typeof operand1 === "number") && (operand2 === null),
op1_null_op2_str: (operand1 === null) && (typeof operand2 === "string"),
op1_str_op2_null: (typeof operand1 === "string") && (operand2 === null),
op1_null_op2_arr: (operand1 === null) && (typeof operand2 === "object" && operand2 !== null && operand2.length !== undefined),
op1_arr_op2_null: (typeof operand1 === "object" && operand1 !== null && operand1.length !== undefined) && (operand2 === null),
op1_null_op2_obj: (operand1 === null) && (typeof operand2 === "object" && operand2 !== null && operand2.length === undefined),
op1_obj_op2_null: (typeof operand1 === "object" && operand1 !== null && operand1.length === undefined) && (operand2 === null),
//undefined
both_op1_op2_undef: (operand1 === undefined && operand2 === undefined),
op1_undef_op2_bool: (operand1 === undefined) && (typeof operand2 === "boolean"),
op1_bool_op2_undef: (typeof operand1 === "boolean") && (operand2 === undefined),
op1_undef_op2_num: (operand1 === undefined) && (typeof operand2 === "number"),
op1_num_op2_undef: (typeof operand1 === "number") && (operand2 === undefined),
op1_undef_op2_str: (operand1 === undefined) && (typeof operand2 === "string"),
op1_str_op2_undef: (typeof operand1 === "string") && (operand2 === undefined),
op1_undef_op2_arr: (operand1 === undefined) && (typeof operand2 === "object" && operand2 !== null && operand2.length !== undefined),
op1_arr_op2_undef: (typeof operand1 === "object" && operand1 !== null && operand1.length !== undefined) && (operand2 === undefined),
op1_undef_op2_obj: (operand1 === undefined) && (typeof operand2 === "object" && operand2 !== null && operand2.length === undefined),
op1_obj_op2_undef: (typeof operand1 === "object" && operand1 !== null && operand1.length === undefined) && (operand2 === undefined),
//boolean
both_op1_op2_bool: (typeof operand1 === "boolean") && (typeof operand2 === "boolean"),
op1_bool_op2_num: (typeof operand1 === "boolean") && (typeof operand2 === "number"),
op1_num_op2_bool: (typeof operand1 === "number") && (typeof operand2 === "boolean"),
op1_bool_op2_str: (typeof operand1 === "boolean") && (typeof operand2 === "string"),
op1_str_op2_bool: (typeof operand1 === "string") && (typeof operand2 === "boolean"),
op1_bool_op2_arr: (typeof operand1 === "boolean") && (typeof operand2 === "object" && operand2 !== null && operand2.length !== undefined),
op1_arr_op2_bool: (typeof operand1 === "object" && operand1 !== null && operand1.length !== undefined) && (typeof operand2 === "boolean"),
op1_bool_op2_obj: (typeof operand1 === "boolean") && (typeof operand2 === "object" && operand2 !== null && operand2.length === undefined),
op1_obj_op2_bool: (typeof operand1 === "object" && operand1 !== null && operand1.length === undefined) && (typeof operand2 === "boolean"),
//number
both_op1_op2_num: (typeof operand1 === "number") && (typeof operand2 === "number"),
op1_num_op2_str: (typeof operand1 === "number") && (typeof operand2 === "string"),
op1_str_op2_num: (typeof operand1 === "string") && (typeof operand2 === "number"),
op1_num_op2_arr: (typeof operand1 === "number") && (typeof operand2 === "object" && operand2 !== null && operand2.length !== undefined),
op1_arr_op2_num: (typeof operand1 === "object" && operand1 !== null && operand1.length !== undefined) && (typeof operand2 === "number"),
op1_num_op2_obj: (typeof operand1 === "number") && (typeof operand2 === "object" && operand2 !== null && operand2.length === undefined),
op1_obj_op2_num: (typeof operand1 === "object" && operand1 !== null && operand1.length === undefined) && (typeof operand2 === "number"),
//string
both_op1_op2_str: (typeof operand1 === "string") && (typeof operand2 === "string"),
op1_str_op2_arr: (typeof operand1 === "string") && (typeof operand2 === "object" && operand2 !== null && operand2.length !== undefined),
op1_arr_op2_str: (typeof operand1 === "object" && operand1 !== null && operand1.length !== undefined) && (typeof operand2 === "string"),
op1_str_op2_obj: (typeof operand1 === "string") && (typeof operand2 === "object" && operand2 !== null && operand2.length === undefined),
op1_obj_op2_str: (typeof operand1 === "object" && operand1 !== null && operand1.length === undefined) && (typeof operand2 === "string"),
//array
both_op1_op2_arr: (typeof operand1 === "object" && operand1 !== null && operand1.length !== undefined) && (typeof operand2 === "object" && operand2 !== null && operand2.length !== undefined),
op1_arr_op2_obj: (typeof operand1 === "object" && operand1 !== null && operand1.length !== undefined) && (typeof operand2 === "object" && operand2 !== null && operand2.length === undefined),
op1_obj_op2_arr: (typeof operand1 === "object" && operand1 !== null && operand1.length === undefined) && (typeof operand2 === "object" && operand2 !== null && operand2.length !== undefined),
//object
both_op1_op2_obj: (typeof operand1 === "object" && operand1 !== null && operand1.length === undefined) && (typeof operand2 === "object" && operand2 !== null && operand2.length === undefined)
	}
	for(let type in T) {
		if(T[type]) {
			return operation[type](operand1, operand2);
		}
	}
  }//performOperation()
  addition = () => {
  let array, object, item;
  let operation = {
//null
both_op1_op2_null: (op1, op2) => op1 + op2,
op1_null_op2_undef: (op1, op2) => op1 + op2,
op1_undef_op2_null: (op1, op2) => op1 + op2,
op1_null_op2_bool: (op1, op2) => op1 + op2,
op1_bool_op2_null: (op1, op2) => op1 + op2,
op1_null_op2_num: (op1, op2) => op1 + op2,
op1_num_op2_null: (op1, op2) => op1 + op2,
op1_null_op2_str: (op1, op2) => op1 + op2,
op1_str_op2_null: (op1, op2) => op1 + op2,
op1_null_op2_arr(op1, op2) {
	array = op2;
	item = op1;
	array.unshift(item);
	return array;
	},
op1_arr_op2_null(op1, op2) {
	array = op1;
	item = op2;
	array.push(item);
	return array;
	},
op1_null_op2_obj(op1, op2) {
	object = op2;
	item = this.objectify(op1);		
	Object.assign(object, item);
	return object;
	},
op1_obj_op2_null(op1, op2) {
	object = op1;
	item = this.objectify(op2);
	Object.assign(object, item);
     return object;
	},
//undefined
both_op1_op2_undef: (op1, op2) => op1 + op2,
op1_undef_op2_bool: (op1, op2) => op1 + op2,
op1_bool_op2_undef: (op1, op2) => op1 + op2,
op1_undef_op2_num: (op1, op2) => op1 + op2,
op1_num_op2_undef: (op1, op2) => op1 + op2,
op1_undef_op2_str: (op1, op2) => op1 + op2,
op1_str_op2_undef: (op1, op2) => op1 + op2,
op1_undef_op2_arr(op1, op2) {
	array = op2;
	item = op1;
	array.unshift(item);
	return array;
	},
op1_arr_op2_undef(op1, op2) {
	array = op1;
	item = op2;
	array.push(item);
	return array;
	},
op1_undef_op2_obj(op1, op2) {
	object = op2;
	item = this.objectify(op1);		
	Object.assign(object, item);
	return object;
	},
op1_obj_op2_undef(op1, op2) {
	object = op1;
	item = this.objectify(op2);
	Object.assign(object, item);
     return object;
	},
//boolean
both_op1_op2_bool: (op1, op2) => op1 || op2,
op1_bool_op2_num: (op1, op2) => op1 + op2,
op1_num_op2_bool: (op1, op2) => op1 + op2,
op1_bool_op2_str: (op1, op2) => op1 + op2,
op1_str_op2_bool: (op1, op2) => op1 + op2,
op1_bool_op2_arr(op1, op2) {
	array = op2;
	item = op1;
	array.unshift(item);
	return array;
	},
op1_arr_op2_bool(op1, op2) {
	array = op1;
	item = op2;
	array.push(item);
	return array;
	},
op1_bool_op2_obj(op1, op2) {
	object = op2;
	item = this.objectify(op1);		
	Object.assign(object, item);
	return object;
	},
op1_obj_op2_bool(op1, op2) {
	object = op1;
	item = this.objectify(op2);
	Object.assign(object, item);
     return object;
	},
//number
both_op1_op2_num: (op1, op2) => op1 + op2,
op1_num_op2_str: (op1, op2) => op1 + op2,
op1_str_op2_num: (op1, op2) => op1 + op2,
op1_num_op2_arr(op1, op2) {
	array = op2;
	item = op1;
	array.unshift(item);
	return array;
     },
op1_arr_op2_num(op1, op2) {
	array = op1;
	item = op2;
	array.push(item);
	return array;
	},
op1_num_op2_obj(op1, op2) {
	object = op2;
	item = this.objectify(op1);		
	Object.assign(object, item);
	return object;
	},
op1_obj_op2_num(op1, op2) {
	object = op1;
	item = this.objectify(op2);
	Object.assign(object, item);
     return object;
	},
//string
both_op1_op2_str: (op1, op2) => op1 + op2,
op1_str_op2_arr(op1, op2) {
	array = op2;
	item = op1;
	array.unshift(item);
	return array;
     },
op1_arr_op2_str(op1, op2) {
	array = op1;
	item = op2;
	array.push(item);
	return array;
	},
op1_str_op2_obj(op1, op2) {
	object = op2;
	item = this.objectify(op1);		
	Object.assign(object, item);
	return object;
	},
op1_obj_op2_str(op1, op2) {
	object = op1;
	item = this.objectify(op2);
	Object.assign(object, item);
     return object;
	},
//array
both_op1_op2_arr(op1, op2) {
	array = op1;
    item = op2;
    return array.concat(item);
	},
op1_arr_op2_obj(op1, op2) {
	array = op1;
	item = op2;
	array.push(item);
	return array;
	},
op1_obj_op2_arr(op1, op2) {
	array = op2;
	item = op1;
	array.unshift(item);
	return array;
     },
//object
both_op1_op2_obj(op1, op2) {
	object = op1;
    item = op2;
    Object.assign(object, item);
    return object;
	}
}//operation{}
  return this.performOperation("+", operation);
  }//addition()
  substraction = () => {
  let array, object, item, regex;
  //common methods
  let C = {
		subNorm(op1, op2) {
		//normal substraction
		return op1 - op2;
		},
  subNUB_S(op1, op2) {
	//op1: null || undefined || boolean
	//op2: string
	item = op1;
	if((item + "").includes(op2)) {
		regex = new RegExp(op2, "g");
		item = item + "";
		item = item.replace(regex, "");
		}
	return item;
  	},
	subS_NUB(op1, op2) {
	//op1: string
	//op2: null || undefined || boolean
	item = op1;
	if(item.includes(op2 + "")) {
		regex = new RegExp((op2 + ""), "g");
		item = item.replace(regex, "");
		}
	return item;
	},
	subNUB_A(op1, op2) {
	//op1: null || undefined || boolean
	//op2: array
	array = op2;
	item = op1;
	array = array.includes(item) ?
	array.filter(i => i !== item) : array;
	return array;
		},
	subA_NUBN(op1, op2) {
	//op1: array
	//op2: null || undefined || boolean || number
	array = op1;
	item = op2;
	array = array.includes(item) ?
	array.filter(i => i !== item) : array;
	return array;
		},
	subNUB_O(op1, op2) {
	//op1: null || undefined || boolean
	//op2: object
	object = op2;
	array = [
	Object.keys(object),
	Object.values(object)
	];
	for(let i = 0; i < array[1].length; i++) {
		if(array[1][i] === op1)
			delete object[array[0][i]];
		}
		return object;
		},
	subO_NUBN(op1, op2) {
	//op1: object
	//op2: null || undefined || boolean || number
	object = op1;
	item = op2;
	array = [
	Object.keys(object),
	Object.values(object)
	];
	for(let i = 0; i < array[1].length; i++) {
		if(array[1][i] === item)
			delete object[array[0][i]];
	}
	return object;
		},
	N_A(op1, op2) {
	//op1: number
	//op2: array
	array = op2;
	item = op1;
	for(let el of array) {
		if(typeof el === "number")
			item = item - el;
		else if(typeof el === "string") {
			regex = new RegExp(el, "g");
			item = item.toString();
			item = item.includes(el) ?
			item.replace(regex, "") : item;
			item = item.includes("." ) ?
			parseFloat(item) : parseInt(item);
			}
		else if(typeof el === "boolean")
			item = item - (el*1);
		else item = item;
	}
	return item;
		}
  }
  let operation = {
//null
both_op1_op2_null: (op1, op2) => C.subNorm(op1, op2),
op1_null_op2_undef: (op1, op2) => C.subNorm(op1, op2),
op1_undef_op2_null: (op1, op2) => C.subNorm(op1, op2),
op1_null_op2_bool: (op1, op2) => C.subNorm(op1, op2),
op1_bool_op2_null: (op1, op2) => C.subNorm(op1, op2),
op1_null_op2_num: (op1, op2) => C.subNorm(op1, op2),
op1_num_op2_null: (op1, op2) => C.subNorm(op1, op2),
op1_null_op2_str(op1, op2) {
	return C.subNUB_S(op1, op2);
},
op1_str_op2_null(op1, op2) {
	return C.subS_NUB(op1, op2);
},
op1_null_op2_arr(op1, op2) {
	return C.subNUB_A(op1, op2);
	},
op1_arr_op2_null(op1, op2) {
	return C.subA_NUBN(op1, op2);
	},
op1_null_op2_obj(op1, op2) {
	return C.subNUB_O(op1, op2);
	},
op1_obj_op2_null(op1, op2) {
	return C.subO_NUBN(op1, op2);
	},
//undefined
both_op1_op2_undef: (op1, op2) => C.subNorm(op1, op2),
op1_undef_op2_bool: (op1, op2) => C.subNorm(op1, op2),
op1_bool_op2_undef: (op1, op2) => C.subNorm(op1, op2),
op1_undef_op2_num: (op1, op2) => C.subNorm(op1, op2),
op1_num_op2_undef: (op1, op2) => C.subNorm(op1, op2),
op1_undef_op2_str(op1, op2) {
	return C.subNUB_S(op1, op2);
},
op1_str_op2_undef(op1, op2) {
	return C.subS_NUB(op1, op2);
},
op1_undef_op2_arr(op1, op2) {
	return C.subNUB_A(op1, op2);
	},
op1_arr_op2_undef(op1, op2) {
	return C.subA_NUBN(op1, op2);
	},
op1_undef_op2_obj(op1, op2) {
	return C.subNUB_O(op1, op2);
	},
op1_obj_op2_undef(op1, op2) {
	return C.subO_NUBN(op1, op2);
	},
//boolean
both_op1_op2_bool: (op1, op2) => C.subNorm(op1, op2),
op1_bool_op2_num: (op1, op2) => C.subNorm(op1, op2),
op1_num_op2_bool: (op1, op2) => C.subNorm(op1, op2),
op1_bool_op2_str(op1, op2) {
	return C.subNUB_S(op1, op2);
},
op1_str_op2_bool(op1, op2) {
	return C.subS_NUB(op1, op2);
},
op1_bool_op2_arr(op1, op2) {
	return C.subNUB_A(op1, op2);
	},
op1_arr_op2_bool(op1, op2) {
	return C.subA_NUBN(op1, op2);
	},
op1_bool_op2_obj(op1, op2) {
	return C.subNUB_O(op1, op2);
	},
op1_obj_op2_bool(op1, op2) {
	return C.subO_NUBN(op1, op2);
	},
//number
both_op1_op2_num: (op1, op2) => C.subNorm(op1, op2),
op1_num_op2_str(op1, op2) {
	item = op1 + "";
	if(item.includes(op2)) {
	regex = new RegExp(op2, "g"); 	item = item.replace(regex, "");
	}
	item = item.includes(".") ?
	parseFloat(item) : parseInt(item);
	return item;
},
op1_str_op2_num(op1, op2) {
	item = op1;
	if(item.includes(op2 + "")) {
	regex = new RegExp((op2 + ""), "g");
	item = item.replace(regex, "");
	}
	return item;
},
op1_num_op2_arr(op1, op2) {
	 return C.N_A(op1, op2);
     },
op1_arr_op2_num(op1, op2) {
	return C.subA_NUBN(op1, op2);
	},
op1_num_op2_obj(op1, op2) {
	object = op2;
	array = Object.values(object);
	for(let i = 0; i < array.length; i++) {
		if(op1 === array[i] || (op1+"").includes(array[i]))
			return C.N_A(op1, array);
		} return op1;
	},
op1_obj_op2_num(op1, op2) {
	return C.subO_NUBN(op1, op2);
	},
//string
both_op1_op2_str(op1, op2) {
	item = op1;
	item = item.includes(op2) ?
	item.replace(op2, "") : op1;
	return item;
	},
op1_str_op2_arr(op1, op2) {
	array = op2;
	item = op1;
	for(let i = 0; i < array.length; i++) {
		if(item.includes(array[i] + "")) {
		regex = new RegExp(array[i] + "", "g");
		item = item.replace(regex, "");
		}
	}
	return item;
     },
op1_arr_op2_str(op1, op2) {
	array = op1;
	item = op2;
	array = array.filter(el => el !== item);
	return array;
	},
op1_str_op2_obj(op1, op2) {
	object = op2;
	item = op1;
	array = [
	Object.keys(object),
	Object.values(object)
	];
	for(let i = 0; i < array[1].length; i++)
		if(item.includes(array[1][i])) {
			regex = new RegExp(array[1][i], "g");
			item = item.replace(regex, "");
			}
	return item;
	},
op1_obj_op2_str(op1, op2) {
	object = op1;
	item = op2;
	array = [
	Object.keys(object),
	Object.values(object)
	];
	for(let i = 0; i < array[0].length; i++) {
		if(array[0][i] === item)
			delete object[array[0][i]];
	}
	return object;
	},
//array
both_op1_op2_arr(op1, op2) {
	array = op1;
    item = op2;
    for(let i = 0; i < array.length; i++)
    	for(let j = 0; j < item.length; j++)
    		if(item[j] === array[i])
    			array = array.filter(el => el !== item[j]);
    return array;
	},
op1_arr_op2_obj(op1, op2) {
	array = op1;
	object = op2;
	item = Object.keys(object);
	for(let i = 0; i < array.length; i++)
		for(let j = 0; j < item.length; j++)
			if(array[i] === item[j])
				array = array.filter(el => el !== item[j]);
	return array;
	},
op1_obj_op2_arr(op1, op2) {
	array = op2;
	object = op1;
	item = Object.keys(object);
	for(let i = 0; i < item.length; i++)
		for(let j = 0; j < array.length; j++)
			if(item[i] === array[j])
				delete object[item[i]];
	return object;
     },
//object
both_op1_op2_obj(op1, op2) {
	object = [op1, op2];
	item = [
		Object.keys(object[0]),
		Object.keys(object[1]),
		Object.values(object[0]),
		Object.values(object[1])
		]
	for(let i = 0; i < item[0].length; i++)
		for(let j = 0; j < item[1].length; j++)
			if((item[0][i] === item[1][j]) && (item[2][i] === item[3][j]))
				delete object[0][item[0][i]];
	return object[0];
	}
}//operation{}
  return this.performOperation("-", operation);
  }//substraction()
}
 function I(expression) {
 let Stack = {
	opors: {"+":1,"-":1,"/":2,"*":2,"(":0},
	operands: [],
	operators: [],
	expression: "",
	evalexp(exp) {
		Stack.expression = "";
	for(let i = 0; i < exp.length; i++) {
		if(Object.keys(Stack.opors).includes(exp[i]) && Stack.operators.length === 0) {
		Stack.operators.push(exp[i]);
		Stack.expression += exp[i];
		}
		else if(Object.keys(Stack.opors).includes(exp[i]) && Stack.operators.length === 1) {
		if(Stack.operators[0] === "+")
		Stack.expression = new Icy(Stack.expression).addition();
		if(Stack.operators[0] === "-")
		Stack.expression = new Icy(Stack.expression).subtraction();
		Stack.expression = (typeof Stack.expression !== "string") ? `${Stack.expression}` : Stack.expression;
		//Stack.operators.pop();
		Stack.expression += exp[i];
		}
		else {
		Stack.expression += exp[i];
		}
	}
		if(Stack.operators[0] === "+")
		return new Icy(Stack.expression).addition();
		if(Stack.operators[0] === "-")
		return new Icy(Stack.expression).subtraction();
	}
};
return Stack.evalexp(expression);
}