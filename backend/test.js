
{
  _id:"xpto",
  _idUsuario:"xpto Joao",
  dados:"bsvbvb",
}


try{
  const find=await findOne({_id:"xpto"})
}catch(e){
  console.log(e);
}finally{
    findOneAndDelete(find._id)
    findOneAndDelete(find._id._idUsuario)
}
