const product = require('../model/product')

const getAllProducts= async(req,res)=>{
    const {company,name,sort,select}=req.query;
    const queryObject={}

    if(company){
        queryObject.company=company;
        console.log(queryObject.company);
    }
    if(name){
        queryObject.name={$regex:name,$options:"i"};
    }
    let apiData=product.find(queryObject);
    if(sort){
        let sortFix=sort.replace(","," ");
        apiData=apiData.sort(sortFix)
    }
    if(select){
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix)
    }
    console.log(queryObject)

    let page=Number(req.query.page)||1;
    let limit=Number(req.query.limit)||3;


    let skip= (page-1)*limit;
    apiData = apiData.skip(skip).limit(limit);

    const mydData= await apiData;
    res.status(200).json({mydData,nhhit:mydData.length})
}
const getAllProductsTesting= async(req,res)=>{
    console.log(req.query);
    
    const mydData= await product.find(req.query);
    console.log(req.query);
    res.status(200).json({mydData})
}

module.exports={getAllProducts,getAllProductsTesting}