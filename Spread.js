/* Rest and Spread change below to use rest and arrow functions

function filterOutOdds() {

    var nums = Array.prototype.slice.call(arguments);

    return nums.filter(function(num) {

      return num % 2 === 0

    });
  }
  */

    const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

    // find min
    const findMin = (...args) => Math.min(...args) //calling math.min to find the min of the arguments

    //mergeObjects

    const mergeObjects = (obj1,obj2) => ({...obj1,...obj2}) //simple merger of 2 objects 

  //Double and Return args

  const doubleReturn = (arr,...args) =>[...arr,...args.map(v=>v*2)] //take v times by 2 then return it into map

  //slice and dice
  //just removing a randm element from array and returning a new one
  const removerandom = items => {
    let index = Math.floor(Math.random()*items.length);
    return [...items.slice(0,index),...items.slice(idx + 1)];

  }
    //fusing together array 1 and array 2
  const fusion = (array1,array2) =>
  {
    return [...array1,...array2]; //just returing the 2 arrays put together

  }
    // key value
    const keyval = (obj,key,val) =>{
        let nobj = {...obj} //setting a new obj equal to defined obj
        nobj[key] = val; //implementing key and nobj to equal val
        return nobj; //return new obj
    }

        //removeKey
    const removeKey = (obj,key) => {

    let nobj = {...obj} //set nobj to obj

    delete nobj[key]//remove key from nobj

    return nobj;//return nobj
    }

        //combine obj
    const together = (obj1,obj2) =>{

        return {...obj1,...obj2};
    }
        //return a new object with modified key and value
        const update = (obj,key,val) => {

            let nobj = {...obj} //set new obj to obj

            nobj [key] = val; //find key and make then equal value

            return nobj; //return new obj results
        }
