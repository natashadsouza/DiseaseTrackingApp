/**
 * Created by aneri on 02-05-2016.
 */
/**
 * Created by aneri on 08-04-2016.
 */

/**
 * Created by aneri on 08-04-2016.
 */
/**
 * Created by aneri on 07-04-2016.
 */
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/health_care";

function insertClientData(req,res) {

    var ssn = req.param("ssn");
    var city = req.param("city");
    var disease = req.param("disease");
    var insertJSON = {
        SSN: ssn,
        city: city,
        disease: disease
    };


    mongo.insertOne("userinfo",insertJSON, function (err, result) {
        if (err) {
            console.log(err);
        } else if(result) {

            console.log(result);
            var jsonResponse = {"statusCode": 200};
           res.send(jsonResponse)
           console.log("fuck");


        }
    });


}



function search(req,res) {
    var city = req.param("city");


    var findJSON1 = {
        "city": city,
        "disease":"malaria",

    };


    mongo.findOne("userinfo",findJSON1, function (err, result1) {
        if (err) {
            console.log(err);
        } else if(result1) {

            console.log(result1);
            mongo.count("userinfo",findJSON1, function (err, count1) {
                if (err) {
                    console.log(err);
                } else  {


                          var jsonResponse1={"result1":result1,"count1":count1}

                    console.log(count1+"malaria");
                    global.cnt1=count1;
                  //  var jsonResponse = {"result": result,"statusCode":200,"count":count};
                    //res.send(jsonResponse)
                    var findJSON2 = {
                        "city": city,
                        "disease":"dengue"
                    };
                    mongo.findOne("userinfo",findJSON2, function (err, result2) {
                        if (err) {
                            console.log(err);
                        } else if(result2) {

                            // console.log(result);
                            mongo.count("userinfo",findJSON2, function (err, count2) {
                                if (err) {
                                    console.log(err);
                                } else  {


                                        var jsonResponse2={"result2":result2,"count2":count2}


                                    console.log(count2+"dengue");
                                    global.cnt2=count2;
                                    //var jsonResponse = {"result": result,"statusCode":200,"count":count};
                                    // res.send(jsonResponse)


                                    var findJSON3 = {
                                        "city": city,
                                        "disease":"tuberculosis"
                                    };

                                    mongo.findOne("userinfo",findJSON3, function (err, result3) {
                                        if (err) {
                                            console.log(err);
                                        } else if(result3) {

                                            // console.log(result);
                                            mongo.count("userinfo",findJSON3, function (err, count3) {
                                                if (err) {
                                                    console.log(err);
                                                } else  {


                                                        var jsonResponse3={"result3":result3,"count3":count3}

                                                    console.log(count3+"dengue");
                                                    global.cnt3=count3;
                                                    //var jsonResponse = {"result": result,"statusCode":200,"count":count};
                                                    // res.send(jsonResponse)

                                                    var findJSON4 = {
                                                        "city": city,
                                                        "disease":"allergy"
                                                    };

                                                    mongo.findOne("userinfo",findJSON4, function (err, result4) {
                                                        if (err) {
                                                            console.log(err);
                                                        } else if(result4) {

                                                            // console.log(result);
                                                            mongo.count("userinfo",findJSON4, function (err, count4) {
                                                                if (err) {
                                                                    console.log(err);
                                                                }
else{

                                                                        var jsonResponse4={"result4":result4,"count4":count4}

                                                                    console.log(count4+"tuber");
                                                                    global.cnt4=count4;
                                                                    //var jsonResponse = {"result": result,"statusCode":200,"count":count};
                                                                    // res.send(jsonResponse)




    var findJSON5 = {
        "city": city,
        "disease":"respiratory disorder"
    };



                    mongo.findOne("userinfo",findJSON5, function (err, result5) {
                        if (err) {
                            console.log(err);
                        } else if(result5) {

                            // console.log(result);
                            mongo.count("userinfo",findJSON5, function (err, count5) {
                                if (err) {
                                    console.log(err);
                                } else  {

                                        var jsonResponse5={"result5":result5,"count5":count5}

                                    console.log(count5+"allergy");
                                    global.cnt5=count5;
                                   var jsonResponse={ "statusCode":200}
                                    res.send({"result1":result1,"result2":result2,"result3":result3,"result4":result4,"result5":result5,"statusCode":200,"count1":count1,"count2":count2,"count3":count3,"count4":count4,"count5":count5});
                                    //var jsonResponse = {"result": result,"statusCode":200,"count":count};
                                    // res.send(jsonResponse)



                                }
                            });




                        }
                    });


                }
            });




        }
    });
                                                                }
                                                            });




                                                        }
                                                    });
                                                }
                                            });




                                        }
                                    });
                                }
                            });









        }
    });



}



exports.insertClientData = insertClientData;
exports.search = search;



