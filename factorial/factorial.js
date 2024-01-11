const factorial = async(num) => {

        if(num === 0 || num === 1){
            return 1;
        }
        else {
            return factorial(num-1) * num;
        }

}
