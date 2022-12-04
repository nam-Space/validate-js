const validate = (value) => {
    const check = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (check.test(value)) {
        console.log("Success");
    } else {
        console.log("Fail");
    }
};
