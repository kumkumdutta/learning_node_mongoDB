import {   Delete, Update, find, findbyname, insert, search} from "../services/crud.js";
import {ObjectId} from 'mongodb'

export const createData = async (request, reply) => {
  try {
    let obj = request.body;
    await insert({ collectionname: "myData", doccument: obj });
    console.log(obj);
    return reply.send("new data created");
  } catch (error) {
    console.log(error);
    return reply.send(error);
  }
};

export const getData = async (request, reply) => {
  const data = await find({ collectionname: "myData" });
  console.log(data);
  return reply.send(data);
};

export const getDatabyKey = async (req, res) => {
  try {
    let { name } = req.query;
    const data = await findbyname({ collectionname: "myData", name: name });
    console.log(data);
    
    return res.status(200).send(data);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

export const SearchData = async (req,res) => {
  try {
    let pattern = req.params.pattern

   const data = await search({collectionname:'myDara',pattern:pattern})
    return res.status(200).send(data)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error);
  }
}

export const updateData = async (req,res)=>{
    try {
        await Update({collectionname:'myData',filter:{_id:new ObjectId(req.params.id)},doccument:req.body})
        return res.status(200).send('item updated')
    } catch (error) {
        return res.status(500).send(error)
    }
}

export const deleteData = async (req,res)=>{
    try {
        await Delete({collectionname:'mydata',filter:{_id:new ObjectId(req.params.id)}})
        return res.status(200).send('item deleted')
    } catch (error) {
        return res.status(500).send(error)
    }
}