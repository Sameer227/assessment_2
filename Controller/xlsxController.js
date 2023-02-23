const xlsx = require("xlsx");

const xlsxController = (req, res) => {
  console.log(req.files);

if(!req.files){
    res.status(200).send({
        status: 502,
        msg:"pls provide the file"  
    })
}


  let file = req.files.file.data;

  try {
    
  let wb = xlsx.read(file, { type: "buffer" });
  const wsname = wb.SheetNames[0];
  const ws = wb.Sheets[wsname];
  const data = xlsx.utils.sheet_to_json(ws);
  console.log(data);

  let finalResponse = {
    processed: [],
    unprocessed: [],
  };
  let filter = {};

  data.forEach((records) => {
    if (filter[`${records.mobile}`]) {
      finalResponse.unprocessed.push(records);
    } else {
      filter[`${records.mobile}`] = 1;
      finalResponse.processed.push(records);
    }
    console.log(filter);
  });
  console.log(finalResponse);

  res.status(200).send(finalResponse)

  
} catch (error) {
    res.status(200).send({
        status: 502,
        msg:"something went wrong"  
    })
}
};

module.exports = { xlsxController };
