

export const insert = async ({ collectionname, doccument }) => {
  try {
   
    console.log(doccument);
    await global.db.collection(collectionname).insertOne(doccument);
  } catch (error) {
    console.log(error);
  }
};

export const find = async ({ collectionname }) => {
  try {
    const result = await global.db
      .collection(collectionname)
      .find({})
      .toArray();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const findbyname = async ({ collectionname, name }) => {
  try {
    const result = await global.db
      .collection(collectionname)
      .find({ name })
      .toArray();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const search = async ({collectionname , pattern})=>{
  try {
    const result = await global.db
    .collection(collectionname)
    .find({search_string : {$regex : pattern, $options:"i"}})
    return result
  } catch (error) {
    console.log(error)
  }

}

export const Update = async ({ collectionname, filter, doccument }) => {
  try {
    let data = await global.db
      .collection(collectionname)
      .updateOne(filter, { $set: doccument });
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const Delete = async ({ collectionname, filter }) => {
  try {
    let data = await global.db.collection(collectionname).deleteOne(filter);
    // console.log(data);
    console.log(data)
  } catch (error) {
    console.log(error);
  }
};
